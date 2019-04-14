const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if(err){console.log("Err",err)}
    else{
        console.log("Database created!");
        db.close();
    }
});