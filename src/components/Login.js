import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/account");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="tw-text-2xl">Log In</h2>
      <Button
        onClick={handleLogin}
        className="tw-bg-orange-800 tw-text-orange-20 tw-px-4 tw-py-2 tw-rounded tw-border-0"
      >
        Log In with Google
      </Button>
    </div>
  );
};

export default Login;
