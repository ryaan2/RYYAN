const {Schema, model} = require ('mongoose')

const productSchema = new Schema (
{
    title: String,
    price: Number,
    image: String,
    description: String,
    quentity: Number,
    
},
 {
    timestamps:true,
    versionKey: false,
 }

);

model.exports = ('product', productSchema);
