// import expressJS
const express = require('express');
const app = express();
// create on Port
const port = 3000;

//end point/route
app.get('/',(req,res)=>{
    res.send('Welcome to root URL of server get method');
})

app.listen(port,(error)=>{
    if (error) {
        console.log(`Error Occurred server can not start : ${error}`);
    } else {
        console.log(`Server Successfully listening on port : ${port}`);
    }
});