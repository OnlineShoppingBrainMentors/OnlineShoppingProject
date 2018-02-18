const Schema=connection.Schema;
const ordersSchema= new Schema({
    name:{type:String},
    userid:{type:String},
    password:{type:String},    
    phone_no:{type:String},
    dob:{type:String},
    photo:{type:String},
    signature:{type:String}
    /*name:String,userid:String,password:String,contact_no:String*/
}) ;
var ordersModel=connection.model("orders",ordersSchema);
module.exports=ordersModel;