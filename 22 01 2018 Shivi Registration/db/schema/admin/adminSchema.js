const connection = require("../../connection");
const Schema=connection.Schema;
const adminRegSchema= new Schema({
    name:{type:String},
      userid:{type:String},
        password:{type:String},    
    contact_no:{type:String},
    /*name:String,userid:String,password:String,contact_no:String*/
}) ;
var adminModel=connection.model("accountDetails",adminRegSchema);
module.exports=adminModel; 