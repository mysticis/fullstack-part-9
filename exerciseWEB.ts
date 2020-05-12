import express from "express"
import bodyParser from "body-parser"
import { calculateResultsWeb } from "./exerciseFunction"
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (_req, res) => {
  res.send(`Hello from port 5000`)
})
app.post("/exercises", (req, res) => {
  const body = req.body
  const daily_exercises = body.daily_exercises
  const target = body.target
  const data = calculateResultsWeb(target, daily_exercises)
  if (data) {
    res.send(calculateResultsWeb(target, daily_exercises))
  } else {
    res.status(400).send({ error: `malformed parameters` })
  }
})

const PORT = 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
