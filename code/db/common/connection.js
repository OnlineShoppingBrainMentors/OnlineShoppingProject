const mongoose=require("mongoose");
const configObj=require("../../utils/config");
mongoose.connect(configObj.dbURL);
module.exports=mongoose;