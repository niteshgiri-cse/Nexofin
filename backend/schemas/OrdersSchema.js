const{Schema}=require("mongoose");
const OrdersSchema=new Schema({
    name:String,
    qty:Number,
    price:String,
    model:String,
});

module.exports={OrdersSchema};