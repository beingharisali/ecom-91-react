import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setAuthData({ ...authData, [name]: value });
  }
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://ecom-91-node.onrender.com/login",
        authData,
      );
      console.log(res);
      setAuthData({
        email: "",
        password: "",
      });
      navigate("/products");
    } catch (err) {
      console.log("err", err);
    }
  }
  return (
    <div className="container">
      <h1 className="text-center">Login here</h1>
      <Form className="w-1/2 mx-auto" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="haris@gmail.com"
            name="email"
            value={authData.email}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            name="password"
            value={authData.password}
            onChange={changeHandler}
          />
        </Form.Group>
        <p>
          Don't have an account? Please <Link to="/register">Signup</Link>
        </p>

        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
