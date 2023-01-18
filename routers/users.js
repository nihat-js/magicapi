const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")



const User = mongoose.model("users", new mongoose.Schema({},{timestamps:true , strict : false })  , )



router.get("/", async(req, res) => {
  const result = await  User.find({})
  if (!result){
    res.json({error:'Something went wrong'})
  }
  res.send(result);
})

router.get("/:id", async (req, res) => {
  const result = await User.find({id: req.body.id })
  if (!result){
    res.json({error:'This id does not exist'})
  }
  res.json(result)
})

router.post("/", async (req, res) => {
  let result;
  const obj = {}
  for(const x in  req.body){
    if (x == "_id" || x == "id"){
      continue
    }
    obj[x] = req.body[x]
  }
  result = await User.find().sort({id:-1}).limit(1)
  console.log(result)

  const newUser = new User(obj)
  result  = await newUser.save()
  if (!result){
    res.json({error : 'Could not save '})
    return false
  }
  res.json(newUser)
})

router.put('/',async (req, res) => {
  let result = await User.findOne({id : req.body.id})
  if (!result) res.json({error : "Could not find element by id. "})
})

router.delete('/', (req, res) => {
  res.send('deleted')
})

module.exports = router

