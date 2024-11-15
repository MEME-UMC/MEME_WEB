import { Box, Button, keyframes, Stack, Typography } from '@mui/material';
import { AppBar } from '../../../../components/AppBar';
import { JImage } from '../../../../components/JImage';

const explodeAnimation = keyframes`
  0% {
    transform: translate(50px, 50px) scale(0);
    opacity: 0.5;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
`;

type Props = {
  onPrev: () => void;
  onNext: () => void;
  isActive: boolean;
};

export const Step4 = ({ isActive, onPrev, onNext }: Props) => {
  return (
    <>
      <AppBar backIcon title="회원가입" onBack={onPrev} />
      <Stack flex={1} justifyContent={'space-between'}>
        <Stack px={2} pt={4} overflow={'hidden'}>
          <Stack alignItems={'center'} gap={2}>
            <Typography fontSize={22} fontWeight={600}>
              OO님, 회원가입이 완료되었습니다!
            </Typography>
            <Typography fontSize={16} fontWeight={400}>
              메메에 오신것을 환영합니다!
            </Typography>
          </Stack>
          {isActive && (
            <Stack alignItems={'end'} pt={6}>
              <Box
                sx={{
                  position: 'absolute',
                  animation: `${explodeAnimation} 0.5s ease-out forwards`,
                  zIndex: 1,
                }}
              >
                <JImage image="party-confetti" />
              </Box>
              <Box
                pt={6}
                sx={{
                  transform: 'translate(80px)',
                }}
              >
                <JImage image="party-cannon" />
              </Box>
            </Stack>
          )}
        </Stack>

        <Stack padding={2}>
          <Button variant="contained" onClick={onNext}>
            메메 시작하기
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
