import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Router/router.jsx";
import "aos/dist/aos.css";
import Aos from "aos";

window.addEventListener("load", () => {
  Aos.init({
    duration: 600,
  });
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <section className="urbanist-font">
      <RouterProvider router={router} />
    </section>
  </StrictMode>
);
