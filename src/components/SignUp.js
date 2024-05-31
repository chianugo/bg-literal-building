import React, { useRef } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";

// const SignUp = () => {
//   const navigate = useNavigate();

//   const handleSignUp = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       navigate("/account");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <h2 className="text-2xl">Sign Up</h2>
//       <button
//         onClick={handleSignUp}
//         className="bg-orange-800 text-orange-200 px-4 py-2 rounded"
//       >
//         Sign Up with Google
//       </button>
//     </div>
//   );
// };

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Comfirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  );
};

export default SignUp;
