//express
const express = require('express');
//port
const port = 4000;
// app variable
const app = express();
// middleware
app.use(express.json());
// how to send data to server
app.post('/user',(req,res)=>{
console.log(req.body);

const {userName,passWord} = req.body;// from client side
// DB connection and fetch userName and passWord
if (userName==="DadaBhoge" && passWord==="dada123") {
    res.send("LogIn Successful");
} else {
    res.send("Invalid UserName and PassWord");
}

});

// create port
app.listen(port,(error)=>{
    if (error) {
        console.log(error);
    } else {
        console.log(`Listen on port`);
    }
});