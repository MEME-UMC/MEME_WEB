import { Box, Stack, Typography } from '@mui/material';
import { JButton } from '../../../components/JButton';
import { Row } from '../../../components/Row';
import { AppBar } from '../../../components/AppBar';
import { COLORS } from '../../../core/colors';
import { JIcon } from '../../../components/JIcon';
import { MotionWrapper } from '../../../components/MotionWrapper';
import { useJNavigate } from '../../../core/routes';
import { MyinfoRow } from './components/MyinfoRow';

export const MyinfoPage = () => {
  const navigate = useJNavigate();
  return (
    <MotionWrapper>
      <Stack>
        <AppBar title="내 정보 조회" backIcon />
        <Stack alignItems={'center'} gap={1} py={4}>
          <Row
            width={95}
            height={95}
            borderRadius={95}
            bgcolor={COLORS.primary}
          >
            <JIcon icon="profile" color={COLORS.white} width={28} height={28} />
          </Row>
          <JButton
            sx={{
              width: 'auto',
              paddingX: 1.5,
              paddingY: 0.5,
              borderRadius: 4,
            }}
            onClick={() => navigate('/myinfo')}
          >
            <Row alignItems={'center'} justifyContent={'center'} gap={1}>
              <Typography fontSize={16} fontWeight={600}>
                차차
              </Typography>

              <JIcon icon="rightArrow" />
            </Row>
          </JButton>
        </Stack>
        <Stack px={2} py={1}>
          <MyinfoRow title="닉네임" value="차차" />
          <MyinfoRow title="이름" value="김나령" />
          <MyinfoRow title="성별" value="여성" />
          <MyinfoRow title="이메일" value="meme@naver.com" />
          <Box
            sx={{
              height: '1px',
              width: 1,
              bgcolor: COLORS.gray400,
            }}
          />
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};
