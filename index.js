import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import gifsRoutes from './routes/gifs.js'


// initialize server
const app = express()
dotenv.config()

// store body of req in req.body
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

// enable cross origin requests
app.use(cors())

app.use('https://gleeful-elf-0757dd.netlify.app/', gifsRoutes)

// connect to MongoDB
mongoose.connect(process.env.CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => app.listen(process.env.PORT || 5000, () => console.log('Server is running!')))
    .catch(error => console.log(error))