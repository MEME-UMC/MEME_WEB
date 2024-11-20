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
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: COLORS.white,
          fontSize: 16,
          borderRadius: 8,
          padding: 12,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          color: COLORS.p_black,
          backgroundColor: COLORS.primary200,
          '&& .MuiTouchRipple-child': {
            backgroundColor: COLORS.primary,
          },
        },
      },
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
