import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 */
function Register({ register }) {
  const navigate = useNavigate();
  let initialFormData = {
    username: "",
    password: "",
    email: "",
    location: ""
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errorMsg, setErrorMsg] = useState([]);
  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await register(formData);
      setFormData(initialFormData);
      navigate("/dashboard");
    } catch (error) {
      setErrorMsg(error);
    }
  }

  const formNames = {
    username: "Username",
    password: "Password",
    email: "Email",
    location: "Zip Code"
  };

  function renderForm() {
    return Object.keys(initialFormData).map((field) => {
      return (
        <div className="mb-3 card-body" key={field}>
          <label htmlFor={`Register-${field}`}>{formNames[field]}</label>
          <input
            id={`Register-${field}`}
            name={field}
            type={field === "password" ? "password" : "text"}
            className="form-control"
            placeholder={field}
            onChange={handleChange}
            value={formData[field]}
            aria-label={field}
          />
        </div>
      );
    });
  }

  return (
    <div className="row d-flex justify-content-center w-100 h-25 mt-5 mb-2">
      <div className="col-12 w-50">
        <h3 className="my-3 text-white text-center">Sign Up</h3>
        <form className="bg-white p-3 rounded" onSubmit={handleSubmit}>
          {renderForm()}
          <button className="btn-primary btn">
            Signup
          </button>
        </form>
        {errorMsg.map((err) => (
          <p>{err}</p>
        ))}
      </div>
    </div>
  );
}

export default Register;
