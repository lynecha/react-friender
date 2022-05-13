import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "./userContext";
import UserCard from "./UserCard";

/** props: a single friend obj
 * presentational component that displays a company card
 */
function ProfilePage({user}) {

  return (
    <div className="row d-flex justify-content-center h-50 w-100 m-5">
      <UserCard user={user} />
    </div>
  );
}

export default ProfilePage;