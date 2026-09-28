const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

let MensRoutes = require("./src/routes/mens.route")
let AuthRoutes = require("./src/routes/auth.route")

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/shopkaro")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("homepage")
})

app.use("/auth", AuthRoutes)
app.use("/mens", MensRoutes)

module.exports = app