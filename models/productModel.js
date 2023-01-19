const productModel = mongoose.model('products', new mongoose.Schema({id : { type : String}}, { timestamps: true, strict: true , _id : false }))

module.exports = productModel