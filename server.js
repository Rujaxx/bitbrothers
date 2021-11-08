const express = require('express')
const dotenv = require('dotenv')

//Load ENV vars
dotenv.config({ path : "./config/config.env"})

const app = express()

app.get('/', (req,res) => {
    res.send('Hello Welcome to the CRUD API')
})

const PORT = process.env.PORT || 4000

const server = app.listen(PORT,console.log(`App is listening at ${PORT}`))