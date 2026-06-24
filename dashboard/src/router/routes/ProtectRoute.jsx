import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ route, children }) => {
  const { role, userInfo } = useSelector((state) => state.auth);

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  const userRole = userInfo?.userInfo?.role;

  if (userRole !== route?.role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
};

export default ProtectRoute;