const connection=require("../common/connection");
const Schema=connection.Schema;
// var adminschema= new Schema({
//     name:String,email_id:String,password:String,phone_no:String});

var adminschema = new Schema(
    {
        name:{type:String, required :true},
        login : 
        {   userid:{type:String, required :true, unique : true},
            password:{type:String,required :true}
        },    
        phone:{type:String, required :true},
        email:{type:String, required : true},
        createdAt:{type:Date, required :true},
        updatedAt:{type:Date, required :true}
});
var adminModel=connection.model("accountDetails",adminschema);
module.exports=adminModel; 