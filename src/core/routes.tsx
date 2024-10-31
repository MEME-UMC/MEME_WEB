import { createBrowserRouter, Outlet } from "react-router-dom";
import { EnterPage } from "../pages/common/EnterPage/EnterPage";
import { JoinPage } from "../pages/common/LoginPage/LoginPage";
import { EmailPage } from "../pages/common/EmailPage/EmailPage";
import { PasswordPage } from "../pages/common/PasswordPage/PasswordPage";
import { HomePage } from "../pages/model/HomePage/HomePage";
import { NotificationPage } from "../pages/common/NotificationPage/NotificationPage";
import { Navigation } from "../components/Navigation";

export const router = createBrowserRouter([
  {
    path: "/enter",
    element: <EnterPage />,
  },
  {
    path: "/join",
    element: <JoinPage />,
  },
  {
    path: "/email",
    element: <EmailPage />,
  },
  {
    path: "/password",
    element: <PasswordPage />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
  },
  {
    element: (
      <>
        <Outlet />
        <Navigation />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
