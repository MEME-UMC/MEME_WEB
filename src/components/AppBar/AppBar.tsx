import { Stack, Typography } from '@mui/material';
import { JButton } from '../JButton';
import leftArrow from '../../assets/left-arrow.png';

type AppBarProps = {
  title: string;
  backIcon?: boolean;
};
export const AppBar = ({ title, backIcon }: AppBarProps) => {
  return (
    <Stack px={1} sx={{ position: 'relative', width: '100%', height: '48px' }}>
      {backIcon === false ? null : (
        <JButton
          sx={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            borderRadius: '50%',
          }}
          to={-1}
        >
          <img
            style={{ width: 8, height: 16 }}
            src={leftArrow}
            alt="뒤로가는 버튼 추가"
          />
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
