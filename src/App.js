import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./common/RouteList";
import Nav from "./common/Nav";
import UserContext from "./userContext";
import jwt_decode from "jwt-decode";
import FrienderApi from './FrienderApi';

const TOKEN_LOCAL_KEY = "token";

/** Handles user authentication. Renders routes and navbar
 * Provider for UserContext.
 *
 * Props: none
 * State: user, token
 *
 * App  -> Nav/Routes
 */

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem(TOKEN_LOCAL_KEY));
  const [loadingUser, setLoadingUser] = useState(false);
  const [formError, setFormError] = useState(null);

  //api call for token
  async function login(formData) {
    try {
      setLoadingUser(true);
      const loginToken = await FrienderApi.login(formData);
      setToken(loginToken);
      // navigate("/companies");
    }
    catch (err) {
      setFormError(() => err);
      setLoadingUser(false);
    }
  };

  //api call for token
  async function register(formData) {
    try {
      setLoadingUser(true);
      const registerToken = await FrienderApi.register(formData);
      setToken(registerToken);
      // navigate("/companies");
    }
    catch (err) {
      setFormError(() => err);
      setLoadingUser(false);
    }
  };

  //api call for updating formData
  async function update(formData) {
    try {
      const updatedUser = await FrienderApi.update(formData, user.username, token);
      setUser(preUser => ({ ...preUser, ...updatedUser }));
    }
    catch (err) {
      setFormError(() => err);
      setLoadingUser(false);
    }
  };

  //strip state of user and token, strip token from local Storage
  function logout() {
    setToken(() => null);
    setUser(() => null);
    localStorage.removeItem(TOKEN_LOCAL_KEY);
  }

  //decode token to get username
  function decodeToken(token) {
    const decode = jwt_decode(token);
    return decode.username;
  }

  //update state of form error
  function updateError() {
    setFormError(null);
  }

  // decode token and setUser state and store token in local Storage,
  // depends on token state.
  useEffect(function () {
    if (token) {
      async function getUserName() {
        const username = decodeToken(token);
        const newUser = await FrienderApi.getUser(username, token);
        setUser(() => newUser);
        localStorage.setItem(TOKEN_LOCAL_KEY, token);
      };
      getUserName();
      setLoadingUser(false);
      setFormError(null);
    }
  }, [token]);

  if (loadingUser) return <div>Loading...</div>;

  return (
    <UserContext.Provider>
      <BrowserRouter>
        <Nav />
        <div className="container-fluid d-flex" style={{ height: "100vh" }}>
          <RouteList login={login} register={register} update={update} logout={logout}/>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
