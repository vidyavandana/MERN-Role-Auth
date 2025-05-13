import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [formData, setFormData] = useState({ name: "", address: "", pin: "", phone: "" });
  const [dataList, setDataList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editIndex !== null) {
        const id = dataList[editIndex]._id;
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/forms/${id}`, formData);

        const updatedList = [...dataList];
        updatedList[editIndex] = response.data;
        setDataList(updatedList);
      } else {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/forms`, formData);

        setDataList([...dataList, response.data]);
      }

  
      setFormData({ name: "", address: "", pin: "", phone: "" });
      setEditIndex(null);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      const id = dataList[index]._id;
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/forms/${id}`);

      const updated = [...dataList];
      updated.splice(index, 1);
      setDataList(updated);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/forms`);

        setDataList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (index) => {
    setFormData(dataList[index]);
    setEditIndex(index);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/"; 
  };

  return (
    <div className="admin-wrapper"> 
      <div className="admin-container">
        <h2>Welcome, Admin 👋</h2>

        <form className="admin-form" onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
          <input name="pin" value={formData.pin} onChange={handleChange} placeholder="PIN Code" required />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
          <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
        </form>

        <div className="data-list">
          {dataList.length === 0 ? (
            <p className="empty-msg">No records yet.</p>
          ) : (
            dataList.map((entry, index) => (
              <div className="data-card" key={entry._id}>
                <p><strong>Name:</strong> {entry.name}</p>
                <p><strong>Address:</strong> {entry.address}</p>
                <p><strong>PIN:</strong> {entry.pin}</p>
                <p><strong>Phone:</strong> {entry.phone}</p>
                <div className="action-btns">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
