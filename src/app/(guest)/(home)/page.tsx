'use client';
import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { JImage } from '@/components/JImage';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';
import { PortfolioCard } from './PortfolioCard';
import Link from 'next/link';
import { MotionWrapper } from '@/components/MotionWrapper';
import { useRouter } from 'next/navigation';

const booking = {
  name: '메이크업명',
  at: new Date(2024, 4, 8, 13),
  artist: '김제니',
  location: '서울시 종로구',
  price: 100000,
};

const ModelHomePage = () => {
  const router = useRouter();
  return (
    <MotionWrapper>
      <Stack pt={1} overflow={'scroll'}>
        <Row justifyContent={'space-between'} paddingX={2}>
          <JImage image="logo-sm" />
          <JButton
            sx={{ borderRadius: 6, width: 40, height: 40 }}
            onClick={() => router.push('/notification')}
          >
            <JIcon icon="notice" />
          </JButton>
        </Row>
        <Row paddingX={2} py={2}>
          <JButton
            sx={{
              border: 2,
              borderColor: COLORS.primary,
              borderRadius: 6,
            }}
            onClick={() => router.push('/search/makeup')}
          >
            <Row justifyContent={'space-between'} flex={1} px={2} py={1}>
              <Typography color={COLORS.gray300}>
                원하는 메이크업을 검색해보세요!
              </Typography>
              <JIcon icon="search" />
            </Row>
          </JButton>
        </Row>
        <Stack px={2}>
          <Typography fontSize={18} fontWeight={600}>
            OOO 님, 환영합니다!
          </Typography>
          {booking && (
            <Typography fontSize={18} fontWeight={600}>
              아티스트와의 약속 놓치지 마세요!
            </Typography>
          )}
        </Stack>
        <Stack px={2} py={2}>
          <Row justifyContent={'end'}>
            <Link href={'/model/reservation'}>
              <Row sx={{ gap: 0.7, width: 'auto', px: 1, borderRadius: 8 }}>
                <Typography fontSize={14}>전체 예약 보기</Typography>
                <JIcon icon="rightArrow" />
              </Row>
            </Link>
          </Row>
        </Stack>
        <Stack py={1}>
          <Stack px={2}>
            <Typography fontSize={16} fontWeight={600}>
              어떤 메이크업을 선택할 지 모르겠을 때
            </Typography>
            <Typography fontSize={12}>
              후기가 많은 포트폴리오를 알아봐요
            </Typography>
          </Stack>
          <Row
            gap={2}
            p={2}
            sx={{ overflowX: 'scroll' }}
            justifyContent={'start'}
          >
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </Row>
        </Stack>
        <Stack py={1}>
          <Stack px={2}>
            <Typography fontSize={16} fontWeight={600}>
              새로운 메이크업을 찾아보고 싶을 때
            </Typography>
            <Typography fontSize={12}>
              가장 최근에 올라온 포트폴리오를 알아봐요
            </Typography>
          </Stack>
          <Row
            gap={2}
            p={2}
            sx={{ overflowX: 'scroll' }}
            justifyContent={'start'}
          >
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </Row>
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};

export default ModelHomePage;
