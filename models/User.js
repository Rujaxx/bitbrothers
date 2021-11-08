const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : [true,"Please add your name"]
    },
    username : {
        type : String,
        trim : true,
        required : [true,"Please add your name"],
        unique : true,
        minlength : 5
    },
    password :{
        type : String,
        trim : true,
        required : [true,"Please add a password"],
        minlength : [6,"Please add larger than six characters"]
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    updatedAt : {
        type : Date,
        default : new Date()
    }
}, {timestamps : true})

module.exports = mongoose.model('User',UserSchema)