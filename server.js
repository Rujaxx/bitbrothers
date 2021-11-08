const express = require('express')
const dotenv = require('dotenv')

//Load ENV vars
dotenv.config({ path : "./config/config.env"})

//Connect Database
const connectDB = require('./config/db')
connectDB()

//Router Files
const auth = require('./routes/auth')
const user = require('./routes/user')

const app = express()

//Body Parser
app.use(express.json())
app.use(express.urlencoded({extended : false}))

//Mount routes
app.use('/api/v1/auth', auth)
app.use('/api/v1/user', user)



app.get('/', (req,res) => {
    res.send('Hello Welcome to the CRUD API')
})

const PORT = process.env.PORT || 4000

const server = app.listen(PORT,console.log(`App is listening at ${PORT}`))