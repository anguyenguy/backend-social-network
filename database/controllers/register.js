const User = require("../models/user");

const register = function(data){
            const user = new User({
                email : data.email,
                password: data.password
            });
            
            user.save().then(function(){
                if(!user.isNew){
                    console.log("You are successful register!!!");
                }else{
                    console.log("Opp, Something happen, Please check your account again");
                }
            });
} 

module.exports = register;

