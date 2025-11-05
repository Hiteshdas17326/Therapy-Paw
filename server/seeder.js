const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const connectDB = require("./config/config");
const doctorModels = require("./models/doctorModels");
const doctorData = require("./data/Doctor-Data");

//config dot env and mongodb conn file
dotenv.config();
connectDB();

//import data
const importData = async () => {
  try {
    await doctorModels.deleteMany();
    const sampleData = doctorData.map((doctor) => {
      return { ...doctor };
    });
    await doctorModels.insertMany(sampleData);
    console.log("DATA IMPOrted".bgGreen.white);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// require ('colors')
// const connectDB = require('./config/config')
// const dogModels = require('./models/dogModels')
// const DogData = require('./data/Dog-Data')

// //config dot env and mongodb conn file

// dotenv.config()
// connectDB()

// //import data
// const importData = async () =>{
//     try {
//         await dogModels.deleteMany()
//         const sampleData = DogData.map(Dog =>{return{... Dog}})
//         await dogModels.insertMany(sampleData)
//         console.log("DATA IMPORTED".bgGreen.white)
//         process.exit()
//     } catch (error) {
//         console.log(`${error}`.bgRed.white)
//         process.exit(1)
//     }
// }


// const dataDestroy = () => {};

// if (process.argv[2] === "-d") {
//   dataDestroy();
// } else {
//   importData();
// }