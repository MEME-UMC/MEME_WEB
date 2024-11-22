import { Box, Button, Typography } from '@mui/material';
import { logout } from '../../../core/auth';
import { useJNavigate } from '../../../core/routes';

export const ArtistHomePage = () => {
  const navigate = useJNavigate();
  return (
    <Box>
      <Typography>ArtistHome</Typography>
      <Button
        variant="contained"
        onClick={() => {
          logout();
          navigate('/enter');
        }}
      >
        로그아웃
      </Button>
    </Box>
  );
};
