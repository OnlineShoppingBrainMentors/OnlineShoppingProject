const connection=require("../../connection");
const Schema=connection.Schema;

const productschema=new Schema({
    productid:{type:String,unique:true,required:true},
    productname:{type:String,required:true},
    shortdescription:{type:String},
    stock:{type:String},
    status:{type:String},
    category:{type:String},
    subcategory:{type:String},
    set:{type:String},
    variants:[{type:String}],
    purchaseprice:{type:String},
    sellingprice:{type:String},
    mrp:{type:String},
    tax:{type:String},
    description:{type:String},
    images:[{type:String}],
    maximumquantitylimit: {type:String},
     specification: [
        {  keyname:{type:String},
            value:{type:String}
        }
 ],
    averagerating: {type:String},
    creationdate: {type:date},
    modificationdate:{type:date},
    reviews: [{
        rating:{type:String},
        reviews:{type:String},
        description:{type:String},
        by:{type:String},
        time:{type:date}
    }],
    faq:[{
        question:{type:String},
        by:{type:String},
        time:{type:date},
        upvote:{type:String},
        downvote:{type:String},
        answers:[{
            by:{type:String},
            time:{type:date},
            description:{type:String}
        }]
    }]

    
});