const express = require("express");
const app = express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const userRoute = require("./Routes/user");
const authRoute=require("./Routes/auth");

// var cors = require('cors');
// app.use(cors());


dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("DBConnection succesfull")
    ).catch((err)=>{console.log(err)});


app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users", userRoute);



app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server start");
})