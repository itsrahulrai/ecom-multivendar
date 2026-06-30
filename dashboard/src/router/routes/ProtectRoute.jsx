import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ route, children }) => {
  const { role, userInfo,loader  } = useSelector((state) => state.auth);

  console.log("Role:", role);
console.log("UserInfo:", userInfo);
console.log("UserRole:", userInfo?.userInfo?.role);
console.log("Status:", userInfo?.userInfo?.status);

  // User not logged in
  if (!role) {
    return <Navigate to="/login" replace />;
  }
      // Wait until user info has loaded
    if (loader || (role && !userInfo)) {
        return <div>Loading...</div>;
    }

  const userRole = userInfo?.userInfo?.role;
  const userStatus = userInfo?.userInfo?.status;

  /**
   * Ability routes
   * Example:
   * /seller/account-pending
   * /seller/account-deactive
   */
  if (route?.ability) {
    if (userRole !== route.ability) {
      return <Navigate to="/unauthorized" replace />;
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    );
  }

  // Role check
  if (userRole !== route?.role) {
    return <Navigate to="/unauthorized" replace />;
  }

  // If this route allows multiple statuses
  if (route?.visibility) {
    const allowed = route.visibility.includes(userStatus);

    if (allowed) {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      );
    }
  }

  // Redirect according to user status
  const statusRoutes = {
    pending: "/seller/account-pending",
    deactive: "/seller/account-deactive",
  };

  if (statusRoutes[userStatus]) {
    return <Navigate to={statusRoutes[userStatus]} replace />;
  }

  // Allow access
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
};

export default ProtectRoute;