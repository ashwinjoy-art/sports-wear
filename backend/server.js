import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// API endpoint
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{    /* In README.md file */
    res.send("API Working")
})

// Start Express Server
app.listen(port,()=> console.log('Server started on PORT: '+ port))