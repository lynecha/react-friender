import { Link } from "react-router-dom";
import React, {useContext } from "react";
import UserContext from "./userContext";
import FrienderApi from './FrienderApi';

/** props: a single friend obj
 * presentational component that displays a company card
 */
function ProfilePage() {
    
    const { user } = useContext(UserContext);
   
    return (
        <div>
            <div className="card" style={{width: "12em", height: "12em"}}>

                <h1 className="text-dark">{user.username}</h1>
                <div className="card-body text-dark">
                    <img width="400px" height="400px" src={user.images?.[0]?.path} alt="no image yet"/>
                    <p>{user.bio}</p>
                    <p>{user.hobbies}</p>
                    <p>{user.interests}</p>
                    <p>{user.location}</p>    
                </div>
            <Link to="/profile/edit" className="btn-primary rig btn btn-sm">
                Edit Profile
            </Link>
        </div>
    </div>
  );
}

export default ProfilePage;