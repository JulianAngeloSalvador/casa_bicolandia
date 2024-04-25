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


    


  
    <div className="login-r">

      <div className="slide-controls">
      <input type="radio" name="slide" id="login" checked></input>
      <input type="radio" name="slide" id="signup"></input>
      <label for="login" class="slide login">Login</label>
      <label for="signup" class="slide signup">Signup</label>
      <div class="slider-tab"></div>
      </div>
      


      
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
   

  </section>





  







  );
}
