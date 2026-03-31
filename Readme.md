# 🏥 Prescripto — Doctor Appointment Booking System

A full-stack web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) that enables users to seamlessly book and manage appointments with healthcare professionals. Features a modern teal-themed UI, AI-powered chatbot, and a comprehensive admin panel.

---

## ✨ Features

### 👤 Patient Portal
- **Browse Doctors** — Filter by specialty (General Physician, Gynecologist, Dermatologist, Pediatrician, Neurologist, Gastroenterologist)
- **Book Appointments** — Select a doctor, pick a date and available time slot
- **Manage Appointments** — View, track, and cancel appointments
- **User Profile** — Update personal information and profile picture
- **AI Chatbot** — Powered by Google Gemini AI to assist with health queries and platform navigation

### 🔧 Admin Panel
- **Dashboard** — Overview of doctors, appointments, and patients with stats
- **Manage Doctors** — Add new doctors, toggle availability, view all doctors
- **Manage Appointments** — View all appointments, cancel bookings
- **Unified Teal UI** — Consistent design language matching the patient portal

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 19, Tailwind CSS 4, Vite, React Router |
| **Admin Panel** | React 18, Tailwind CSS 3, Vite, React Router |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Authentication** | JWT (JSON Web Tokens), bcrypt |
| **File Storage** | Cloudinary (doctor profile images) |
| **AI Chatbot** | Google Gemini 2.5 Flash API |
| **HTTP Client** | Axios |

---

## 📁 Project Structure

```
DoctorAppointment/
├── Backend/                  # Express.js REST API
│   ├── config/               # MongoDB & Cloudinary configs
│   ├── controllers/          # Route handlers (admin, user, doctor, chatbot)
│   ├── middlewares/          # Auth middleware (JWT verification)
│   ├── models/               # Mongoose schemas (User, Doctor, Appointment)
│   ├── routes/               # API route definitions
│   └── server.js             # App entry point
│
├── frontend/                 # Patient-facing React app
│   └── src/
│       ├── assets/           # Images, icons, SVGs
│       ├── components/       # Navbar, Header, Footer, ChatBot, etc.
│       ├── context/          # React Context (global state)
│       └── pages/            # Home, Doctors, Appointment, Login, etc.
│
├── admin/                    # Admin panel React app
│   └── src/
│       ├── assets/           # Admin-specific assets
│       ├── components/       # Navbar, Sidebar
│       ├── context/          # Admin & App context
│       └── pages/            # Dashboard, AddDoctor, DoctorsList, etc.
│
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or later)
- **MongoDB** (local or Atlas)
- **Cloudinary** account (for image uploads)
- **Google Gemini API Key** (for AI chatbot)

### 1. Clone the Repository

```bash
git clone https://github.com/dhanesh-1/DoctorAppointmentApp.git
cd DoctorAppointmentApp
```

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend/` directory:

```env
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
MONGODB_URI=mongodb://localhost:27017
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend server:

```bash
npm run server
```

The API will run on `http://localhost:4000`.

### 3. Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend:

```bash
npm run dev
```

The app will run on `http://localhost:5173`.

### 4. Setup Admin Panel

```bash
cd admin
npm install
```

Create a `.env` file in the `admin/` directory:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the admin panel:

```bash
npm run dev
```

The admin panel will run on `http://localhost:5174`.

---

## 🔌 API Endpoints

### User Routes (`/api/user`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | User login |
| GET | `/get-profile` | Get user profile |
| POST | `/update-profile` | Update user profile |
| POST | `/book-appointment` | Book an appointment |
| GET | `/appointments` | Get user appointments |
| POST | `/cancel-appointment` | Cancel an appointment |

### Admin Routes (`/api/admin`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/login` | Admin login |
| POST | `/add-doctor` | Add a new doctor |
| POST | `/all-doctors` | Get all doctors |
| POST | `/change-availability` | Toggle doctor availability |
| GET | `/appointments` | Get all appointments |
| POST | `/cancel-appointment` | Cancel any appointment |
| GET | `/dashboard` | Get dashboard stats |

### Doctor Routes (`/api/doctor`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/list` | Get all doctors |

### Chatbot Routes (`/api/chatbot`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/chat` | Send message to AI chatbot |
| POST | `/clear` | Clear chat history |

---

## 🎨 Design System

The application uses a **dark teal** color palette for a professional healthcare look:

| Token | Color | Hex |
|-------|-------|-----|
| Primary | Dark Teal | `#0D6C6A` |
| Primary Light | | `#0f8a87` |
| Primary Dark | | `#094e4d` |
| Accent | Teal | `#14B8A6` |
| Surface | Light Teal | `#f0faf9` |
| Background | Off White | `#fafcfc` |

**Typography**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)

---

## 🤖 AI Chatbot

The integrated chatbot is powered by **Google Gemini 2.5 Flash** and is specifically configured to:

- Answer health and wellness questions
- Guide users through booking appointments
- Provide information about medical specialties
- Politely decline off-topic queries (coding, politics, recipes, etc.)
- Never provide specific medical diagnoses

---

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

---

## 👨‍💻 Author

**Dhanesh Gawali**

- GitHub: [@dhanesh-1](https://github.com/dhanesh-1)