import {
  createBrowserRouter,
  NavigateOptions,
  Outlet,
  // eslint-disable-next-line no-restricted-imports
  useNavigate,
} from 'react-router-dom';
import { EnterPage } from '../pages/common/EnterPage/EnterPage';
import { EmailPage } from '../pages/common/EmailPage/EmailPage';
import { PasswordPage } from '../pages/common/PasswordPage/PasswordPage';
import { HomePage } from '../pages/model/HomePage/HomePage';
import { NotificationPage } from '../pages/common/NotificationPage/NotificationPage';
import { Navigation } from '../components/Navigation';
import { MypagePage } from '../pages/model/MypagePage/MypagePage';
import { ReservationPage } from '../pages/model/ReservationPage/ReservationPage';
import { ReserVationViewPage } from '../pages/model/ReservationViewPage/ReserVationViewPage';
import { JoinPage } from '../pages/common/JoinPage/JoinPage';
import { LoginPage } from '../pages/common/LoginPage/LoginPage';
import { AppBar } from '../components/AppBar';

const paths = {
  enter: '/enter',
  join: '/join',
  login: '/login',
  email: '/email',
  password: '/password',
  notification: '/notification',
  reservation: '/reservation',
  reservationView: '/reservation/view/:num',
  home: '/',
  mypage: '/my',
} as const;

export const router = createBrowserRouter([
  {
    path: paths.enter,
    element: <EnterPage />,
  },
  {
    path: paths.join,
    element: (
      <>
        <AppBar backIcon />
        <JoinPage />
      </>
    ),
  },
  {
    path: paths.login,
    element: <LoginPage />,
  },
  {
    path: paths.email,
    element: <EmailPage />,
  },
  {
    path: paths.password,
    element: <PasswordPage />,
  },
  {
    path: paths.notification,
    element: <NotificationPage />,
  },

  {
    path: paths.reservationView,
    element: <ReserVationViewPage />,
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
        path: paths.home,
        element: <HomePage />,
      },
      {
        path: paths.mypage,
        element: <MypagePage />,
      },
      {
        path: paths.reservation,
        element: <ReservationPage />,
      },
    ],
  },
]);

export type Path = (typeof paths)[keyof typeof paths];

type UseJNavigate = () => {
  (
    to:
      | Path
      | {
          pathname: Path | undefined;
          search: string | undefined;
          hash: string | undefined;
        },
    options?: NavigateOptions
  ): void;
  (delta: number): void;
};

export const useJNavigate: UseJNavigate = useNavigate;
