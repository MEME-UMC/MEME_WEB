import {
  createBrowserRouter,
  NavigateOptions,
  Outlet,
  // eslint-disable-next-line no-restricted-imports
  useNavigate,
} from 'react-router-dom';
import { EnterPage } from '../pages/common/EnterPage/EnterPage';
import { JoinPage } from '../pages/common/LoginPage/LoginPage';
import { EmailPage } from '../pages/common/EmailPage/EmailPage';
import { PasswordPage } from '../pages/common/PasswordPage/PasswordPage';
import { HomePage } from '../pages/model/HomePage/HomePage';
import { NotificationPage } from '../pages/common/NotificationPage/NotificationPage';
import { Navigation } from '../components/Navigation';
import { MypagePage } from '../pages/model/MypagePage/MypagePage';
import { ReservationPage } from '../pages/model/ReservationPage/ReservationPage';

const paths = {
  enter: '/enter',
  join: '/join',
  email: '/email',
  password: '/password',
  notification: '/notification',
  reservation: '/reservation',
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
    element: <JoinPage />,
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
    path: paths.reservation,
    element: <ReservationPage />,
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
    ],
  },
]);

type Paths = (typeof paths)[keyof typeof paths];

type UseJNavigate = () => {
  (
    to:
      | Paths
      | {
          pathname: Paths | undefined;
          search: string | undefined;
          hash: string | undefined;
        },
    options?: NavigateOptions
  ): void;
  (delta: number): void;
};

export const useJNavigate: UseJNavigate = useNavigate;
