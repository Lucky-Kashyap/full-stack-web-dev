// RegistrationForm.js
import axios from "axios";
import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = async () => {
    setRegisteredUsers([...registeredUsers, formData]);
    setFormData({ username: "", email: "", mobile: "", password: "" });

    try {
      const response = await axios.post(
        "http://localhost:3000/userReg",
        formData
      );
      console.log(response.data); // Assuming server sends back success message
      // You can handle success message here
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error here
    }
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>Registration Form Project Using Mysql</h1>

      <form>
        <div>
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="mobile"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <br />
      </form>
      <button onClick={handleClick}>Save</button>
      <div>
        <h3>Registered Users</h3>
        <table>
          <thead>
            <tr>
              <th>UserName</th>
              <th style={{ paddingLeft: "20px" }}>Email</th>
              <th style={{ paddingLeft: "20px" }}>Mobile</th>
              <th style={{ paddingLeft: "30px" }}>Password</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td style={{ paddingLeft: "60px" }}>{user.email}</td>
                <td style={{ paddingLeft: "50px" }}>{user.mobile}</td>
                <td style={{ paddingLeft: "50px" }}>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationForm;

// import './app.scss'
// export default function App() {
//   return (
//     <>
//       <h1>Vestige marketing pvt.ltd</h1>
//       <button className="btn btn-primary me-2" >Save</button>
//       <button className="btn btn-danger me-2" >Cancel</button>
//       <a href='https://www.myvestige.com/index.aspx'>
//       <button className="btn btn-secondary" >Register</button>
//       </a>
//     </>
//   )
// }
