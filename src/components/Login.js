import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

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
      <h2 className="text-2xl">Log In</h2>
      <button
        onClick={handleLogin}
        className="bg-orange-800 text-orange-200 px-4 py-2 rounded"
      >
        Log In with Google
      </button>
    </div>
  );
};

export default Login;
