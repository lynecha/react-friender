import React, { useState, useContext } from "react";
import UserContext from "../userContext";
import { Navigate, useNavigate} from "react-router-dom";

/** Login Form
 *
 * Props:
 * - login(function)
 * -
 *
 * State:
 * -Form Data
 *
 * JoblyApp -> Login
 */

function Login({ login}) {

  const user = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent & clear inputs. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    await login({ ...formData });
    setFormData(data => ({ username: "", password: "" }));
    navigate("/dashboard");
  }

  return (

    <div className="row d-flex justify-content-center w-100 h-25 mt-5">
      <div className="col-12 w-50">
        <h3 className="text-black">Log In</h3>
        <form className="bg-white my-3 p-3 rounded" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Login-username">Username</label>
            <input
              className="form-control mb-1"
              id="Login-username"
              onChange={handleChange}
              name="username"
              value={formData.username}
              autoComplete={"true"}
            />
          </div>
          <div>
            <label htmlFor="Login-password">Password</label>
            <input
              type={"password"}
              className="form-control mb-2"
              id="Login-password"
              onChange={handleChange}
              name="password"
              value={formData.password}
              autoComplete={"true"}
            />
          </div>
          {/* {error && <div className="alert alert-danger" role="alert">{error}</div>} */}
          <button className="btn btn-primary mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
}


export default Login;