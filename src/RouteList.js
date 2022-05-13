import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./Homepage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import UserContext from "./userContext";
import ProfileForm from "./ProfileForm"
import Dashboard from "./Dashboard"
import ProfilePage from "./ProfilePage"
/** List of Routes.
 *
 * Props:
 * State: none
 */

function RouteList({ login, register, update, addPhoto }) {

  const {user} = useContext(UserContext)

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
            element={<ProfilePage user={user}/>
            }
          />
          <Route
            path="/profile/edit"
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