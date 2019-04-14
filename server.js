const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const register = require('./database/controllers/register');
const signin = require("./database/controllers/signin");


const app = express();


//Thiết lập một kết nối mongoose mặc định
    const mongoDB = 'mongodb://127.0.0.1/socialnetwork';
    mongoose.connect(mongoDB);
    mongoose.connection.once('open',function(){
        console.log("Connection has been made, now make fireworks...");
    }).then(()=>{
        mongoose.Promise = global.Promise;
        //Lấy kết nối mặc định
        next();
    });
    const db = mongoose.connection;
    // register();
    signin();

    




// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
// app.use(cors());

// app.post('/',(req, res) =>{
//     console.log('There is a stranger')
//     console.log(req.body);
//     if(req.body.user.email===database.users[0].email
//         && req.body.user.password === database.users[0].password
//         ){
//             res.json('success');
//     }else{
//         res.status(400).json('Error');
//     }

    
// })

app.listen(3000);