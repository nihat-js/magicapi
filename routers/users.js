const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")



const User = mongoose.model("users", new mongoose.Schema({},{timestamps:true , strict : false })  , )
// const newUser = new User ({
//   name : 'whoami',
//   password :'zerma9921'
// }) 
// newUser.save()



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
  const obj = {}
  for(const x in  req.body){
    if (x == "_id"){
      continue
    }
    obj[x] = req.body[x]
  }
  const newUser = new User(obj)
  let result  = await newUser.save()
  if (!result){
    res.json({error : 'Could not save '})
  }
  res.json(newUser)
})

router.put('/', (req, res) => {
  const 
})

router.delete('/', (req, res) => {
  res.send('deleted')
})

module.exports = router

