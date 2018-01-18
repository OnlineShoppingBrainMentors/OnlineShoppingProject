const connection=require("../common/connection");
const Schema=connection.Schema;
var adminschema= new Schema({name:String,email_id:String,password:String,phone_no:String});
var adminModel=connection.model("accountDetails",adminschema);
module.exports=adminModel; 