import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { JButton } from '../../../components/JButton';
import { Row } from '../../../components/Row';
import rightArrow from '../../../assets/right-arrow.png';
import { BookingCard } from './components/BookingCard';
import { PortfolioCard } from './components/PortfolioCard';
import { MotionWrapper } from '../../../components/MotionWrapper';

export const HomePage = () => {
  const [booking] = useState({
    name: '메이크업명',
    at: new Date(2024, 4, 8, 13),
    artist: '김제니',
    location: '서울시 종로구',
    price: 100000,
  });

  return (
    <MotionWrapper>
      <Stack pt={1}>
        <Header />
        <SearchBar />
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
            <JButton sx={{ gap: 0.7, width: 'auto', px: 1, borderRadius: 8 }}>
              <Typography fontSize={14}>전체 예약 보기</Typography>
              <img src={rightArrow} width={8} />
            </JButton>
          </Row>
          <BookingCard booking={booking} />
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
