const express = require('express')
const router=express.Router()
const {getlist,addlist,deletelist,updatedata}=require('./model')
const app=express()

app.use(express.json())

router.route('/').get(getlist)
router.route('/add').post(addlist)
router.route('/delete/:id').delete(deletelist)
router.route('update/:id').put(updatedata)

module.exports =router;