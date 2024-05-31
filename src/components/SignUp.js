import React, { useRef, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContexts";

// const SignUp = () => {
//   const navigate = useNavigate();

//   const handleSignUpWithGoogle = async () => {
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
//         onClick={handleSignUpWithGoogle}
//         className="bg-orange-800 text-orange-200 px-4 py-2 rounded"
//       >
//         Sign Up with Google
//       </button>
//     </div>
//   );
// };

const SignUp = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUpWithEmail = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value != passwordConfirmRef.current.value) {
      return setError("Passwords must match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to Create an Account");
    }

    setLoading(false);

    signup(emailRef.current.value, passwordRef.current.value);
  };

  const handleSignUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/account");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSignUpWithEmail}>
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
            <Button
              disabled={loading}
              className="w-100 mt-2 tw-border-0 tw-bg-orange-800"
              type="submit"
            >
              Sign Up With Email
            </Button>
            <Button
              onClick={handleSignUpWithGoogle}
              className="w-100 mt-2 tw-border-0 tw-bg-orange-800"
            >
              Or Sign Up with Google
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
