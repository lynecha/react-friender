import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import UserContext from "./userContext";
import jwt_decode from "jwt-decode";
import FrienderApi from './FrienderApi';
import Nav from './Nav';
import "bootstrap/dist/css/bootstrap.css"

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

  // decode token and setUser state and store token in local Storage,
  // depends on token state.
  useEffect(function () {
    if (token) {
      async function getUserName() {
        const username = decodeToken(token);
        const newUser = await FrienderApi.getUser(username, token);
        let images = await FrienderApi.getImages(newUser.username,token);
        newUser["images"] = images;
        setUser(() => newUser);
        localStorage.setItem(TOKEN_LOCAL_KEY, token);
      };
      getUserName();
      setLoadingUser(false);
      setFormError(null);
    }
  }, [token]);

  if (loadingUser) return <div>Loading...</div>;

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

  /** add photo to the backend*/
  async function addPhoto(file) {
    let res = await FrienderApi.addPhoto(file,user.username,token)
    return res
  }



  //decode token to get username
  function decodeToken(token) {
    const decode = jwt_decode(token);
    return decode.sub;
  }

  //update state of form error
  function updateError() {
    setFormError(null);
  }

  return (
    <UserContext.Provider value = {{user}}>
      <BrowserRouter>
        <Nav logout={logout}/>
        <div className="container-fluid d-flex bgimage">
          <RouteList
            login={login}
            register={register}
            update={update}
            addPhoto={addPhoto}
            />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
