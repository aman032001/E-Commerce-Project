let MensArr= require("../models/mens.model")

function getAllprod(req,res){

    res.send(MensArr)
}

function getprodbyid(req,res){
    
    let id=req.params.id

    res.status(200)
       .json(MensArr[id-1])
}


module.exports={
    getAllprod,
    getprodbyid
}