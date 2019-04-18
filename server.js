const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const register = require('./database/controllers/register');
const signin = require("./database/controllers/signin");

const app = express();

// DATABASE
// Connect to database use mongoDB
mongoose.connect('mongodb://localhost/socialnetwork');
// Check db connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Okay :) You are in connection!");
});

// Try to read data and through security 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors()); 


// When a user signs in 
// app.post('/',(req, res) =>{   
//     const data = req.body;
//     const emailT = data.email;
//     const passwordT = data.password;

//     signin(emailT,passwordT,)
// })

// Register for user
app.post('/',(req, res) => {
    const data = req.body;

    // Check when user register new account
    if(data.type==="resgister"){
        register(data);
    }
    
    // Check when user sign in
    if(data.type==="signin"){
        signin(data);
    } 
    
})


app.listen(3000, ()=>{
    console.log('app is running on port 3000')
});