const Schema=connection.Schema;
const categoriesSchema= new Schema({
    name:{type:String},
    userid:{type:String},
    password:{type:String},    
    phone_no:{type:String},
    dob:{type:String},
    photo:{type:String},
    signature:{type:String}
    /*name:String,userid:String,password:String,contact_no:String*/
}) ;
var categoriesModel=connection.model("categories",categoriesSchema);
module.exports=categoriesModel;