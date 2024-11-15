import { Stack, Typography } from '@mui/material';
import { JButton } from './JButton';
import { JIcon } from './JIcon';
import { useJNavigate } from '../core/routes';

type AppBarProps = {
  title?: string;
  backIcon?: boolean;
  onBack?: () => void;
};
export const AppBar = ({ title, backIcon, onBack }: AppBarProps) => {
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
          onClick={
            onBack ??
            (() => {
              navigate(-1);
            })
          }
        >
          <JIcon icon="leftArrow" />
        </JButton>
      )}
      {title && (
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
      )}
    </Stack>
  );
};
