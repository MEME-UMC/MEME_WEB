import { Stack, Typography } from '@mui/material';
import { JButton } from '../../../components/JButton';
import { Row } from '../../../components/Row';
import { AppBar } from '../../../components/AppBar';
import ProfileIcon from '/src/assets/profile.svg';
import rightArrow from '/src/assets/right-arrow.png';
import UserPlus from '/src/assets/user-plus.svg';
import HeartOutline from '/src/assets/heart-outline.svg';
import Message from '/src/assets/message.svg';
import { COLORS } from '../../../core/colors';

export const MypagePage = () => {
  return (
    <Stack>
      <AppBar title="마이페이지" />
      <Stack alignItems={'center'} gap={1} py={1}>
        <Stack height={80} justifyContent={'center'}>
          <ProfileIcon />
        </Stack>
        <JButton
          sx={{ width: 'auto', paddingX: 1.5, paddingY: 0.5, borderRadius: 4 }}
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
            <Stack height={26} justifyContent={'center'}>
              <UserPlus color={COLORS.primary} />
            </Stack>
            <Typography fontSize={12}>관심 아티스트</Typography>
          </JButton>
          <JButton sx={{ flexDirection: 'column', p: 1, borderRadius: 8 }}>
            <Stack height={26} justifyContent={'center'}>
              <HeartOutline color={COLORS.primary} />
            </Stack>
            <Typography fontSize={12}>관심 메이크업</Typography>
          </JButton>
          <JButton sx={{ flexDirection: 'column', p: 1, borderRadius: 8 }}>
            <Stack height={26} justifyContent={'center'}>
              <Message />
            </Stack>
            <Typography fontSize={12}>나의 리뷰</Typography>
          </JButton>
        </Row>
      </Stack>
    </Stack>
  );
};
