require('dotenv').config()
console.log("Hello backend");
const express = require('express');
const app = express()

const port = 3000

app.get('/', (req, res) => { //request and response are the parameters of the callback function
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('vivektwitter')
})

app.get('/login',(req, res)=>{
    res.send('<h1>login page of backend project</h1>')
})

app.get('/youtube',(req, res)=>{
    res.send('<h2>backend via youtube<h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
