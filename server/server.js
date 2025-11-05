const express = require ('express');
const dotenv = require ('dotenv')
const connectDB = require('./config/config')
require("colors")
const morgan = require ('morgan');
const { bgCyan, bgMagenta } = require('colors');


//config dotenv
dotenv.config()

//conn
connectDB()


const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//route

app.use('/api/dogs', require('./routes/dogRoutes'));
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/users',require('./routes/userRotes'));
app.use('/api/orders',require('./routes/orderRoutes'));
app.use('/api/auth',require('./routes/auth'));


app.get("/", (req, res )=>{
    res.send("<h1>tthis wasccsc is working</h1>")
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`
      .bgMagenta.white
  )})