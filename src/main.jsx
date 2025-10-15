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
    <section className="urbanist-font main-bg pt-8 pb-10">
      <div className="max-w-[1500px] mx-auto">
        <RouterProvider router={router} />
      </div>
    </section>
  </StrictMode>
);
