import express from "express";
import patientService from "../services/patientService";
import parsePatientData from "../utils/parsePatientData";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getInfoNoSSN());
});

router.get("/:id", (req, res) => {
  const id = String(req.params.id);

  res.send(patientService.getPatient(id));
});
router.post("/", (req, res) => {
  try {
    const newPatientEntry = parsePatientData(req.body);
    const addedPatient = patientService.addPatient(newPatientEntry);
    res.json(addedPatient);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
export default router;
