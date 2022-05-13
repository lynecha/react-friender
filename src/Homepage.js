import React, { useState } from "react";
import "./Homepage.css";
import { useContext } from "react";
import UserContext from "./userContext";
import { Link } from "react-router-dom";

/** presentational component to show the Hero Homepage */
function Homepage() {
    const { user } = useContext(UserContext);
    return (
      <section className="bgimage d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2>Friender</h2>
              {user ? (
                <p>Welcome Back {user.username} </p>
              ) : (
                <div>
                  <h5>Find your friends. </h5>
                  <div>
                    <span>
                      <Link className="btn btn-primary" to={"/login"}>Log in</Link>
                      <Link className="btn btn-primary" to={"/signup"}>Signup</Link>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Homepage;