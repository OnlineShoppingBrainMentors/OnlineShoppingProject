const connection = require(/../connection);
const Schema=connection.Schema;


const categoriesSchema = new Schema({


    _id: {type : String ,required : true},
    name: {type : String ,required : true},
    description: {type : String ,required : true},
    specification: {
        purchaseprice: {type : String ,required : true},
        sellingprice: {type : String ,required : true},
        tax:{type : String ,required : true} 
    },
    subcategory: [
        {
            name:{type : String ,required : true} ,
            
            description: {type : String ,required : true},
            specification: {
                key1: {type : String },
                key2: {type : String },
            },
            set: [
                {
                    name: {type : String ,required : true},
                    decription:{type : String ,required : true} ,
                    specification: {
                        key1:{type : String } 
                    },
                    product: [{type : String }]
                },
                {
                    name: {type : String ,required : true},
                    description:{type : String ,required : true} ,
                    specification: {
                        key1: {type : String },
                        key2:{type : String } 
                    },
                    product: [{type : String ,required : true}]
                }
            ]
        },
        {
            name: {type : String ,required : true},
            description: {type : String ,required : true},
            specification: {
                key1: {type : String},
                key2:{type : String } 
            },
            set: [
                {
                    name: {type : String ,required : true},
                    description: {type : String ,required : true},
                    specification: {
                        key1: {type : String },
                        key2: {type : String }
                    },
                    product: [{type : String ,required : true}]
                }
            ]
        }
    ]











})
