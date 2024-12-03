'use client';
import { AppBar } from '@/components/AppBar';
import { JIcon } from '@/components/JIcon';
import { JTextField } from '@/components/JTextField';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Button, Grid2, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { ShadowButton } from './components/ShadowButton';

const skinType = [
  {
    label: '건성',
    value: 'dry',
  },
  {
    label: '중성',
    value: 'normal',
  },
  {
    label: '지성',
    value: 'oily',
  },
  {
    label: '복합성',
    value: 'combination',
  },
  {
    label: '모르겠음',
    value: 'unknown',
  },
];

const personalColor = [
  {
    label: '봄웜톤',
    value: 'springWarm',
  },
  {
    label: '여름쿨톤',
    value: 'summerCool',
  },
  {
    label: '가을웜톤',
    value: 'autumnWarm',
  },
  {
    label: '겨울쿨톤',
    value: 'winterCool',
  },
  {
    label: '모르겠음',
    value: 'unknown',
  },
];

const Page = () => {
  const [info, setInfo] = useState({
    gender: 'woman',
    skinType: 'unknown',
    personalColor: 'unknown',
  });

  return (
    <MotionWrapper>
      <Stack>
        <AppBar title="프로필 수정" backIcon />
        <Stack alignItems={'center'} gap={1} py={1}>
          <Row
            position={'relative'}
            width={100}
            height={95}
            alignItems={'center'}
          >
            <Row
              width={95}
              height={95}
              borderRadius={95}
              bgcolor={COLORS.primary}
            >
              <JIcon
                icon="profile"
                color={COLORS.white}
                width={28}
                height={28}
              />
            </Row>
            <Row
              right={0}
              bottom={0}
              position={'absolute'}
              width={28}
              height={28}
              borderRadius={28}
              bgcolor={COLORS.p_black}
            >
              <JIcon icon="pencil" color={COLORS.white} />
            </Row>
          </Row>
        </Stack>
        <Stack px={2} py={1}>
          <Typography pt={2}>닉네임</Typography>
          <JTextField placeholder="닉네임을 입력해주세요" />
          <Typography pt={2}>전화번호</Typography>
          <JTextField placeholder="전화번호를 입력해주세요" />
          <Typography pt={2}>성별</Typography>
          <Row gap={1} pb={1}>
            <ShadowButton
              isActive={info.gender === 'woman'}
              onClick={() => {
                setInfo({ ...info, gender: 'woman' });
              }}
            >
              <Typography fontSize={14}>여성</Typography>
            </ShadowButton>
            <ShadowButton
              isActive={info.gender === 'man'}
              onClick={() => {
                setInfo({ ...info, gender: 'man' });
              }}
            >
              <Typography fontSize={14}>남성</Typography>
            </ShadowButton>
          </Row>
          <Typography pt={2} pb={1}>
            피부 타입을 알려주세요.
          </Typography>
          <Grid2 gap={1} container spacing={1}>
            {skinType.map((e) => (
              <Grid2 key={e.value} size={6}>
                <ShadowButton
                  isActive={info.skinType === e.value}
                  onClick={() => {
                    setInfo({ ...info, skinType: e.value });
                  }}
                >
                  <Typography fontSize={14}>{e.label}</Typography>
                </ShadowButton>
              </Grid2>
            ))}
          </Grid2>
          <Typography pt={2} pb={1}>
            퍼스널 컬러를 알려주세요.
          </Typography>
          <Grid2 gap={1} container spacing={1}>
            {personalColor.map((e) => {
              return (
                <Grid2 key={e.value} size={6}>
                  <ShadowButton
                    isActive={info.personalColor === e.value}
                    onClick={() => {
                      setInfo({ ...info, personalColor: e.value });
                    }}
                  >
                    <Typography fontSize={14}>{e.label}</Typography>
                  </ShadowButton>
                </Grid2>
              );
            })}
          </Grid2>
          <Stack pt={6} pb={4}>
            <Button variant="contained">수정하기</Button>
          </Stack>
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};
export default Page;
