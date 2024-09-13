const express = require('express')
const path= require('path')
const os = require('os')

const app = express()
const port = 3300
const basePath = path.join(__dirname, 'templates')

app.get('/',(req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>console.log(`Servidor rodando em http://localhost:${port}`))
