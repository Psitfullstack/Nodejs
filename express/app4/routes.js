const express = require('express');
const path = require('path');

const route=express.Router()

route.get('/contact',(req,res)=>{

    res.sendFile(path.join(__dirname,'public/contact.html'))

     res.cookie('name2',"amir");
     console.log(req.cookies)
 })


 route.get('/service',(req,res)=>{

    res.sendFile(path.join(__dirname,'public/service.html'))
 })

 route.get('/login',(req,res)=>{

    res.sendFile(path.join(__dirname,'public/login.html'))
 })

 route.post("/login",(req,res)=>{

           console.log(req.body.uname)
           console.log(req.body.password)

 })

module.exports=route
