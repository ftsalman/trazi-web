import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { DashboardPage } from "../pages/DashboardPage";
import { AuthLayout } from "../layouts/AuthLayout";
import { LoginPage } from "../pages/LoginPage";
import { EnquiryPage } from "../pages/EnquiryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },

  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: (
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "register",
        element: <div></div>,
      },
    ],
  },

  {
    path: "/",  
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path:"/enquiry",
        element: <EnquiryPage/>
      },
    ],
  },
]);
