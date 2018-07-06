

request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app.json')
    .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
    .set('Content-Type', 'application/json')
    .send({
        "name": "アプリA"
    })
    .end(function (err, res) {
        let appid = res.body.app

        request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app/deploy.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .send(body)     // "数値"字段
            .end(function (err, res) {

                setTimeout(function () {
                    request.post('https://yhgao.cybozu-dev.com/k/v1/record.json')
                        .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                        .set('Content-Type', 'application/json')
                        .send({
                            "app": appid,
                            "record": {
                                "数値": { "value": "1e123456789012" }
                            }
                        })
                        .end(function (err, res) {
                            console.log(res.body);
                            let id = res.body.id;
                            expect(res.status).to.eql(200)
                        }, 3000);
                        })
                })
            })