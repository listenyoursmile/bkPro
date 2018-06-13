const md5 = require('md5');
const db = require('../sql');
const Token = db.Token;
module.exports = {
    //获取token
    'POST /blog/front/get_token': async (ctx, next) => {
        const {
            blog_pass
        } = ctx.request.body;
        console.log(ctx)
        if (blog_pass === "blogABCD") {
            let time = new Date().getTime()
            Token.create({
                token: md5(time),
                create_time: time,
                expire_time: time + 2 * 60 * 60 * 1000
            })
            ctx.response.body = {
                code: 800,
                data: md5(time),
                msg: '获取token成功！'
            };
        }
    }
}