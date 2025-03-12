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