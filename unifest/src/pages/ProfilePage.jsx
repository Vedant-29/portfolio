import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../console-firebase"; // Assuming you export auth from console-firebase
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      navigate("/"); // Navigate to home page
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold text-gray-700">Account Page</h1>
      <button 
        onClick={handleLogout} 
        className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;