const User = require("../models/user");

const signin = function(data){
            const email = data.email;
            const password = data.password; 

            User.findOne({email:email}).then(function(record){
                if(record.password===password){
                    console.log("Correctly");
                }else{
                    console.log("Check your account again!");
                }
            });
} 

module.exports = signin;