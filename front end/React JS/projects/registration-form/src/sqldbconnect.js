// const express = require("express");
// const bodyParser = require("body-parser");
// const sql = require("mysql");
// const cors = require("cors");

// const app = express();

// const port = 3000; // Assuming you want to run the server on port 3000
// app.use(cors());
// // Middleware for parsing JSON bodies
// app.use(bodyParser.json());

// // Database configuration
// const config = {
//   user: "root",
//   password: "rootlucky",
//   server: "127.0.0.1",
//   port: 3306,
//   database: "registration",
//   options: {
//     encrypt: true, // Enable encryption
//     trustServerCertificate: true, // Trust self-signed certificate
//   },
// };

// // POST endpoint for user registration
// app.post("/userReg", async (req, res) => {
//   try {
//     // Connect to the database
//     await sql.connect(config);

//     console.log("post data");

//     // Extract registration data from request body
//     const { username, email, mobile, password } = req.body;

//     // Execute SQL query to insert user data into database
//     await sql.query`INSERT INTO TestUser1 (username, email, mobile, password) VALUES (${username}, ${email}, ${mobile}, ${password})`;

//     // Send success response
//     res.status(200).json({ message: "User registered successfully" });
//   } catch (error) {
//     // Send error response
//     console.error("Error:", error.message);
//     res.status(500).json({ message: "Registration failed" });
//   } finally {
//     // Close database connection
//     await sql.close();
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const port = 3000;
app.use(cors());

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootlucky",
  database: "registration",
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// POST endpoint for user registration
app.post("/userReg", (req, res) => {
  const { username, email, mobile, password } = req.body;
  const sql =
    "INSERT INTO TestUser2 (username, email, mobile, password) VALUES  (?,?,?,?)";
  const values = [username, email, mobile, password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.status(500).json({ message: "Registration failed" });
      return;
    }
    console.log("User registered successfully");
    res.status(200).json({ message: "User registered successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
