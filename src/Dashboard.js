import React, { useState, useEffect, useContext } from "react";
import UserContext from "./userContext";
import { Link } from "react-router-dom";
import FrienderApi from "./FrienderApi";
import FriendCard from "./FriendCard";

/** presentational component to show the Hero Homepage */
function Dashboard() {
    const { user } = useContext(UserContext);
    const [potentialMatches, setPotentialMatches] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getMatches() {

            const res = await FrienderApi.getUsers(localStorage.getItem("token"))
            for (let user of res) {
                let images = await FrienderApi.getImages(user.username,localStorage.getItem("token"));
                user["images"] = images;
            }
            setPotentialMatches(() => [...res])
            setIsLoading(() => false);
        }
        getMatches();
    },[]);

    if (isLoading) {
        return (
            <div>
                <p className="text-dark">Loading...</p>
            </div>
            
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