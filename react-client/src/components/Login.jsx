import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Button, Container, Form } from "react-bootstrap";
import Axios from "axios";
// import axios from "axios";
import { useState } from "react";

function Login({ title }) {
  const [NIS, setNIS] = useState("");
  const [password, setPassword] = useState("");

  const handleNIS = (inputNIS) => {
    setNIS(inputNIS);
  };

  const handlePassword = (inputPassword) => {
    setPassword(password);
  };

  const userLogin = () => {
    console.log("user login ready boss");

    const requestingData = {
      nis: NIS,
      password: password,
    };

    Axios({
      method: "POST",
      url: "http://localhost:3200/users/login",
      data: requestingData,
    }).then((result) =>
      // result itu dari http
      console.log("tes endpoint: ", result.data)
    );
  };

  return (
    <Container>
      <div className="my-5 fw-bold h3">
        <ReactTypingEffect text={["This is: " + title]} speed={50} eraseDelay={500} eraseSpeed={50} />
      </div>
      <div className="w-50 mx-auto fw-bold">
        <Form>
          <Form.Group>
            <Form.Label>NIS</Form.Label>
            <Form.Control placeholder="nomor induk siswa" type="number" required onChange={(event) => handleNIS(event.target.value)} />
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="password" type="password" required onChange={(event) => handlePassword(event.target.value)} />
          </Form.Group>
          <Button className="mt-4 w-100" onClick={() => userLogin()}>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
