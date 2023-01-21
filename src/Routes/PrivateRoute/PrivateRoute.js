import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import UserBarLoder from "../../Components/UserLoding/UserBarLoder";
import { AuthContext } from "../../Contexts/AuthProvider";

function PrivateRoute({ children }) {
  const { user, userLoding } = useContext(AuthContext);
  const location = useLocation();

  if (userLoding) {
    return <UserBarLoder />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
