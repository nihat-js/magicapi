const express = require('express')
const cors = require('cors')
require('dotenv').config() 


const usersRouter = require('./routers/users')
const app = express()
const PORT = process.env.PORT || 4140

app.use(cors())
app.use(express.json())
app.use('/users',usersRouter)


app.get('/',(req,res)=>{
  res.send('is')
})

const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URI)



app.listen(PORT, () => console.log(`server started on ${PORT}`) )
module.exports = app

