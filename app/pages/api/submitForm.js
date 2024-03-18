"use server";

import sql from "mssql";

export default async function handler(formData) {
  console.log(formData);
  const { firstname, lastname, email, phonenumber, contacttype } = formData;
  try {
    await sql.connect({
      server: "dbcgroup.database.windows.net",
      database: "DBC",
      user: "safeer",
      password: "SuperSecret!",
      options: {
        encrypt: true,
      },
    });

    await sql.query`USE DBC GRANT INSERT ON dbo.CustomerContact TO safeer`;
    await sql.query`INSERT INTO CustomerContact (ContactID, CustomerID, FirstName, LastName, Email, PhoneNumber, ContactType) VALUES (1, 2, ${firstname}, ${lastname}, ${email}, ${phonenumber}, ${contacttype})`;

    console.log("Data inserted successfully");

    //   res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error inserting data:", error);
    //   res.status(500).json({ error: "An error occurred while inserting data" });
  } finally {
    sql.close();
  }

  // if (req.method === "POST") {
  //   const formData = req.body;
  // } else {
  //   res.status(405).json({ error: "Method Not Allowed" });
  // }
}
