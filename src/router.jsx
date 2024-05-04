import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Servicehome from "./components/services/Servicehome";
import App from "./App";
import Teamhome from "./components/Team/teamhome";
import ProcessHome from "./components/Process/ProcessHome";
import Pricinghome from "./components/Pricing/Pricinghome";
    
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/service",
    element: <Servicehome />,
  },
  {
    path: "/team",
    element: <Teamhome/>
  },
  {
    path: "/process",
    element: <ProcessHome/>
  },
  {
    path: "/pricing",
    element: <Pricinghome/>
  }
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
