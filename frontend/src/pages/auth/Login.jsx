import React from "react";
import "./Login.css";
import authside from "/assets/authside.jpg";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Login() {
  return (

    <section id="formContainer" className="login">


    <div className="login-l">
    <img src={authside} alt=""/>
    </div>
    
    <div className="login-r">
    <FloatingLabel
      controlId="floatingInput"
      label="Email address"
      className="mb-3"
    >
      <Form.Control type="email" placeholder="name@example.com" />
    </FloatingLabel>
    <FloatingLabel controlId="floatingPassword" label="Password">
      <Form.Control type="password" placeholder="Password" />
    </FloatingLabel>
    </div>

  </section>
  );
}
