import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/account");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl">Sign Up</h2>
      <button
        onClick={handleSignUp}
        className="bg-orange-800 text-orange-200 px-4 py-2 rounded"
      >
        Sign Up with Google
      </button>
    </div>
  );
};

export default SignUp;
