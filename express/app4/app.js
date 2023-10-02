const express =require('express');
const path= require('path');
const cookieparser=require('cookie-parser')
const app=express();

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieparser())

app.use(require(path.join(__dirname,'routes.js')))


app.listen(3000)