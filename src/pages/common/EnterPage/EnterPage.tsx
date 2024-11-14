import { Stack, Typography } from '@mui/material';
import { MotionWrapper } from '../../../components/MotionWrapper';
import { JIcon } from '../../../components/JIcon';
import { JButton } from '../../../components/JButton';
import { COLORS } from '../../../core/colors';
import { JImage } from '../../../components/JImage';
import { useJNavigate } from '../../../core/routes';

export const EnterPage = () => {
  const navigate = useJNavigate();
  return (
    <MotionWrapper>
      <Stack flex={1} height={'100%'}>
        <Stack flex={1} justifyContent={'end'} alignItems={'center'} gap={1}>
          <JImage image="logo-lg" />
          <Typography fontSize={18} color={COLORS.primary} fontWeight={600}>
            나만의 메이크업 메이트, 메메!
          </Typography>
          <Typography textAlign={'center'} fontSize={14}>
            메메가 메이크업의 새로운 세계로
            <br />
            여러분을 안내합니다!
          </Typography>
        </Stack>
        <Stack flex={1} justifyContent={'center'}>
          <Stack gap={1} px={5} alignItems={'center'}>
            <JButton
              rippleColor={COLORS.white}
              sx={{ width: 300 }}
              onClick={() => {
                navigate('/login');
              }}
            >
              <JIcon icon="email-login" />
            </JButton>
            <JButton rippleColor={COLORS.white} sx={{ width: 300 }}>
              <JIcon icon="kakao-login" />
            </JButton>
            <JButton rippleColor={COLORS.white} sx={{ width: 300 }}>
              <JIcon icon="apple-login" />
            </JButton>
          </Stack>
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};
