const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name should be atleast 3 characters long'],
        },
        lastname:{
            type:String,
            required:true,
            minlength:[3,'Last name should be atleast 3 characters long'],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email should be atleast 6 characters long'],

    },
    password:{
        type:String,
        required:true,
    },
    socketID:{
        type:String,
        required:false,
    },
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.hashPassword = async function(password){
    this.password = await bcrypt.hash(this.password,10);
}

const userModel = mongoose.model('User',userSchema); 
module.exports = userModel;