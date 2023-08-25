const express = require ('express')
const DBConnection = require('./connection')
const bodyParser = require('body-parser');
const cors = require('cors')
const app=express()

const portnum = 5000
DBConnection()

//parser and middleware
app.use(cors())
app.use(bodyParser.json());
 app.use(express.json())
 app.use(express.urlencoded({extended: false}))
 app.use('/',cors(),require('./controller.js'))


//server
app.listen(portnum,(req,res)=>{
    console.log("hello")
})
