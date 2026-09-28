const menscontroller=require("../controllers/mens.contoller")
const express=require("express")
const MensRoutes=express.Router()

MensRoutes.get("/",menscontroller.getAllprod)
MensRoutes.get("/:id",menscontroller.getprodbyid)

module.exports=MensRoutes