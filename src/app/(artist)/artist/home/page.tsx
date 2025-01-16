'use client';
// import { ReservationItem } from '@/app/(model)/model/reservation/components/ReservationItem';
import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { JImage } from '@/components/JImage';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import { SquareImage } from '@/components/SquareImage';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';
// import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  return (
    <MotionWrapper>
      <Stack px={2} height={'100%'}>
        <Row justifyContent={'space-between'} paddingX={2}>
          <JImage image='logo-sm' />
          <JButton
            sx={{ borderRadius: 6, width: 40, height: 40 }}
            onClick={() => router.push('/notification')}
          >
            <JIcon icon='notice' />
          </JButton>
        </Row>
        <Row gap={2} mt={'20px'}>
          <JButton
            sx={{
              width: 75,
              height: 75,
              borderRadius: '50%',
              background: COLORS.primary,
            }}
            onClick={() => router.push('/artist/profile')}
          >
            <SquareImage url={''} />
          </JButton>
          <Typography fontWeight={600} fontSize={20}>
            안녕하세요,
            <br />
            치즈가 많이 좋아 님<br />
            {/* 오늘 예약 N건이 있어요. */}
          </Typography>
        </Row>
        <Stack flex={1} gap={2} justifyContent={'center'}>
          <Typography fontSize={20} fontWeight={600} textAlign={'center'}>
            아직 프로필이 완성되지 않았어요!
          </Typography>
          <Typography fontSize={18} fontWeight={400} textAlign={'center'}>
            프로필을 완성하고 모델과의
            <br />
            예약을 잡아보세요!
          </Typography>
          <JButton
            sx={{
              maxWidth: '194px',
              height: '49px',
              margin: '0 auto',
              marginTop: '20px',
              background: '#222',
              color: COLORS.white,
              borderRadius: '10px',
              fontSize: '14px',
            }}
            onClick={() => router.push('/artist/profile/setup')}
          >
            프로필 완성하러 가기
          </JButton>
        </Stack>
        {/* <Stack px={2} py={2}>
          <Row justifyContent={'end'}>
            <Link href={'/model/reservation'}>
              <Row sx={{ gap: 0.7, width: 'auto', px: 1, borderRadius: 8 }}>
                <Typography fontSize={14}>전체 예약 보기</Typography>
                <JIcon icon='rightArrow' />
              </Row>
            </Link>
          </Row>
        </Stack>
        <Stack>
          <Stack gap={2}>
            <ReservationItem
              makeup={'메이크업명'}
              date={'2024. 02. 22 목'}
              time={'13:00'}
              location={'장소'}
              artistName={'아티스트 명'}
              price={'10,000'}
              onClick={() => router.push(`reservation/${0}`)}
              type='today'
            />
          </Stack>
        </Stack>
        <Stack mt={4}>
          <Typography fontWeight={600} fontSize={20} mb={1}>
            모델과의 예약을 확정해주세요!
          </Typography>
          <ReservationItem
            makeup={'메이크업명'}
            date={'2024. 02. 22 목'}
            time={'13:00'}
            location={'장소'}
            artistName={'아티스트 명'}
            price={'10,000'}
            onClick={() => router.push(`/reservation/${0}`)}
            type='wait'
          />
        </Stack> */}
      </Stack>
    </MotionWrapper>
  );
};
export default Page;
