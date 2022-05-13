import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import FrienderApi from "./FrienderApi";
import FriendCardList from "./FriendCardList";
import UserContext from "./userContext";

/** presentational component to show the Hero Homepage */
function Dashboard() {

  const [potentialMatches, setPotentialMatches] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");

  async function matchUser(userToMatch) {
    const res = await FrienderApi.likeUser(user.username, userToMatch, token);
    return res;
  }

  async function unmatchUser(userToPass) {
    const res = await FrienderApi.unLikeUser(user.username, userToPass, token);
    return res;
  }

  useEffect(() => {
    async function getMatches() {

      const res = await FrienderApi.getUsers(token);
      for (let user of res) {
        let images = await FrienderApi.getImages(user.username, token);
        user["images"] = images;
      }
      setPotentialMatches(() => [...res]);
      setIsLoading(() => false);
    }
    getMatches();
  }, []);

  if (isLoading) return <div><p className="text-dark">Loading...</p></div>;

  return (
    <FriendCardList matchUser={matchUser} unmatchUser={unmatchUser} potentialMatches={potentialMatches} />
  );

}
export default Dashboard;