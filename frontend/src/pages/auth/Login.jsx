import React from "react";
import "./Login.css";
import angel from "/assets/angel.jpg";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

// Icons: 
import { MdFacebook } from "react-icons/md";
import { AiFillGoogleCircle } from "react-icons/ai";


export default function Login() {
  return (

    <section id="formContainer" className="login">

    <div className="login-l">
    <img src={angel} alt=""/>
    </div>


    


    <div className="container p-4">
    <div className="login-r">
      <h5 class="mb-3 p-2">Sign In</h5>
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
    <div class="d-grid gap-2">
      <button class="btn btn-secondary mt-3 mb-1 p-2" type="button">Login</button>
    </div>

    <div class="text-center">
    <paragraph>or sign up using</paragraph>
    </div>


    <div className="container"> 
    <div className="row">
    <button class="col-md-6 mt-2 p-2 btn btn-secondary" type="button" id="facebook"><MdFacebook /> Facebook</button>
    <button class="col-md-6 mt-2 p-2 btn btn-secondary" type="button"><AiFillGoogleCircle />Gmail </button>
    </div>
    </div>
    </div>
    </div>

  </section>





  







  );
}
