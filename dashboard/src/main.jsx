import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={
      <div className="h-screen flex items-center justify-center bg-[#f5f0e8]">
        <div className="flex flex-col items-center gap-4">

          {/* Spinner */}
          <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>

          {/* Text */}
          <p className="text-sm text-stone-500 font-medium">
            Loading your experience...
          </p>

        </div>
      </div>
    }>
      <App />
    </Suspense>
  </BrowserRouter>
);