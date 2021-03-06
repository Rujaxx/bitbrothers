const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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
        minlength : [6,"Please add larger than six characters"],
        select: false
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

//Encrypting Password
UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next();
      }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
})

module.exports = mongoose.model('User',UserSchema)

