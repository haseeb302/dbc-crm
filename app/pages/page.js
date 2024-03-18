"use client";

import handler from "./api/submitForm";

export default function Home() {
  return (
    <div>
      <form action={handler}>
        <input
          type="text"
          name="firstname"
          // value={formData.firstname}
          // onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastname"
          // value={formData.lastname}
          // onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          // value={formData.email}
          // onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phonenumber"
          // value={formData.phonenumber}
          // onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="contacttype"
          // value={formData.contacttype}
          // onChange={handleChange}
          placeholder="Contact Type"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
