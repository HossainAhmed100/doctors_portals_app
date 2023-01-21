import { createBrowserRouter } from "react-router-dom";
import PasswordReset from "../../Pages/PasswordReset/PasswordReset";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Main from "./../../Layout/Main";
import Appointment from "./../../Pages/Appointments/Appointment/Appointment";
import Dashboard from "./../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "./../../Pages/Home/Home";
import Login from "./../../Pages/Login/Login";
import SignUp from "./../../Pages/SignUp/SignUp";

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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/passwordreset",
    element: <PasswordReset />,
  },
]);
