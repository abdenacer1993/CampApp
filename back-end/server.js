const express = require('express')
const cors=require("cors")
const app = express()
const connectDB = require('./config/connectDB')

require('dotenv').config();
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(cors())
app.use(express.json())

connectDB()


//console.log(process.env)
app.use("/camping",require('./routes/campingRoutes')) 
app.use("/products",require('./routes/productRoutes'))
app.use("/users",require('./routes/usersRoutes'))


const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))