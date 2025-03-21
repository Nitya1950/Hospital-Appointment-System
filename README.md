# 🏥 Hospital Appointment Management API

A lightweight **Node.js & Express** API for managing doctor appointments. It allows fetching appointments for a specific doctor on a given date. Currently, it uses in-memory storage, with plans to integrate a database in the future.

## 🚀 Features
- ✅ Fetch all appointments for a specific doctor on a given date
- ✅ JSON-based response format
- ✅ Simple, fast, and lightweight

## 📌 Getting Started

### 1️⃣ Installation
Clone the repository and install dependencies:
```sh
git clone https://github.com/yourusername/Hospital-Appointment-Management.git
cd Hospital-Appointment-Management
npm install
```

### 2️⃣ Run the Server
Start the API:
```sh
node index.js
```
Server runs at **`http://localhost:3000`**

## 📡 API Endpoints

### Get Appointments for a Doctor
**`GET /doctors/:doctorId/appointments?date=YYYY-MM-DD`**

#### Example Request:
```http
GET http://localhost:3000/doctors/1/appointments?date=2025-03-21
```

#### Example Response:
```json
[
  { "id": 1, "date": "2025-03-21", "doctorID": "1", "patient": "John Doe" },
  { "id": 5, "date": "2025-03-21", "doctorID": "1", "patient": "Keanu Snow" }
]
```

## 🛠 Future Improvements
- 🔹 Integrate persistant data storage
- 🔹 Develop more endpoints for create, update and delete appointments

## 📜 License
This project is open-source and free to use.
