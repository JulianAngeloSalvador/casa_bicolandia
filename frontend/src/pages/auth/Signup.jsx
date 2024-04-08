import React from "react";
import "./Signup.css";
import authside from "/assets/authside.jpg";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';




export default function Signup() {
  return (

<section className="container">
<InputGroup className="mb-3">
<InputGroup.Text>First and last name</InputGroup.Text>
<Form.Control aria-label="First name" />
<Form.Control aria-label="Last name" />
 </InputGroup>
 </section>



  );
}
