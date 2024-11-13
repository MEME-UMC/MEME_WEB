import { Stack, Typography } from '@mui/material';
import { AppBar } from '../../../components/AppBar';
import { MotionWrapper } from '../../../components/MotionWrapper';
import { JButton } from '../../../components/JButton';
import { COLORS } from '../../../core/colors';
import { Row } from '../../../components/Row';
import Counter from '../../../components/Counter';
import { Tabs, TabItem } from './components/Tabs';
import { ReservationViewInfo } from './ReservationViewInfo';
import { ReservationViewReview } from './ReservationViewReview';
import { useState } from 'react';
import { LikeButton } from './components/likeButton';

export const ReserVationViewPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isScaled, setIsScaled] = useState(false);

  const tabs = [
    {
      label: '정보',
      content: (
        <ReservationViewInfo content="안녕하세요, 김차차입니다. 첫 세팅 기준 10만원이고, 컨셉 변경될 경우 금액이 추가됩니다. 감사합니다. insta@kimchacha" />
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
        <Stack width={'100%'} overflow="hidden">
          <Stack sx={{ position: 'relative', paddingBottom: '100%' }}>
            <Stack
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage:
                  'url(https://s3-alpha-sig.figma.com/img/bf5a/e5e0/70f6c8f1705371f9e749966c61f36935?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f4wSkVFOzSNd7F9YytD8gR7P5NexXWRCM1kAyvXDAMSWeuuif9aeM1lfitCUO7SOINrqqRBsQSpr1pK27YGQ6DsUjKBSRlmGMwc9DdDpgSsCZ5OWYwrvt24dBahAV7xg0WKC2EsVj-t7VGEmkeXQMKFLNmReGEIHs-5FIYunqgl6IlrTPUGfrgT6S288VUHYp5u0jORT78bMWmA5R0V7k13w8YInJOPgefCxX-jy2j5AChR~iJBnB0996sU6NNCg0XOBLc11l3XiAnglZA-yVFOj9etGMu3i3s~F2GzdHXj6g2jmd2fjnu7UIzMYDoqnaMQtBT3vLyYwBro5Gk~gZw__)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
              }}
            ></Stack>
          </Stack>
        </Stack>
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
                  <JButton
                    sx={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: `${COLORS.primary}`,
                      overflow: 'hidden',
                    }}
                  >
                    <Stack
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundImage:
                          'url(https://s3-alpha-sig.figma.com/img/bf5a/e5e0/70f6c8f1705371f9e749966c61f36935?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f4wSkVFOzSNd7F9YytD8gR7P5NexXWRCM1kAyvXDAMSWeuuif9aeM1lfitCUO7SOINrqqRBsQSpr1pK27YGQ6DsUjKBSRlmGMwc9DdDpgSsCZ5OWYwrvt24dBahAV7xg0WKC2EsVj-t7VGEmkeXQMKFLNmReGEIHs-5FIYunqgl6IlrTPUGfrgT6S288VUHYp5u0jORT78bMWmA5R0V7k13w8YInJOPgefCxX-jy2j5AChR~iJBnB0996sU6NNCg0XOBLc11l3XiAnglZA-yVFOj9etGMu3i3s~F2GzdHXj6g2jmd2fjnu7UIzMYDoqnaMQtBT3vLyYwBro5Gk~gZw__)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        overflow: 'hidden',
                      }}
                    ></Stack>
                  </JButton>
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
          <Stack padding={'24px 21px'}>
            <JButton
              sx={{ background: `${COLORS.p_black}`, borderRadius: '10px' }}
            >
              <Typography lineHeight={3} color="#FFF" fontSize={14}>
                예약하기
              </Typography>
            </JButton>
          </Stack>
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};
