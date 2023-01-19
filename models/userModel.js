const userModel = mongoose.model('users', new mongoose.Schema({}, { timestamps: true, strict: false , _id : false }))


module.exports = userModel