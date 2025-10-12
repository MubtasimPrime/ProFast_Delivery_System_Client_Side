import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <section className="urbanist-font main-bg pt-8 ">
      <div className="max-w-[1500px] mx-auto">
        <RouterProvider router={router} />
      </div>
    </section>
  </StrictMode>
);
