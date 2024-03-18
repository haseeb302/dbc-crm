"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    contacttype: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data inserted successfully");
      } else {
        console.error("Failed to insert data:", response.statusText);
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="contacttype"
          value={formData.contacttype}
          onChange={handleChange}
          placeholder="Contact Type"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
