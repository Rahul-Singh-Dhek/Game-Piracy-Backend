const mongoose=require('mongoose')

const gameSchema=new mongoose.Schema({ 
    gameName: {type:String, required:true, unique:true},
    gameLink:{type:String,required:true},
    coverLink:{type:String}
},{timestamps:true})
  
  module.exports= mongoose.model("game",gameSchema)
