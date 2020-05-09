import express from "express"

const app = express()

app.get("/hello", (_req, res) => {
  res.send(`Hello FullStack Typescript - Production mode`)
})

const PORT = 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
