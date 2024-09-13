const express = require('express')
const path = require('path')
const routes = require('./router')

const app = express()
const PORT = 5000
const basePath = path.join(__dirname, 'templates')

app.use(express.static('public'))
app.use(routes)

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
