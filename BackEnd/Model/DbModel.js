const mongoose = require('mongoose')

const Model = new mongoose.Schema({
    Name : {type:String},
    Email : {type:String},
    PassWord : {type:String},
    
})
console.log('Scehma Successful')
module.exports= mongoose.model('SchemaFolder',Model)