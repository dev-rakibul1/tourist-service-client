import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./ContextProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <button type="button" class="bg-indigo-500" disabled>
        <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
      </button>
    );
  }

  if (user && user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
