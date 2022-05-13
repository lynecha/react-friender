import { Link } from "react-router-dom";
import React from "react";

/** props: a single friend obj
 * presentational component that displays a company card
 */
function FriendCard({ friend }) {
  return (
    <div className="card" style={{width: "5em", height: "4em"}}>

        <h1 className="text-dark">{friend.username}</h1>
        <div className="card-body">
          <img src={friend?.images} alt=""/>
          <p>{friend.bio}</p>
          <p>{friend.hobbies}</p>
          <p>{friend.interests}</p>
          <p>{friend.location}</p>
        </div>

    </div>
  );
}

export default FriendCard;