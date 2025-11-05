const mongoose = require("mongoose");

const dogSchema = mongoose.Schema(
  {
    name:{
        type: String
            },

    author: {
        type:String,

    },
    title: {
            type:String,
    
    },
    description: {
        type:String,

    },
    urlToImage: {
        type:String,

    },
    breed: {
        type:String,

    },
    price: {
        type:Number,

    },
  },
  { timestamps: true }
);

const dogModels = mongoose.model("dog", dogSchema);
module.exports = dogModels;