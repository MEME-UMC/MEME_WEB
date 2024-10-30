import { createBrowserRouter } from 'react-router-dom';
import { EnterPage } from '../pages/common/EnterPage/EnterPage';
import { JoinPage } from '../pages/common/LoginPage/LoginPage';
import { EmailPage } from '../pages/common/EmailPage/EmailPage';
import { PasswordPage } from '../pages/common/PasswordPage/PasswordPage';
import { HomePage } from '../pages/artist/HomePage/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/enter',
    element: <EnterPage />,
  },
  {
    path: '/join',
    element: <JoinPage />,
  },
  {
    path: '/email',
    element: <EmailPage />,
  },
  {
    path: '/password',
    element: <PasswordPage />,
  },
]);
