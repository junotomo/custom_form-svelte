const {join} = require('path')
const Koa = require("koa")
const Router = require("koa-router")
const serve = require('koa-static')
const Mongo = require('@tadashi/mongo-singleton')


const app = new Koa()

app.use(serve(join(__dirname, '..', 'public')))

app.listen(5000)
