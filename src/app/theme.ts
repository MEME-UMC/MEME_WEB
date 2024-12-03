'use client';
import { COLORS } from '@/styles/colors';
import { createTheme } from '@mui/material/styles';

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
        text: {
          color: COLORS.p_black,
          textDecorationLine: 'underline !important',
        },
      },
    },
  },
});

export default theme;
