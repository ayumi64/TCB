let db = require('mysql');
let tunnel = require('tunnel-ssh');
let fs = require('fs');
let path = require('path');

class initializeDatabase {

    constructor() {
        // Config MySQL(cXXX_slash)
        this._settings_slash = {
            'host': '127.0.0.1',
            'port': process.env.Port_ID,
            'database': process.env.DOMAIN_ID + '_slash',
            'user': 'root',
            'password': 'cybozu',
            'multipleStatements': true
        };

        // Config MySQL(cXXX_audit)
        this._settings_audit = {
            'host': '127.0.0.1',
            'port': process.env.Port_ID,
            'database': process.env.DOMAIN_ID + '_audit',
            'user': 'root',
            'password': 'cybozu',
            'multipleStatements': true
        };

        // Config tunnel-ssh
        this._config = {
            username: process.env.FOREST_DEV_USER,
            password: process.env.FOREST_DEV_PWD,
            port: 22,
            host: '172.16.0.33',
            dstPort: 3306,
            dstHost: process.env.HOSTNAME_DB_SERVER,
            localHost: '127.0.0.1',
            localPort: process.env.Port_ID
        };

        this._getBaseTableQuery = 'SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = database() AND' +
            ' TABLE_TYPE = \'BASE TABLE\'';
    }

    initialize() {
        let slash_connection = db.createConnection(this._settings_slash);
        let audit_connection = db.createConnection(this._settings_audit);

        return this.setSshConnection().then(() => {
            return this._getBaseTable(slash_connection, this._settings_slash);
        }).then((baseTables) => {
            return this._truncateTable(slash_connection, baseTables);
        }).then(() => {
            return this.loadQueryFile();
        }).then((result) => {
            let queryInsert = result.toString();
            queryInsert = queryInsert.replace('__FQDN__', process.env.BASE_URL);
            return this.executeSqlQuery(slash_connection, queryInsert);
        }).then(() => {
            this.closeMysqlConnection(slash_connection);
        }).then(() => {
            return this._getBaseTable(audit_connection);
        }).then((baseTables) => {
            return this._truncateTable(audit_connection, baseTables);
        }).then(() => {
            this.closeMysqlConnection(audit_connection);
        }).catch(err => {
            throw new Error(err);
        });
    }

    /**
     * @param {Object} dbInfo        connection setting info
     * @see                          constructor()
     * */
    _getBaseTable(conn, dbInfo) {
        return this.executeSqlQuery(conn, 'set autocommit = 1')
            .then(() => {
                this.executeSqlQuery(conn, 'set foreign_key_checks = 0');
            }).then(() => {
                return this.executeSqlQuery(conn, this._getBaseTableQuery);
            });
    }

    /**
     * @param {Object} conn         connection for individual setting
     * @param {Array} baseTables    table arrays
     * @see                         _getBaseTable()
     * */
    _truncateTable(conn, baseTables) {
        let queryTruncate = '';
        for (let i in baseTables) {
            let tabbleName = baseTables[i].TABLE_NAME;
            if (tabbleName === 'module_version') {
                // No Truncate to Hazama tables
            } else {
                // Truncate
                queryTruncate = queryTruncate + 'TRUNCATE TABLE ' + tabbleName + ';';
            }
        }
        this.executeSqlQuery(conn, queryTruncate);
    }

    loadQueryFile() {
        return new Promise((resolve, reject) => {
            let p = path.join(__dirname, 'data.sql');
            // console.log(p);
            fs.readFile(p, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    }

    setSshConnection() {
        return new Promise((resolve, reject) => {
            tunnel(this._config, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    }

    closeMysqlConnection(connection) {
        return new Promise((resolve, reject) => {
            connection.end(this._config, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    }

    executeSqlQuery(connection, sqlContent) {
        return new Promise((resolve, reject) => {
            connection.query(sqlContent, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }

}
module.exports = initializeDatabase;