import { Box, Stack, Typography } from '@mui/material';
import { JButton } from '../../../../components/JButton';
import { COLORS } from '@/styles/colors';
import { JIcon } from '../../../../components/JIcon';

export const Step3Part3 = () => {
  return (
    <Stack alignItems={'start'} px={2}>
      <Typography fontWeight={600} py={4}>
        프로필 사진을 추가해주세요. (선택)
      </Typography>
      <Stack width={1} alignItems={'center'} gap={4}>
        <Box position={'relative'}>
          <JButton
            sx={{
              height: '180px',
              width: '180px',
              borderRadius: '180px',
              boxShadow: `-5px -5px 20px 0px ${COLORS.gray300} inset`,
            }}
          >
            <JIcon icon="profile" color={COLORS.gray400} />
          </JButton>
          <JButton
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 5,
              bgcolor: COLORS.p_black,
              height: 42,
              width: 42,
              borderRadius: 42,
            }}
            rippleColor={COLORS.white}
          >
            <JIcon icon="plus" />
          </JButton>
        </Box>
      </Stack>
    </Stack>
  );
};
