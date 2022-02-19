const mongoose = require('mongoose')

const News = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    sectionOne:{
        type:String
    },
    likes:{
        type:Number,
        max:100
    },
    tags:{
        type:[String]
    },
    createdAt:{
        type:Date,
        default:()=>Date.now(),
        immutable:true
    },
    updatedAt:{
        type:Date,
        default:()=>Date.now()
    }

})

module.exports = mongoose.model('news',News)