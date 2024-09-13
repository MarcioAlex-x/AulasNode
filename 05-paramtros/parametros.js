const express = require('express')
const path= require('path')
const os = require('os')
const { resolveSoa } = require('dns')

const app = express()
const port = 3300
const basePath = path.join(__dirname, 'templates')

const checkAuth = (req,res,next) =>{
    req.authStatus = true
    if(req.authStatus){
        console.log('Está logado')
        next()
    }else{
        console.log('Não está logado')
    }
}

app.use(checkAuth)

app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    res.sendFile(`${basePath}/users.html`)
    console.log(`Consultando usuário com id ${id}`)
})

app.get('/',(req, res)=>{
    res.sendFile(`${basePath}/index.html`)
    const servidor = os.hostname()
    console.log(`Navegador iniciado em ${servidor}`)
})

app.listen(port, ()=>console.log(`Servidor rodando em http://localhost:${port}`))
