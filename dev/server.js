require('dotenv').config()
const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

const usersArr = require('../data/users.json')
const productsArr = require('../data/products.json')

mongoose.connect(process.env.DB_URI)

let User = mongoose.model('users', new mongoose.Schema({}, { timestamps: true, strict: false , _id : false }))
let Product = mongoose.model('products', new mongoose.Schema({id : { type : String}}, { timestamps: true, strict: true , _id : false }))




async function drop(model) {
  let result = await model.collection.drop()
  if (!result) throw err
  console.log("table dropped")
}

async function insertMany(model, arr) {
  let result = await model.insertMany(arr)
  if (!result) throw err
  console.log(" table inserted")
}

async function dropInsertMany(model, arr) {
  await drop(model)
  await insertMany(model, arr)
}


// insertMany(User,usersArr)
// insertMany(Product, productsArr)
let u = new User({ asdad: "512",})

u.save((err,result)=>{
  console.log(result)
})
