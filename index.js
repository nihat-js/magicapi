const express = require('express')
const app = express()
const PORT = process.env.PORT || 4140

const users = [{
  id:0,
  username : 'nihat',
  password : 'aasfsa',
  register : {
    time : "15/01/2023"
  }

}]


app.get('/', (req, res) => {
   res.send('This is index')

})




app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

module.exports = app