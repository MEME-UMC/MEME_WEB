import { Stack, Typography } from '@mui/material';
import { JButton } from '../../../components/JButton';
import { Row } from '../../../components/Row';
import rightArrow from '/src/assets/right-arrow.png';
import { AppBar } from '../../../components/AppBar';
import { COLORS } from '../../../core/colors';
import { JIcon } from '../../../components/JIcon';
import { MotionWrapper } from '../../../components/MotionWrapper';

export const MypagePage = () => {
  return (
    <MotionWrapper>
      <Stack>
        <AppBar title="마이페이지" />
        <Stack alignItems={'center'} gap={1} py={1}>
          <JIcon height={80} icon="profile" />
          <JButton
            sx={{
              width: 'auto',
              paddingX: 1.5,
              paddingY: 0.5,
              borderRadius: 4,
            }}
          >
            <Row alignItems={'center'} justifyContent={'center'} gap={1}>
              <Typography fontSize={16} fontWeight={600}>
                차차
              </Typography>
              <img src={rightArrow} width={8} />
            </Row>
          </JButton>
        </Stack>
        <Stack px={2} py={1}>
          <Row
            sx={{
              backgroundColor: COLORS.gray100,
              p: 1,
              borderRadius: 4,
              gap: 1,
            }}
          >
            <JButton sx={{ flexDirection: 'column', p: 1, borderRadius: 8 }}>
              <JIcon height={26} icon="user-plus" color={COLORS.primary} />
              <Typography fontSize={12}>관심 아티스트</Typography>
            </JButton>
            <JButton sx={{ flexDirection: 'column', p: 1, borderRadius: 8 }}>
              <JIcon height={26} icon="heart-outline" color={COLORS.primary} />
              <Typography fontSize={12}>관심 메이크업</Typography>
            </JButton>
            <JButton sx={{ flexDirection: 'column', p: 1, borderRadius: 8 }}>
              <JIcon height={26} icon="message" color={COLORS.primary} />
              <Typography fontSize={12}>나의 리뷰</Typography>
            </JButton>
          </Row>
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};
