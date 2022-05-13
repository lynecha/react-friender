import React, { useState } from "react";
import "./Homepage.css";
import { useContext } from "react";
import UserContext from "./userContext";
import { Link } from "react-router-dom";

/** presentational component to show the Hero Homepage */
function Homepage() {
    const { user } = useContext(UserContext);
    return (
          <div className="row d-flex w-100 align-items-center justify-content-center">
            <div className="col-4">
              <h2 className="text-light">Friender</h2>
              {user ? (
                <p className="text-light">Welcome Back {user.username} </p>
              ) : (
                <>
                  <h5 className="text-light ">Find your friends. </h5>
                    <span>
                      <Link className="btn btn-primary m-1" to={"/login"}>Log in</Link>
                      <Link className="btn btn-primary m-1" to={"/signup"}>Signup</Link>
                    </span>
                </>
              )}
            </div>
          </div>
    )
  }

  export default Homepage;