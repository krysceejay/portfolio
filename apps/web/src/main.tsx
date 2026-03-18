import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      <ToastContainer
        theme="dark"
        position="top-right"
        hideProgressBar={false}
        transition={Zoom}
      />
    </BrowserRouter>
  </StrictMode>
);
