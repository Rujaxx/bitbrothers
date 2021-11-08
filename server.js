const express = require('express')
const dotenv = require('dotenv')

//Load ENV vars
dotenv.config({ path : "./config/config.env"})

//Connect Database
const connectDB = require('./config/db')
connectDB()

const app = express()

app.get('/', (req,res) => {
    res.send('Hello Welcome to the CRUD API')
})

const PORT = process.env.PORT || 4000

const server = app.listen(PORT,console.log(`App is listening at ${PORT}`))