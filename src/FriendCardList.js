import React from "react";
import FriendCard from "./FriendCard";


function FriendCardList({ potentialMatches, matchUser, unmatchUser} ){

  return (
      <div className="row d-flex justify-content-center h-50 w-100 m-2">
            {potentialMatches.map((friend,idx) => {
              return <FriendCard key={idx} friend={friend} matchUser={matchUser} unmatchUser={unmatchUser} />
            })}
      </div>
  )
}

export default FriendCardList