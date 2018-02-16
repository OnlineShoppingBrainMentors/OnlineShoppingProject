const connection = require("../../connection");
const Schema=connection.Schema;

const admindetailsschema = new Schema ({

    adminid: {type:String,required : true} ,
    name: {type:String,required : true} ,
    dateofbirth:  {type:Date,required : true},
    dateofjoining: {type:Date,required : true},
    nickname: {type:String} ,
    designation: {type:String,required : true} ,
    email: {type:String,required : true,unquie : true} ,
    password: {type:String,required : true} ,
    forgotpasswordcode: {type:Date} ,
    forgotpasswordcodegenerationtime: {type:Date},
    phone: [{type:String,required : true} ],
    status: {type:String,required : true} ,
    salary: {type:String,required : true} ,
    photo:{type:String,required : true}  ,
    orders: [{type:String,required : true} ],
    sales: {
        weekly:{type:String}  ,
        monthly: {type:String} ,
        quarterly:{type:String}  ,
        annually:{type:String}  ,
        totalsales:{type:String,required : true}  
    }

})
