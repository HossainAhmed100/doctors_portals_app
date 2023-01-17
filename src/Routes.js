import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Main from "./Layout/Main";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointments/Appointment/Appointment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
]);
