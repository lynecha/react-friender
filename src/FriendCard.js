import { Link } from "react-router-dom";
import React from "react";

/** props: a single friend obj
 * presentational component that displays a company card
 */
function FriendCard({ friend }) {
  console.log(friend)
  return (
    <div className="card" style={{width: "5em", height: "4em"}}>

        <h1 className="text-dark">{friend.username}</h1>
        <div className="card-body">
          <img width="400px" length="400px" src={friend.images[0]?.path} alt="no image yet"/>
          <p>{friend.bio}</p>
          <p>{friend.hobbies}</p>
          <p>{friend.interests}</p>
          <p>{friend.location}</p>
        </div>

    </div>
  );
}

export default FriendCard;