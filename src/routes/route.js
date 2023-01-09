const express = require('express')
const router = express.Router()
const userContoller=require("../controllers/userController.js")
const cors=require('cors')


router.get("/getMovies",cors(),userContoller.getGamePagenation);
router.post("/insertGames",cors(),userContoller.insertGames);
router.get("/getCount",cors(),userContoller.getCount)
router.all("/*",cors(),(req,res)=>{
    return res.status(200).send({status:true,message:"This is the homepage."})
})



router.all("/testme", (req, res) => 
{ console.log(req.params.productId)
    return res.status(400).send({ status: false, message: "Endpoint is not correct" }) })


module.exports = router;
