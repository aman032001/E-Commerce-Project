const exprees=require("express")
const cors=require("cors")

const app=exprees()

let MensRoutes=require("./src/routes/mens.route")

app.use(exprees.json())
app.use(cors())

app.get("/",(req,res)=>{

    res.send("homepage")
})

app.use("/mens",MensRoutes)

module.exports=app