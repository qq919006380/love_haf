const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

console.log(__dirname+'/dist')
app.use(async ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream(__dirname+'/dist/index.html');
});
console.log('300')
app.listen(3000);