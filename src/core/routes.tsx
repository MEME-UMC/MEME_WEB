import {
  createBrowserRouter,
  NavigateOptions,
  Outlet,
  // eslint-disable-next-line no-restricted-imports
  useNavigate,
} from 'react-router-dom';
import { EnterPage } from '../pages/common/EnterPage/EnterPage';
import { FindPasswordPage } from '../pages/common/FindPasswordPage/FindPasswordPage';
import { HomePage } from '../pages/model/HomePage/HomePage';
import { NotificationPage } from '../pages/common/NotificationPage/NotificationPage';
import { Navigation } from '../components/Navigation';
import { MypagePage } from '../pages/model/MypagePage/MypagePage';
import { ReservationPage } from '../pages/model/ReservationPage/ReservationPage';
import { JoinPage } from '../pages/common/JoinPage/JoinPage';
import { LoginPage } from '../pages/common/LoginPage/LoginPage';
import { FindEmailPage } from '../pages/common/FindEmailPage/FindEmailPage';

const paths = {
  home: '/',
  enter: '/enter',
  login: '/login',
  join: '/join',
  findEmail: '/find-email',
  findPassword: '/find-password',
  privacyPolicy: '/privacy-policy',
  termsOfService: '/terms-of-service',
  model: '/model/',
  modelReservation: '/model/reservation',
  modelReservationId: '/model/reservation/:id',
  searchMakeup: '/search/makeup',
  searchMakeupKeyword: '/search/makeup?keyword',
  makeupId: '/makeup/:id',
  bookId: '/book/:id',
  profileEdit: '/profile/edit',
  leave: '/leave',
  contact: '/contact',
  favoriteArtist: '/favorite/artist',
  favoriteMakeup: '/favorite/makeup',
  review: '/review',
  reviewEdit: '/review/edit',
  artist: '/artist/',
  artistReservation: '/artist/reservation',
  artistReservationId: '/artist/reservation/:id',
  artistProfileEdit: '/artist/profile/edit',
  artistMakeup: '/artist/makeup',
  makeupIdEdit: '/makeup/:id/edit',
  artistId: '/artist/:id',
  artistSchedule: '/artist/schedule',
  notification: '/notification',
  mypage: '/mypage',
  myinfo: '/myinfo',
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
    path: paths.login,
    element: <LoginPage />,
  },
  {
    path: paths.findEmail,
    element: <FindEmailPage />,
  },
  {
    path: paths.findPassword,
    element: <FindPasswordPage />,
  },
  {
    path: paths.notification,
    element: <NotificationPage />,
  },
  // {
  //   path: paths.reservationView,
  //   element: <ReserVationViewPage />,
  // },
  // {
  //   path: paths.reservationTime,
  //   element: <ReservationTimePage />,
  // },
  // {
  //   path: paths.reservationComplete,
  //   element: <ReservationComplete />,
  // },
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
        path: paths.searchMakeup,
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
