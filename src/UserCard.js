import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardText,
  CardFooter
} from "reactstrap";
/** props: a single friend obj
 * presentational component that displays a company card
 */

function UserCard({ user }) {

  return (
    <Card inverse outline color="dark" className="p-3 m-5 col-12 col-lg-2 col-md-3 col-sm-6">
      <CardImg className="img-fluid w-100 h-100" src={user?.images[0]?.path} alt="no image yet" />
      <CardImgOverlay />
      <CardHeader className="text-dark">
        <CardTitle>
          {user.username}
        </CardTitle>
      </CardHeader>
      <CardBody className="text-dark">
        <CardText>
          <p><small>Bio: {user.bio}</small></p>
          <p><small>Hobbies: {user.hobbies}</small></p>
          <p><small>Interests: {user.interests}</small></p>
        </CardText>
      </CardBody>
      <CardFooter className="d-flex justify-content-center align-content-center">
      <Link style={{zIndex: 1}}to="/profile/edit" className="btn-primary btn btn-sm">
          Edit Profile
        </Link>
      </CardFooter>
    </Card>
  );

}

export default UserCard;

