import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth, provider, signInWithPopup } from "./firebase";
import AdminDashboard from "./AdminDashboard";
import GuestDashboard from "./GuestDashboard";
import "./App.css";
import heroImage1 from "./assets/loccck.jpg";
import heroImage2 from "./assets/lock.jpg";

function Home() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === "admin") {
      navigate("/admin");
    } else {
      navigate("/guest");
    }
  };

  return (
    <div className="fullscreen-container">
      <div className="background-scroll">
        <img src={heroImage2} alt="bg2" />
        <img src={heroImage1} alt="bg3" />
        <img src={heroImage2} alt="bg4" />
         <img src={heroImage1} alt="bg3" />

      </div>

      <div className="overlay-content">
        <h1>Welcome to Role Based Authentication</h1>
        {!user ? (
          <button className="btn-signin" onClick={handleSignIn}>
            <FcGoogle size={24} />
            Sign in with Gmail
          </button>
        ) : (
          <div className="role-selection">
            <h2>Select Your Role</h2>
            <div className="role-buttons">
              <button className="btn-role" onClick={() => handleRoleSelection("admin")}>
                Admin
              </button>
              <button className="btn-role" onClick={() => handleRoleSelection("guest")}>
                Guest
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/guest" element={<GuestDashboard />} />
      </Routes>
    </Router>
  );
}
