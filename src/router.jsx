import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Servicehome from "./components/services/Servicehome";
import App from "./App";
    
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/service",
    element: <Servicehome />,
  },
];

const router = createBrowserRouter(routes);

const Rout = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Rout;
