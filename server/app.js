const express=require('express');
const mongoose=require('mongoose');
require('./db/conn');
const app=express();

app.use(express.json());
const User=require('./model/userSchema')

// linking router files
//first routers will be called used for authentication
app.use(require('./router/auth'));

// middleware
const middleware=(req,res,next)=>{
    console.log("hello middleware");
    next();
}
// middleware();


app.get('/',(req,res)=>{
    res.send("HEllow World");
})

app.get('/about',middleware,(req,res)=>{
    console.log("hello about");
    res.send("about us page");
})
app.get('/cases',middleware,(req,res)=>{
    console.log("hello about");
    res.send("about us page");
})
app.get('/vaccine',middleware,(req,res)=>{
    console.log("hello about");
    res.send("about us page");
})
app.get('/register',(req,res)=>{
    res.send("register page  page");
})
app.get('/signin',(req,res)=>{
    res.send("sign in  page");
})
app.get('/signup',(req,res)=>{
    res.send("sign up page");
})





app.listen(3000 ,()=>{
    console.log("server connected");
})