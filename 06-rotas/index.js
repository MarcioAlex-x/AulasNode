const express = require('express')
const os = require('os')
const users = require('./users')
const path = require('path')

const basePath = path.join(__dirname, 'templates')

const app = express()
const port = 3300
app.use('/users', users)

app.get('/',(req, res)=>{
    res.sendFile(`${basePath}/index.html`)
    const servidor = os.hostname()
    console.log(`Navegador iniciado em ${servidor}`)
})


app.listen(port, ()=>console.log(`Servidor rodando em http://localhost:${port}`))
