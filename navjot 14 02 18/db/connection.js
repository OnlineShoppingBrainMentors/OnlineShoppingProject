// var mongoose=require("mongoose");
// var config=require("./config");
// mongoose.connect(config.DBurl);
// module.exports=mongoose;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});