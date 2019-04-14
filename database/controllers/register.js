const User = require("../models/user");

const register = function(){
            const user = new User({
                familyname:"nguyen",
                name:"quan",
                email:"rocketguy@nguyenquan.net",
                password:"quan1997",
                birthday:{day:15,month:1,year:1997}
            });
            
            user.save().then(function(){
                console.log("register successful!")
            });
} 

module.exports = register;

