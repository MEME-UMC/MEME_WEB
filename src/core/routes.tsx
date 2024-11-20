import {
  createBrowserRouter,
  NavigateOptions,
  // eslint-disable-next-line no-restricted-imports
  useNavigate,
} from 'react-router-dom';
import { EnterPage } from '../pages/guest/EnterPage/EnterPage';
import { FindPasswordPage } from '../pages/guest/FindPasswordPage/FindPasswordPage';
import { ModelHomePage } from '../pages/model/ModelHomePage/ModelHomePage';
import { NotificationPage } from '../pages/common/NotificationPage/NotificationPage';
import { MypagePage } from '../pages/common/MypagePage/MypagePage';
import { JoinPage } from '../pages/guest/JoinPage/JoinPage';
import { LoginPage } from '../pages/guest/LoginPage/LoginPage';
import { FindEmailPage } from '../pages/guest/FindEmailPage/FindEmailPage';
import { PrivacyPolicyPage } from '../pages/guest/PrivacyPolicyPage/PrivacyPolicyPage';
import { TermsOfServicePage } from '../pages/guest/TermsOfServicePage/TermsOfServicePage';
import { ModelReservationPage } from '../pages/model/ModelReservationPage/ModelReservationPage';
import { ModelReservationIdPage } from '../pages/model/ModelReservationIdPage/ModelReservationIdPage';
import { SearchMakeupPage } from '../pages/model/SearchMakeupPage/SearchMakeupPage';
import { SearchMakeupKeywordPage } from '../pages/model/SearchMakeupKeywordPage/SearchMakeupKeywordPage';
import { MakeupIdPage } from '../pages/model/MakeupIdPage/MakeupIdPage';
import { BookIdPage } from '../pages/model/BookIdPage/BookIdPage';
import { ArtistProfileEditPage } from '../pages/artist/ArtistProfileEditPage/ArtistProfileEditPage';
import { LeavePage } from '../pages/common/LeavePage/LeavePage';
import { ContactPage } from '../pages/common/ContactPage/ContactPage';
import { FavoriteArtistPage } from '../pages/model/FavoriteArtistPage/FavoriteArtistPage';
import { FavoriteMakeupPage } from '../pages/model/FavoriteMakeupPage/MyinfoPage';
import { ReviewPage } from '../pages/model/ReviewPage/ReviewPage';
import { ReviewEditPage } from '../pages/model/ReviewEditPage/ReviewEditPage';
import { ArtistHomePage } from '../pages/artist/ArtistHomePage/ArtistHomePage';
import { ArtistReservationPage } from '../pages/artist/ArtistReservationPage/ArtistReservationPage';
import { ArtistReservationIdPage } from '../pages/artist/ArtistReservationIdPage/ArtistReservationIdPage';
import { ArtistMakeupPage } from '../pages/artist/ArtistMakeupPage/ArtistMakeupPage';
import { MakeupIdEditPage } from '../pages/artist/MakeupIdEditPage/MakeupIdEditPage';
import { ArtistIdPage } from '../pages/artist/ArtistIdPage/ArtistIdPage';
import { ArtistSchedulePage } from '../pages/artist/ArtistSchedulePage/ArtistSchedulePage';
import { MyinfoPage } from '../pages/common/MyinfoPage/MyinfoPage';
import { ModelProfileEditPage } from '../pages/model/ModelProfileEditPage/ModelProfileEditPage';

const paths = {
  home: '/',
  enter: '/enter',
  login: '/login',
  join: '/join',
  findEmail: '/find-email',
  findPassword: '/find-password',
  privacyPolicy: '/privacy-policy',
  termsOfService: '/terms-of-service',
  modelHome: '/model/home',
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
  artistHome: '/artist/home',
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
  { path: paths.home, element: <ModelHomePage /> },
  { path: paths.enter, element: <EnterPage /> },
  { path: paths.login, element: <LoginPage /> },
  { path: paths.join, element: <JoinPage /> },
  { path: paths.findEmail, element: <FindEmailPage /> },
  { path: paths.findPassword, element: <FindPasswordPage /> },
  { path: paths.privacyPolicy, element: <PrivacyPolicyPage /> },
  { path: paths.termsOfService, element: <TermsOfServicePage /> },
  { path: paths.modelHome, element: <ModelHomePage /> },
  { path: paths.modelReservation, element: <ModelReservationPage /> },
  { path: paths.modelReservationId, element: <ModelReservationIdPage /> },
  { path: paths.searchMakeup, element: <SearchMakeupPage /> },
  { path: paths.searchMakeupKeyword, element: <SearchMakeupKeywordPage /> },
  { path: paths.makeupId, element: <MakeupIdPage /> },
  { path: paths.bookId, element: <BookIdPage /> },
  { path: paths.profileEdit, element: <ModelProfileEditPage /> },
  { path: paths.leave, element: <LeavePage /> },
  { path: paths.contact, element: <ContactPage /> },
  { path: paths.favoriteArtist, element: <FavoriteArtistPage /> },
  { path: paths.favoriteMakeup, element: <FavoriteMakeupPage /> },
  { path: paths.review, element: <ReviewPage /> },
  { path: paths.reviewEdit, element: <ReviewEditPage /> },
  { path: paths.artistHome, element: <ArtistHomePage /> },
  { path: paths.artistReservation, element: <ArtistReservationPage /> },
  { path: paths.artistReservationId, element: <ArtistReservationIdPage /> },
  { path: paths.artistProfileEdit, element: <ArtistProfileEditPage /> },
  { path: paths.artistMakeup, element: <ArtistMakeupPage /> },
  { path: paths.makeupIdEdit, element: <MakeupIdEditPage /> },
  { path: paths.artistId, element: <ArtistIdPage /> },
  { path: paths.artistSchedule, element: <ArtistSchedulePage /> },
  { path: paths.notification, element: <NotificationPage /> },
  { path: paths.mypage, element: <MypagePage /> },
  { path: paths.myinfo, element: <MyinfoPage /> },
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
