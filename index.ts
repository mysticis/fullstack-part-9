import express from "express";
import cors from "cors";
import diagnosesRouter from "./routes/diagnosesRoutes";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/ping", (_req, res) => {
  res.send(`connection established...!`);
});
app.use("/api/diagnoses", diagnosesRouter);
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
