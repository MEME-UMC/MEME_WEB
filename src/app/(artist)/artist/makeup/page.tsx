'use client';
import { AppBar } from '@/components/AppBar';
import { JButton } from '@/components/JButton';
import { MotionWrapper } from '@/components/MotionWrapper';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';
import { MakeupItem } from './components/MakeupItem';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  return (
    <MotionWrapper>
      <Stack width={'100%'} height={'100%'}>
        <AppBar title='포트폴리오 관리' backIcon />
        {/* <Stack
          position={'absolute'}
          top={'50%'}
          left={'50%'}
          sx={{ transform: 'translate(-50%, -50%)' }}
        >
          <Typography fontSize={20} fontWeight={600}>
            등록된 포트폴리오가 없어요!
          </Typography>
          <Typography fontSize={20} fontWeight={400} textAlign={'center'}>
            포트폴리오를 등록하고
            <br />
            모델과의 예약을 잡아보세요!
          </Typography>
        </Stack> */}
        <Stack px={3}>
          <Typography my={'18px'}>총 4개</Typography>
          <MakeupItem />
        </Stack>
        <JButton
          onClick={() => router.push('makeup/write')}
          sx={{
            position: 'fixed',
            right: '23px',
            bottom: '52px',
            width: '75px',
            height: '75px',
            borderRadius: '50%',
            bgcolor: `${COLORS.primary}`,
          }}
        >
          a
        </JButton>
      </Stack>
    </MotionWrapper>
  );
};
export default Page;
