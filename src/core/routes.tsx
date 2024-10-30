import { createBrowserRouter } from 'react-router-dom';
import { EnterPage } from '../pages/EnterPage/EnterPage';
import { JoinPage } from '../pages/LoginPage/LoginPage';
import { EmailPage } from '../pages/EmailPage/EmailPage';
import { PasswordPage } from '../pages/PasswordPage/PasswordPage';

export const router = createBrowserRouter([
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
