import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardText,
  CardFooter,
  Button,
  ButtonGroup
} from "reactstrap";
/** props: a single friend obj
 * presentational component that displays a company card
 */

function FriendCard({ friend, matchUser, unmatchUser }) {



  async function handleMatch() {
    const res = await matchUser(friend.username);
  }

  async function handleUnmatch() {
    const res = await unmatchUser(friend.username);
  }

  return (
    <Card inverse outline color="dark" className="p-3 m-5 col-xl-4 col-md-6 col-sm-7">
      <CardImg className="img-fluid w-100 h-100" src={friend.images[0]?.path} alt="no image yet" />
      <CardImgOverlay />
      <CardHeader className="text-dark">
        <CardTitle>
          {friend.username}
        </CardTitle>
      </CardHeader>
      <CardBody className="text-dark">
        <CardText>
          <p><small>Bio: {friend.bio}</small></p>
          <p><small>Hobbies: {friend.hobbies}</small></p>
          <p><small>Interests: {friend.interests}</small></p>
        </CardText>
      </CardBody>
      <CardFooter className="d-flex justify-content-center align-content-center">

        <ButtonGroup className="w-100">
          <Button className="btn-success p-2" onClick={handleMatch}>Match</Button>
          <Button className="btn-danger p-2" onClick={handleUnmatch}>Pass</Button>
        </ButtonGroup>

      </CardFooter>
    </Card>
  );

}

export default FriendCard;

