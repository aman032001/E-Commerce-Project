const http=require("http")
const PORT=3000
let app=require("./app")

let myserver=http.createServer(app)

myserver.listen(PORT,()=>{
    console.log("server is started")
})