import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { Toaster } from "react-hot-toast";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={
        <div className="h-screen flex items-center justify-center bg-[#f5f0e8]">
          <div className="flex flex-col items-center gap-4">

            {/* Spinner */}
            <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>

            {/* Text */}
            <p className="text-sm text-stone-500 font-medium">
              Loading...
            </p>

          </div>
        </div>
      }>
        <App />
        <Toaster
          position="top-right" 
          reverseOrder={false}
          gutter={8}
          containerStyle={{
            top: 20,
            right: 20,
          }}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
              borderRadius: "8px",
              padding: "12px 16px",
              fontSize: "14px",
            },

            success: {
              style: {
                background: "#22c55e",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#22c55e",
              },
            },

            error: {
              style: {
                background: "#ef4444",
              },
            },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);