import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
config()

const PORT_BACKEND = 5555

const PORT_FRONTEND = process.env.PORT_DEVELOPMENT_FRONTEND

const app = express()
// initFolder()

const corsOptions = {
  origin: `*`,
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

// Middleware to parse incoming requests come with JSON payloads
app.use(express.json())

// middleware log lại tất cả các request
app.all('*', (req, res, next) => {
  console.log('Time', Date.now())
  console.log(req)
  next()
})

const currentAlarm = "";

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/get_setting', (req, res) => {
  res.json({ date: "2024;11;8;5;43:00" });
})

app.post('/post_setting', (req, res) => {
  res.send('hello world')
})


// Error handler tổng
// app.use(defaultErrorHandler)

app.listen(PORT_BACKEND, () => {
  console.log(`Project twitter này đang chạy trên port ${PORT_BACKEND}`)
})
