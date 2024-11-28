import { JButton } from '@/components/JButton';
import { COLORS } from '@/styles/colors';
import { Stack } from '@mui/material';

export const TimeItem = () => {
  return (
    <Stack
      width={'calc(25% - 7.3px)'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'35px'}
      border={1}
      borderColor={COLORS.gray400}
      borderRadius={'9px'}
    >
      <JButton sx={{ width: '100%', height: '100%', fontSize: '12px' }}>
        10:30
      </JButton>
    </Stack>
  );
};
