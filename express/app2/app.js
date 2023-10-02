const express =require('express');
const path= require('path');
const app=express();
//middleware

app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))


// routes

app.get('/contact',(req,res)=>{

    res.sendFile(path.join(__dirname,'public/contact.html'))
 })


 app.get('/service',(req,res)=>{

    res.sendFile(path.join(__dirname,'public/service.html'))
 })

 app.get('/login',(req,res)=>{

    res.sendFile(path.join(__dirname,'public/login.html'))
 })

 app.post("/login",(req,res)=>{

           console.log(req.body.uname)
           console.log(req.body.password)

 })


app.listen(3000)