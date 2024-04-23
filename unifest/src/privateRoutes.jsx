import React, { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./console-firebase";
import { Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PrivateRoutes({ component: RouteComponent, ...rest }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Navigate to={"/login"} />
        )
      }
    />
  );
}

export default PrivateRoutes;
