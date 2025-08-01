//console.log("Hello");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

//Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res) => {
    res.send('saimahajan1916')
})

//get a list of 5 thoughts
//json formatter is a website that formats JSON data for better readability
//https://jsonformatter.curiousconcept.com/
app.get('/thoughts',(req,res) => {
   const thoughts = [
        {id: 1, thought: 'I love programming!'},
        {id: 2, thought: 'Express is great for building APIs!'},
        {id: 3, thought: 'Node.js is awesome!'},
        {id: 4, thought: 'JavaScript is a versatile language!'},
        {id: 5, thought: 'Coding is fun!'}
    ];//this is a array of objects
    res.send(thoughts);
})


app.get('/login',(req,res) => {
    res.send('<h1>Login to this page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

