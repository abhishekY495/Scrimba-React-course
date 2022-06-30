import React from "react";
import "./style.css";

export default function App() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    joinedNewsLetter: true
  });

  const [message, setMessage] = React.useState("");

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
    }))
  }

  function clearInputs() {
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        joinedNewsLetter: true
      });
      setMessage("");
    }, 1000);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name && formData.email && formData.password && formData.confirmPassword) {
      if (formData.password === formData.confirmPassword) {
        setMessage("Thanks for signing up");
        clearInputs();
      } else {
        setMessage("Passwords incorrect");
      }
    } else {
      setMessage("Fill in the details");
    }
  }

  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <form className="form">
        <input 
          type="name" 
          placeholder="Name"
          className="form--input"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input 
          type="email" 
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input 
          type="password" 
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input 
          type="password" 
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        
        <div className="form--marketing">
          <input
              id="newsLetter"
              type="checkbox"
              name="joinedNewsLetter"
              onChange={handleChange}
              checked={formData.joinedNewsLetter}
          />
          <label htmlFor="newsLetter">Join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
        <div className="form-message">{message}</div>
      </form>
    </div>
  );
}
