import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./Homepage";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import UserContext from "../userContext";
import FriendList from "./FriendList"
import Profile from "./Profile"
import Dashboard from "./Dashboard"

/** List of Routes.
 *
 * Props:
 * State: none
 */

 function RouteList({login, register}) {

  const user = useContext(UserContext);

  const protectedRoutes = (
    <>
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/friend-list"
        element={<FriendList />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />
    </>
  );

  return (
    <Routes>

      <Route
        path="/"
        element={<Homepage />}
      />

      {!user ?
        <>
          <Route
            path="/login"
            element={<Login login={login} />}
          />

          <Route
            path="/register"
            element={<Register register={register} />}
          />
        </>
        :
        protectedRoutes
      }

      <Route
        path="/*"
        element={<Navigate to="/" />}
      />

    </Routes>
  );
}

export default RouteList;