import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { createTheme, ThemeProvider } from '@mui/material';
import { COLORS } from './colors';

const theme = createTheme({
  typography: {
    fontFamily: " 'Pretendard', sans-serif",
  },
  palette: {
    primary: {
      main: COLORS.primary,
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
