import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOut } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";

const Account = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto flex place-items-center">
        <h2 className="text-2xl">Account</h2>
        <p>You are not logged in. Log in or Sign up to view Account details</p>
        <Button
          onClick={() => navigate("/login")}
          className="tw-bg-orange-800 tw-text-orange-200 tw-px-4 tw-py-2 tw-rounded tw-m-2"
        >
          Log In
        </Button>
        <Button
          onClick={() => navigate("/signup")}
          className="tw-bg-orange-800 tw-text-orange-200 tw-px-4 tw-py-2 tw-rounded tw-ml-2"
        >
          Sign Up
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl">Account</h2>
      <p>Welcome, {user.displayName}</p>
      <button
        onClick={handleSignOut}
        className="bg-orange-800 text-orange-200 px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Account;
