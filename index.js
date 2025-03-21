const express = require("express"); //load express into the project
const dotenv = require("dotenv");

dotenv.config();
const app = express(); // create an app that handles HTTP requests
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory storage for appointments
let appointments = [
  { id: 1, date: "2025-03-21", doctorID:"1", patient: "John Doe" },
  { id: 2, date: "2025-03-21", doctorID:"2", patient: "Jane Doe" },
  { id: 3, date: "2025-03-22",  doctorID:"3", patient: "Alice Green" },
  { id: 4, date: "2025-03-22", doctorID:"3", patient: "Bobby Brown"},
  { id: 5, date: "2025-03-21", doctorID:"1", patient: "Keanu Snow"}
];

// API to fetch appointments by date
app.get("/doctors/:doctorId/appointments", (req, res) => {
  const { date } = req.query;
  const doctorID = req.params.doctorId;
  if (!date) {
    return res.status(400).json({ error: "Please provide a date" });
  }
  const result = appointments.filter((appt) => appt.date === date && appt.doctorID === doctorID);
  res.json(result);
});

// Start the server on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
