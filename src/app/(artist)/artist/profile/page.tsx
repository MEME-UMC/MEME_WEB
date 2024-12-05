'use client';
import { LikeButton } from '@/app/(model)/makeup/[id]/components/LikeButton';
import { AppBar } from '@/components/AppBar';
import { CardFrame } from '@/components/CardFrame';
import { JIcon } from '@/components/JIcon';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';

const page = () => {
  return (
    <MotionWrapper>
      <AppBar title="프로필" backIcon />
      <Stack>
        <Row gap={3} mt={'20px'}>
          <Stack
            position={'relative'}
            width={87}
            height={87}
            borderRadius={'50%'}
            boxShadow={'inset -5px -5px 20px 0px #D3D3D3'}
          >
            <Stack position={'absolute'} top={27} left={34}>
              <JIcon icon="userIcon" />
            </Stack>
          </Stack>
          <Stack px={3}>
            <Row gap={2}>
              <Typography fontSize={18} fontWeight={600}>
                아티스트 차차
              </Typography>
              <Typography
                width={19}
                border={1}
                borderColor={COLORS.primary}
                borderRadius={'50%'}
                fontSize={10}
                fontWeight={400}
                textAlign={'center'}
                lineHeight={'19px'}
              >
                여
              </Typography>
              <LikeButton
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
                isScaled={false}
              />
            </Row>
            <Typography fontSize={16} fontWeight={400}>
              제가 다니는 샵에서 진행해요
            </Typography>
            <Typography fontSize={14} fontWeight={300} color={COLORS.gray500}>
              @memeisme@naver.com
            </Typography>
            <Row justifyContent={'flex-start'} gap={1}>
              <JIcon icon="at-sign" />
              <JIcon icon="insta" />
            </Row>
          </Stack>
        </Row>
        <Stack gap={1} px={3} mt={3}>
          <Typography fontWeight={600}>소개</Typography>
          <Typography fontWeight={400}>
            안녕하세요 차차입니다 반갑습니다 메이크업 잘해요 다들 저에게
            와주세요 ㅠㅠ
          </Typography>
        </Stack>
        <Stack gap={1} mt={5} px={3}>
          <Row justifyContent={'space-between'}>
            <Typography fontWeight={600}>총 경력 기간</Typography>
            <Typography>4년</Typography>
          </Row>
          <Row justifyContent={'space-between'}>
            <Typography fontWeight={600}>활동 가능 지역</Typography>
            <Row gap={'2px'}>
              <Typography
                width={19}
                lineHeight={'19px'}
                borderRadius={'50%'}
                fontSize={10}
                textAlign={'center'}
                color={COLORS.white}
                sx={{ background: COLORS.primary }}
              >
                샵
              </Typography>
              <Typography>서울 강남구</Typography>
            </Row>
          </Row>
          <Row justifyContent={'flex-end'} gap={'2px'}>
            <Typography
              px={'4px'}
              borderRadius={'24px'}
              lineHeight={'19px'}
              fontSize={10}
              textAlign={'center'}
              color={COLORS.white}
              sx={{ background: COLORS.primary }}
            >
              방문
            </Typography>
            <Typography>서울 강남구</Typography>
          </Row>
        </Stack>

        <Stack gap={1} mt={2} px={3}>
          <Typography fontWeight={600}>전문 분야</Typography>
          <Row
            justifyContent={'flex-start'}
            gap={2}
            sx={{ overflowX: 'scroll' }}
          >
            <Typography
              px={2}
              minWidth={'65px'}
              lineHeight={'27px'}
              border={`1px solid ${COLORS.primary}`}
              borderRadius={'20px'}
              textAlign={'center'}
              fontSize={10}
              fontWeight={400}
            >
              데일리 메이크업
            </Typography>
            <Typography
              px={2}
              minWidth={'65px'}
              lineHeight={'27px'}
              border={`1px solid ${COLORS.primary}`}
              borderRadius={'20px'}
              textAlign={'center'}
              fontSize={10}
              fontWeight={400}
            >
              데일리 메이크업
            </Typography>
            <Typography
              px={2}
              minWidth={'65px'}
              lineHeight={'27px'}
              border={`1px solid ${COLORS.primary}`}
              borderRadius={'20px'}
              textAlign={'center'}
              fontSize={10}
              fontWeight={400}
            >
              데일리 메이크업
            </Typography>
          </Row>
        </Stack>
        <Stack gap={1} mt={2}>
          <Typography fontWeight={600} px={3}>
            포트폴리오
          </Typography>
          <Row
            justifyContent={'flex-start'}
            sx={{ overflowX: 'auto' }}
            gap={2}
            px={3}
            pb={2}
          >
            <CardFrame
              url={''}
              imageUrl={
                'https://github.com/MEME-UMC/MEME_WEB/blob/main/src/assets/sample-makeup.png?raw=true'
              }
              title={'감성 웨딩 메이크업'}
              subTitle={'웨딩 메이크업'}
              rating={'4.8'}
              information={'아티스트 김제니 / 150,000'}
              type={'makeup'}
            ></CardFrame>
          </Row>
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};

export default page;
