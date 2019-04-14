const User = require("../models/user");

const signin = function(){
            const email = "rocketguy@nguyenquan.net";
            const password = "quan1997"; 


            User.findOne({email:email}).then(function(record){
                if(record.password===password){
                    console.log("Correctly");
                }else{
                    console.log("Empty");
                }
            
            });
} 

module.exports = signin;