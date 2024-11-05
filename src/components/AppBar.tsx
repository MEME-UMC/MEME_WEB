import { Stack, Typography } from '@mui/material';
import { JButton } from './JButton';
import leftArrow from '../assets/left-arrow.png';
import { useJNavigate } from '../core/routes';

type AppBarProps = {
  title: string;
  backIcon?: boolean;
};
export const AppBar = ({ title, backIcon }: AppBarProps) => {
  const navigate = useJNavigate();
  return (
    <Stack
      sx={{ position: 'relative', width: '100%', height: '48px' }}
      justifyContent={'center'}
    >
      {backIcon && (
        <JButton
          sx={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            borderRadius: '50%',
            ml: 1,
          }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <img width={8} height={16} src={leftArrow} alt="뒤로가기" />
        </JButton>
      )}

      <Typography
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};
