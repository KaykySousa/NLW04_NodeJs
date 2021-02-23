import express from 'express'
const app = express()
const port = 4000

app.get("/", (req, res) => {
    return res.json({message: "Hello World"})
})

app.post("/", (req, res) => {
    return res.json({message: 'Os dados foram atualizados com sucesso!'})
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}!`)
})