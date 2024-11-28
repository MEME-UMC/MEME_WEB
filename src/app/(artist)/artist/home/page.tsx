import { logout } from '@/app/auth';
import { Box, Button, Typography } from '@mui/material';

const Page = () => {
  return (
    <Box>
      <Typography>ArtistHome</Typography>
      <Button
        variant="contained"
        onClick={() => {
          logout();
          // navigate('/enter');
        }}
      >
        로그아웃
      </Button>
    </Box>
  );
};
export default Page;
