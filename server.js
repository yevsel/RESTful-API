const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const api = require('./routes/apiRouter')
// Environmental Varibles
require('dotenv').config()
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST
const DB = process.env.DB

const app = express()

// Middlewares
app.use(express.json())
app.use(cors({
    origin:"*"
}))

//Using Api router
app.use('/api/members',api)


// Connecting to DB
mongoose.connect(DB,()=>{
    console.log("DB connection is live...")
},error=>{
    console.log(error.message)
})


// Listening on PORT
app.listen(PORT,()=>{
    console.log(`Listening live on ${HOST}:${PORT}...`)
})


