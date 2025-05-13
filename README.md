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
