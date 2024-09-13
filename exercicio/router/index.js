const expess = require('express')
const path = require('path')

const basePath = path.join(__dirname,'../templates')
const routes = expess.Router()

routes.get('/contato',(req,res)=>{
    res.sendFile(`${basePath}/contato.html`)
})

module.exports = routes
