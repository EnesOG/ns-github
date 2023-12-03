import "@/components/App/app.css";
import Providers from "@/components/Providers/Providers";
import routes from "@/components/Providers/routes";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={routes} />
    </Providers>
  </StrictMode>
);
