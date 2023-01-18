const express = require('express')

const app = express()

const users = [{
  id:0,
  username : 'nihat',
  password : 'aasfsa',
  register : {
    time : "15/01/2023"
  }

}]


app.get('/users',(req,res)=>{
  res.send( JSON.stringify(users))
})

app.listen(process.env.PORT || 80)

module.exports = app