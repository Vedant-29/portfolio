import React from "react";
import { Link } from "react-router-dom";
import logo_dark from "../assets/logos/unifest.PNG";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../console-firebase";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-[#14181B] py-2.5">
      <div className="px-4 md:px-7 sm:px-12 flex justify-between items-center">
        {/*Div for the main unifest logo*/}
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={logo_dark} className="h-9" />
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          {isLoggedIn ? (
            <>
              <div>
                <Link to="/" className="text-white">
                  <button className="bg-[#E75A5A] hover:bg-[#E75A5A] text-white font-bold py-2 px-3 rounded-md">
                    List Your Event
                  </button>
                </Link>
              </div>
              <div>
                {/* Show profile div if user is logged in */}
                <Link to="/profile" className="text-white">
                  <div>
                    <div className="text-xl p-2 bg-pink-500 rounded-full">
                      <CgProfile />
                    </div>
                  </div>
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Show login/signup buttons if user is not logged in */}
              <div>
                <Link to="/login" className="text-white">
                  <button className="bg-transparent hover:bg-transparent text-white font-bold py-1.5 px-2.5 rounded-md">
                    Log in
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/signup" className="text-white">
                  <button className="bg-transparent hover:bg-transparent text-white font-bold py-1.5 px-2.5 rounded-md border-1 border-white">
                    Sign up
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
