import HistoryPage from "@/pages/HistoryPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
]);

export default routes;
