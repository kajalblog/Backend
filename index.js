require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/contact',(req,res)=>{
    res.send("<h1>Contact Page</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
