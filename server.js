const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const database = {
    users:[
        {
            id:'123',
            name: 'quan',
            email: 'quan@gmail.com',
            password:"123456"
        },
        {
            id:'123',
            name: 'Quan',
            email: 'quang@gmail.com',
            password:"123456"
        }

    ]
}

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.post('/',(req, res) =>{
    console.log('There is a stranger')
    console.log(req.body);
    if(req.body.user.email===database.users[0].email
        && req.body.user.password === database.users[0].password
        ){
            res.json('success');
    }else{
        res.status(400).json('Error');
    }

    
})

app.listen(3000);