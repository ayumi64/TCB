class Encode {

    base64(str) {
        return new Buffer(str).toString('base64');
    }
}
module.exports = new Encode();