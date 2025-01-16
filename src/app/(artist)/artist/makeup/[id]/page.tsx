'use client';
import { LikeButton } from '@/app/(model)/makeup/[id]/components/LikeButton';
import { ReservationViewInfo } from '@/app/(model)/makeup/[id]/components/ReservationViewInfo';
import { ReservationViewReview } from '@/app/(model)/makeup/[id]/components/ReservationViewReview';
import { TabItem, Tabs } from '@/app/(model)/makeup/[id]/components/Tabs';
import { AppBar } from '@/components/AppBar';
import Counter from '@/components/Counter';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import { SquareImage } from '@/components/SquareImage';
import { COLORS } from '@/styles/colors';
import { Link, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const Page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isScaled, setIsScaled] = useState(false);

  const tabs = [
    {
      label: '정보',
      content: (
        <ReservationViewInfo content='안녕하세요, 김차차입니다. 첫 세팅 기준 10만원이고, 컨셉 변경될 경우 금액이 추가됩니다. 감사합니다. insta@kimchacha' />
      ),
    },
    {
      label: (
        <Row>
          <Typography fontSize={14} fontWeight={600}>
            리뷰
          </Typography>
          <Counter targetNumber={'3'} fontSize={14} />
        </Row>
      ),
      content: <ReservationViewReview />,
    },
  ];

  return (
    <MotionWrapper>
      <AppBar title={'예약하기'} backIcon />
      <Stack>
        <SquareImage url='https://s3-alpha-sig.figma.com/img/2c54/dce4/40f0f12cf28c01cbb8d2b2759118efac?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p3Tvx-CENYtVMmP~QTJzztu1qD4XGvZmQ~-fyH1xoM0XQpN-Zl9EVfBHR8AQszhK47YOqD9SyNL7JcrsCURFLqjeGwNbgjeUrD2o52OQOCc3BpuqBDiebU2xUdbvpkdz7SSd9rJBj9kPUxqrfDvf0SLvW23uHcikZvLoMnosL~8faWfHtFtY46Gwm3EkBxWuEG5uDA-zTITVooFZmKWbe2xySMnjXwZvHhFKrvoA3bKS12ulW73KrVgyQA2HLt3rx6tj8UmYpfrHZ-RKqyMeom7qnmeGd2LJCP5lD0PSHbGeF1Yq3sJZCWAbF7xaUTYJALhSziuZg~3~rsZUknS~EA__' />
        <Stack
          position={'relative'}
          zIndex={999}
          top={'-60px'}
          sx={{
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            background: '#FFF',
            paddingTop: '30px',
          }}
        >
          <Stack
            padding={'0 14px'}
            sx={{ boxShadow: '0px 2px 4px 0px #0000001A' }}
          >
            <Stack padding={'0 31px'}>
              <Row justifyContent={'space-between'}>
                <Row gap={2}>
                  <Link href={'/artist/profile'}>
                    <Stack
                      sx={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: `${COLORS.primary}`,
                        overflow: 'hidden',
                      }}
                    >
                      <SquareImage
                        url={
                          'https://github.com/MEME-UMC/MEME_WEB/blob/main/src/assets/sample-makeup.png?raw=true'
                        }
                      />
                    </Stack>
                  </Link>

                  <Typography fontSize={'18px'} fontWeight={600}>
                    김차차
                  </Typography>
                </Row>
                <LikeButton
                  onClick={() => setIsScaled((prev) => !prev)}
                  isScaled={isScaled}
                />
              </Row>

              <Stack gap={1} padding={'20px 0'}>
                <Row justifyContent={'flex-start'} gap={3}>
                  <Typography fontSize={16} fontWeight={600}>
                    촬영 메이크업
                  </Typography>
                  <Typography fontSize={12}>
                    프로필사진 촬영에 좋아요
                  </Typography>
                </Row>
                <Counter
                  targetNumber={'100,000'}
                  fontSize={18}
                  fontWeight={600}
                />
              </Stack>
            </Stack>
            <Stack
              gap={2}
              padding={'20px 31px'}
              borderTop={`1px solid ${COLORS.gray300}`}
              borderBottom={`1px solid ${COLORS.gray300}`}
            >
              <Row justifyContent={'space-between'}>
                <Typography fontSize={14} fontWeight={600}>
                  샵 재직 여부
                </Typography>
                <Typography fontSize={14}>🙅🏻프리랜서에요</Typography>
              </Row>
              <Row justifyContent={'space-between'}>
                <Typography fontSize={14} fontWeight={600}>
                  카테고리
                </Typography>
                <Typography fontSize={14}>면접메이크업</Typography>
              </Row>
            </Stack>
            <Stack padding={'0 11px'}>
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
                {tabs.map((tab, index) => (
                  <TabItem key={index} onClick={() => setActiveTab(index)}>
                    {tab.label}
                  </TabItem>
                ))}
              </Tabs>
              {tabs[activeTab].content}
            </Stack>
          </Stack>
        </Stack>
        <Stack padding={'24px 21px'}>
          <Link href={'/book/0'}>
            <Typography
              lineHeight={'49px'}
              color='#FFF'
              fontSize={14}
              sx={{
                textAlign: 'center',
                background: `${COLORS.p_black}`,
                borderRadius: '10px',
              }}
            >
              수정하기
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};
export default Page;
