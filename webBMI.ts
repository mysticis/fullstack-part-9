import express from "express"
import bodyParser from "body-parser"
import { calculateBMI } from "./bmi"
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/bmi", (req, res) => {
  // Access the provided 'height' and 'weight' query parameters
  let height = Number(req.query.height)
  let weight = Number(req.query.weight)
  const bmiValue = calculateBMI(weight, height)
  if (bmiValue < 25) {
    res.send({
      height: height,
      weight: weight,
      bmi: `Normal (healthy weight)`,
    })
  } else if (bmiValue >= 25 && bmiValue <= 29) {
    res.send({
      height: height,
      weight: weight,
      bmi: `Obese...`,
    })
  } else if (bmiValue >= 30) {
    res.send({
      height: height,
      weight: weight,
      bmi: `Overweight...`,
    })
  } else {
    res.status(401).send({ error: `malformed parameters` })
  }
})

const PORT = 4000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
