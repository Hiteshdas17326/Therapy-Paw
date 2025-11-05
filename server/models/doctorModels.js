const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    name:{
        type: String
     },

    experience: {
        type:String,

    },
    education: {
            type:String,
    
    },
    description: {
        type:String,

    },
    image: {
        type:String,

    },
    price: {
        type:Number,

    },
    phone: {
        type:Number,

    },
  },
  { timestamps: true }
);

const doctorModels = mongoose.model("doctor", doctorSchema);
module.exports = doctorModels;