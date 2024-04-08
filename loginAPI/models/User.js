const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
      username:{type:String,required:true,unique:true},
      dob:{type:Date,require:true,},
      email:{type:String,required:true,unique:true},
      password:{type:String,required:true},
      isAdmin:{
        type:Boolean,
        default:false,
      },
      //img:{type:String},
     

    },{timestamps:true}
);
module.exports=mongoose.model("user",userSchema);