const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const expanseSchema=new Schema({
    amount:{
        type:Number
    },
    description:{
        type:String
    },
    categories:{
        type:String
    }
})

module.exports =mongoose.model('Expanse',expanseSchema);
