import { Stack, Typography } from '@mui/material';
import { Row } from '../../../components/Row';
import { AppBar } from '../../../components/AppBar';
import { COLORS } from '../../../core/colors';
import { JIcon } from '../../../components/JIcon';
import { MotionWrapper } from '../../../components/MotionWrapper';
import { ShadowButton } from './components/ShadowButton';
import { useState } from 'react';
import { JTextField } from '../../../components/JTextField';

export const ModelProfileEditPage = () => {
  const [info, setInfo] = useState({
    gender: 'man',
  });
  return (
    <MotionWrapper>
      <Stack>
        <AppBar title="마이페이지" backIcon />
        <Stack alignItems={'center'} gap={1} py={1}>
          <Row
            width={95}
            height={95}
            borderRadius={95}
            bgcolor={COLORS.primary}
          >
            <JIcon icon="profile" color={COLORS.white} width={28} height={28} />
          </Row>
        </Stack>
        <Stack px={2} py={1}>
          <Typography pt={2}>닉네임</Typography>
          <JTextField placeholder="닉네임을 입력해주세요" />
          <Typography pt={2}>전화번호</Typography>
          <JTextField placeholder="전화번호를 입력해주세요" />
          <Typography pt={2}>성별</Typography>
          <Row gap={1}>
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
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};
