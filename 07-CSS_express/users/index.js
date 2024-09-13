const express = require('express')
const path= require('path')
const router = express.Router()

const basePath = path.join(__dirname, '../templates')

const checkAuth = (req,res,next) =>{
    req.authStatus = true
    if(req.authStatus){
        console.log('Está logado')
        next()
    }else{
        console.log('Não está logado')
    }
}

router.use(checkAuth)
router.use(
    express.urlencoded({
        extended: true
    })
)
router.use(express.json())

router.get('/create',(req,res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save',(req,res)=>{
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do usuário é ${name}, sua idade é ${age}.`)
    res.sendFile(`${basePath}/userForm.html`)
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    res.sendFile(`${basePath}/users.html`)
    console.log(`Consultando usuário com id ${id}`)
})

module.exports = router
