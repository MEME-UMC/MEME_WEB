'use client';
import { AppBar } from '@/components/AppBar';
import { CardFrame } from '@/components/CardFrame';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import { Stack, Typography } from '@mui/material';
// import { Nodata } from './components/Nodata';

const Page = () => {
  return (
    <MotionWrapper>
      <AppBar title="관심 메이크업" backIcon />
      {/* <Nodata /> */}
      <Typography mt={'20px'} mb={3} px={3} fontWeight={400}>
        총 4개
      </Typography>
      <Stack px={2}>
        <Row
          width={'100%'}
          sx={{
            maxWidth: { xs: '298px', sm: '455px', md: '689px', lg: '689px' },
          }}
          margin={'0 auto'}
          boxSizing={'border-box'}
        >
          <Row gap={2} flexWrap={'wrap'} justifyContent={'flex-start'}>
            <CardFrame
              url={'/makeup/0'}
              imageUrl={''}
              title={'김제니'}
              subTitle={'서울시 종로구'}
              rating={'4.8'}
              information={'아티스트 김제니 / ₩150,000 '}
              type={'makeup'}
            />
            <CardFrame
              url={'/makeup/0'}
              imageUrl={''}
              title={'김제니'}
              subTitle={'서울시 종로구'}
              rating={'4.8'}
              information={'아티스트 김제니 / ₩150,000 '}
              type={'makeup'}
            />
            <CardFrame
              url={'/makeup/0'}
              imageUrl={''}
              title={'김제니'}
              subTitle={'서울시 종로구'}
              rating={'4.8'}
              information={'아티스트 김제니 / ₩150,000 '}
              type={'makeup'}
            />
            <CardFrame
              url={'/makeup/0'}
              imageUrl={''}
              title={'김제니'}
              subTitle={'서울시 종로구'}
              rating={'4.8'}
              information={'아티스트 김제니 / ₩150,000 '}
              type={'makeup'}
            />
            <CardFrame
              url={'/makeup/0'}
              imageUrl={''}
              title={'김제니'}
              subTitle={'서울시 종로구'}
              rating={'4.8'}
              information={'아티스트 김제니 / ₩150,000 '}
              type={'makeup'}
            />
          </Row>
        </Row>
      </Stack>
    </MotionWrapper>
  );
};
export default Page;
