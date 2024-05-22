require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('its_amanojha')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>This will be a Youtube page</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log('Example app listining on port '+ process.env.PORT)
})