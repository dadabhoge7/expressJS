// import expressJS
const express = require('express');
const app = express();
// create on Port
const port = 3000;

//end point/route
// http Methods - Get, Post,Put,Patch,delete etc
// Syntax of End Point - app.AnyMethod('pth',(req,res)=>{})
app.get('/',(req,res)=>{
    res.send('Welcome to root URL of server get method');
})

app.post('/',(req,res)=>{
    res.send('Welcome to post method');
})

app.get('/home',(req,res)=>{
    res.send('Welocome to ExpressJS');
});

// hoe to send data to server
app.post('/user',(req,res)=>{
    res.send('Welcome to user details');
})

app.listen(port,(error)=>{
    if (error) {
        console.log(`Error Occurred server can not start : ${error}`);
    } else {
        console.log(`Server Successfully listening on port : ${port}`);
    }
});