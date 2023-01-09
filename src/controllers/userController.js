const gameModel=require("../models/gameModel.js")

const getGamePagenation = async (req, res) => {
    try{
        let page=parseInt(req.query.page) -1||0;
        let search=req.query.search||""

        let games=await gameModel.find({gameName:{$regex:search,$options:"$i"}}).skip(6*(page)).limit(6)
        return res.status(200).send({status:true,message:"Success.",data:games});
    }
    catch(error){
        return res.status(500).send({status:false,data:error.message});
    }
}

const insertGames=async (req,res)=>{
    try{
        let games=await gameModel.create(req.body)
        return res.status(201).send({status:true,message:"Successfully Addes in the Database",data:games});
    }
    catch(error){
        return res.status(500).send({status:false,data:error.message});
    }
}

const getCount=async (req,res)=>{
    try{

        let search=req.query.search||""
        console.log(search)
        let count=await gameModel.countDocuments({gameName:{$regex:search,$options:"$i"}})
        count=Math.ceil(count/6)
        console.log(count)
        return res.status(201).send({status:true,message:"Successfully got total no of pages.",data:count});
    }catch(error){
        return res.status(500).send({status:false,data:error.message});
    }
}

module.exports = { getGamePagenation ,insertGames, getCount }