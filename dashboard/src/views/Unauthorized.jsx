import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        
        <h1 className="text-6xl font-bold text-red-500">403</h1>

        <h2 className="mt-3 text-2xl font-semibold text-gray-800">
          Access Denied
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, you don't have permission to access this page.
        </p>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/admin/dashboard")}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};

export default Unauthorized;