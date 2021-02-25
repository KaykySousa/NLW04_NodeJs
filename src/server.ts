import 'reflect-metadata'
import express from 'express'
import "./database"
import { router } from './routes'

const app = express()
const port = 4000

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`The server is running on 127.0.0.1:${port} !`)
})