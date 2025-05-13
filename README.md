# Role-Based Authentication MERN App

## 📋 Project Overview

This is a full-stack application that demonstrates **role-based authentication** using **Google Sign-In**. The app supports two types of users:

- **Admin**: Can add, edit, and delete form entries.
- **Guest**: Can only view form entries (read-only).

Built with the **MERN stack** (MongoDB, Express.js, React, Node.js), Firebase Authentication, and deployed using **Render** and **Vercel**.

---

## ✨ Features

- **🔐 Google Sign-In**: Users authenticate via their Google accounts and choose between "Admin" or "Guest" roles.
- **🛠 Admin Dashboard**:
  - Perform full **CRUD** operations (Create, Read, Update, Delete).
  - Submit fields: `Name`, `Address`, `PIN`, and `Phone Number`.
- **👀 Guest Dashboard**:
  - View all form data with **read-only access**.
- **📱 Responsive Design**:
  - Fully mobile-friendly with a clean UI/UX using Tailwind CSS.

---

## ⚙️ Tech Stack

- **Frontend**: React.js (with Vite), Tailwind CSS  
- **Backend**: Node.js + Express.js  
- **Database**: MongoDB Atlas  
- **Authentication**: Firebase Authentication (Google Sign-In)  
- **Deployment**:
  - Frontend → Vercel  
  - Backend → Render  

---

## 🚀 Installation Instructions

### ✅ Prerequisites

- Node.js & npm installed
- Firebase project with Google Sign-In enabled

### 📁 Clone the Repository

```bash
git clone https://github.com/yourusername/mern-role-auth.git
cd mern-role-auth
```

### 🔐 Environment Variables

#### Backend (`/server/.env`)
```env
MONGO_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
```

#### Frontend (`/client/.env`)
```env
VITE_API_URL=https://mern-role-backend.onrender.com
```

### 📦 Install Dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### ▶️ Run Locally

```bash
# Backend
cd server
node server.js

# Frontend
cd ../client
npm run dev
```

---

## 🔌 API Endpoints

- `GET /api/forms` — Fetch all form entries  
- `POST /api/forms` — Add a new entry  
- `PUT /api/forms/:id` — Update an entry  
- `DELETE /api/forms/:id` — Delete an entry  

---

## 🌐 Deployment

- **Frontend**: Deployed on [Vercel](https://vercel.com)  
- **Backend**: Deployed on [Render](https://render.com)  
- Ensure `VITE_API_URL` in frontend `.env` points to your live backend URL.

---

## 🛠 Known Issues

- If you see **"No Data Available"**, ensure:
  - MongoDB is connected
  - Backend is deployed and reachable
  - CORS and API routes are properly configured

---

## 🔮 Future Improvements

- Role-based route protection using middleware
- Enhanced form validation and error handling
- User profile system with registration and updates

---

## 🙌 Credits

- **Firebase** — Authentication  
- **MongoDB Atlas** — Cloud Database  
- **Render** — Backend Hosting  
- **Vercel** — Frontend Hosting  

---

## ✅ Conclusion

This project showcases a real-world implementation of **role-based authentication** using modern full-stack technologies. It offers a clean, scalable, and secure solution for managing user roles and CRUD operations. With intuitive UI/UX and solid backend integration, it lays the foundation for more complex authentication and data-driven applications.
