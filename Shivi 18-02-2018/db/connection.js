var mongoose=require("mongoose");
var config=require("./config");
mongoose.connect(config.DBurl);
module.exports=mongoose;