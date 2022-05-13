import React, { useState, useEffect, useContext } from "react";
import UserContext from "./userContext";
import { Link } from "react-router-dom";
import FrienderApi from "./FrienderApi";
import FriendCard from "./FriendCard";

/** presentational component to show the Hero Homepage */
function Dashboard() {
    const { user } = useContext(UserContext);
    const [potentialMatches, setPotentialMatches] = useState(null)

    useEffect(() => {
        async function getMatches() {

            const res = await FrienderApi.getUsers(localStorage.getItem("token"))
            setPotentialMatches(() => [...res])
        }
        getMatches();
    },[]);

    if(!potentialMatches) {
        return (
            <p>loading...</p>
        )
    }

    return (
        <div>
            {potentialMatches.map((friend,idx) => {
                return <FriendCard key={idx} friend={friend} />
            })}
        </div>
    )

}
export default Dashboard;