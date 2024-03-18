const sql = require("mssql");

const config = {
  server: "dbcgroup.database.windows.net",
  database: "DBC",
  user: "safeer",
  password: "SuperSecret!",
  options: {
    encrypt: true,
  },
};

// Create a connection pool
const pool = new sql.ConnectionPool(config);

// Use async/await to handle asynchronous operations
async function executeQuery() {
  try {
    // Connect to the database
    await pool.connect();

    // Create a new request
    const request = pool.request();

    // Execute the query
    const result = await request.query("SELECT * FROM Customer");

    // Log the recordset
    console.log(result.recordset);
  } catch (error) {
    // Handle any errors
    console.error("Error executing query:", error);
  } finally {
    // Close the connection pool
    await pool.close();
  }
}

// Call the function to execute the query
executeQuery();
