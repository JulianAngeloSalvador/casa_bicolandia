import React from "react";
import "./Signup.css";
import angel from "/assets/angel.jpg";


import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



export default function Signup() {
  return (

    <section id="formContainer" className="signup">

    <div className="signup-l">
    <img src={angel} alt=""/>
    </div>
    

    <div className="signup-r">
      <h5 class="mb-5">Sign Up</h5>
    <FloatingLabel
      controlId="floatingInput"
      label="Email address"
      className="mb-3"
    >
      <Form.Control type="email" placeholder="name@example.com" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingPassword" label="Password"  className="mb-3">
      <Form.Control type="password" placeholder="Password" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingPassword" label="Re-type Password">
      <Form.Control type="password" placeholder="Password" />
    </FloatingLabel>
    <div class="d-grid gap-2">
      <button class="btn btn-secondary mt-3 mb-1" type="button">Sign Up</button>
    </div>

    <div className="text-center" >
      <p>Already have an account? Sign In</p>
    </div>

    </div>

  </section>



  );
}
