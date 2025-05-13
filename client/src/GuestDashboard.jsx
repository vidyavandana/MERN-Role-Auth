import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GuestDashboard.css";

const GuestDashboard = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/forms`);

      setEntries(response.data);
    } catch (error) {
      console.error("Failed to fetch entries", error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/"); 
  };

  return (
   <div className="guest-wrapper">  
    <div className="guest-container">
        <h2>Welcome Guest 👋</h2>

      {/* Display data entries or a message if there are no entries */}
      <div className="entry-list">
        {entries.length === 0 ? (
          <p>No data available</p>
        ) : (
          entries.map((entry) => (
            <div key={entry._id} className="entry-card">
              <p><strong>Name:</strong> {entry.name}</p>
              <p><strong>Address:</strong> {entry.address}</p>
              <p><strong>PIN:</strong> {entry.pin}</p>
              <p><strong>Phone:</strong> {entry.phone}</p>
            </div>
          ))
        )}
      </div>

      {/* Logout button, styled and aligned at the bottom */}
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
    </div>
  );
};

export default GuestDashboard;
