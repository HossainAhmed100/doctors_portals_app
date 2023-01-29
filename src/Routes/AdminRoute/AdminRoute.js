import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import UserBarLoder from "../../Components/UserLoding/UserBarLoder";
import { AuthContext } from "../../Contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

function AdminRoute({ children }) {
  const { user, userLoding } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const location = useLocation();

  if (userLoding || isAdminLoading) {
    return <UserBarLoder />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AdminRoute;
