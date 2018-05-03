let Client = require('ssh2').Client;

class slashAdminFullsync {

    constructor() {
        this._settings = {
            host: '172.16.0.33',
            port: 22,
            username: process.env.FOREST_DEV_USER,
            password: process.env.FOREST_DEV_PWD
        };
    }

    fullSyncPromise() {
        return new Promise((resolve, reject) => {
            let conn = new Client();
            conn.on('ready', () => {
                // console.log('Client :: ready');
                let command = '/usr/local/forest/bin/slash-admin fullsync ' + process.env.DOMAIN_ID;
                // console.log(command);
                conn.exec(command, (err, stream) => {
                    if (err) {
                        reject(err);
                    }
                    stream.on('close', (code, signal) => {
                        // console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                        conn.end();
                    }).on('data', (data) => {
                        resolve(data);
                        // console.log('STDOUT: ' + data);
                    }).stderr.on('data', (data) => {
                        // console.log('STDERR: ' + data);
                    });
                    // console.log('Done.');
                });
            }).connect(this._settings);
        });
    }

}
module.exports = slashAdminFullsync;

/*
Unit test:
==========

function waitIn(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let s = new slashAdminFullsync();

waitIn(5000).then(() => {
    console.log("Init data.....5s");
    s.fullSyncPromise();
}).catch(err => {
    throw new Error(err);
});
*/