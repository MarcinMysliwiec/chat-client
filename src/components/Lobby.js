import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Lobby = ({ joinRoom, setUserData }) => {
  const [username, setUsername] = useState();
  const [room, setRoom] = useState();

  return <Form className="lobby"
               onSubmit={ e => {
                 e.preventDefault();
                 setUserData({username, room});
                 joinRoom(username, room);
               } }
  >
    <Form.Group>
      <Form.Control placeholder="name" onChange={ e => setUsername(e.target.value) }/>
      <Form.Control placeholder="room" onChange={ e => setRoom(e.target.value) }/>
    </Form.Group>
    <Button variant="success" type="submit" disabled={ !username || !room }>Join</Button>
  </Form>
}

export default Lobby;