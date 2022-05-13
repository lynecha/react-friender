import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./Homepage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import UserContext from "./userContext";
import FriendList from "./FriendList"
import ProfileForm from "./ProfileForm"
import Dashboard from "./Dashboard"

/** List of Routes.
 *
 * Props:
 * State: none
 */

function RouteList({ login, register, update, addPhoto }) {

  const {user} = useContext(UserContext);
  console.log("user", user)

  if (user) {
    return (
      <>
        <Routes>

          <Route
            path="/"
            element={<Homepage />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/friend-list"
            element={'<FriendList />'}
          />

          <Route
            path="/profile"
            element={<ProfileForm update={update} addPhoto={addPhoto} />}
          />
        </Routes>
      </>
    )
  }
  else {

    return (
      <Routes>

        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/login"
          element={<Login login={login} />}
        />

        <Route
          path="/signup"
          element={<Register register={register} />}
        />
      </Routes>
    );
  }

}

export default RouteList;