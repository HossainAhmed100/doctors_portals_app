import { createBrowserRouter } from "react-router-dom";
import DisplayError from "../../Components/DisplayError/DisplayError";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyAppointment from "../../Pages/Dashboard/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import ManagaeDoctors from "../../Pages/Dashboard/ManagaeDoctors/ManagaeDoctors";
import PasswordReset from "../../Pages/PasswordReset/PasswordReset";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Main from "./../../Layout/Main";
import Appointment from "./../../Pages/Appointments/Appointment/Appointment";
import Home from "./../../Pages/Home/Home";
import Login from "./../../Pages/Login/Login";
import SignUp from "./../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
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
    errorElement: <DisplayError />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myappointment",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManagaeDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <AdminRoute>
            <Payment />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")} `,
            },
          }),
      },
    ],
  },
  {
    path: "/passwordreset",
    element: <PasswordReset />,
  },
]);
