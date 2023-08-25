const mongoose=require('mongoose')

const listschemma = new mongoose.Schema({
    listing: {
        type: String,
        required: true
    },
})


module.exports=mongoose.model('list', listschemma);