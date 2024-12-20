'use client';
import { JDialog } from '@/components/JDialog';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';
import { MypageRowButton } from './components/MypageRowButton';
import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { AppBar } from '@/components/AppBar';
import { useState } from 'react';
import { logout } from '@/app/auth';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [isShowLogout, setIsShowLogout] = useState(false);

  const handleCancelLogout = () => {
    setIsShowLogout(false);
  };
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
          <JButton
            sx={{
              width: 'auto',
              paddingX: 1.5,
              paddingY: 0.5,
              borderRadius: 4,
            }}
            onClick={() => ''}
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
          <Row
            sx={{
              backgroundColor: COLORS.gray100,
              p: 1,
              borderRadius: 4,
              gap: 1,
            }}
          >
            <JButton
              onClick={() => router.push('/model/favorite/artist')}
              sx={{ flexDirection: 'column', p: 1, borderRadius: 8 }}
            >
              <Stack justifyContent={'center'} height={24}>
                <JIcon icon="user-plus" color={COLORS.primary} />
              </Stack>
              <Typography fontSize={12}>관심 아티스트</Typography>
            </JButton>
            <JButton
              onClick={() => router.push('/model/favorite/makeup')}
              sx={{ flexDirection: 'column', p: 1, borderRadius: 8 }}
            >
              <Stack justifyContent={'center'} height={24}>
                <JIcon icon="heart-outline" color={COLORS.primary} />
              </Stack>
              <Typography fontSize={12}>관심 메이크업</Typography>
            </JButton>
            <JButton
              onClick={() => router.push('/review')}
              sx={{ flexDirection: 'column', p: 1, borderRadius: 8 }}
            >
              <Stack justifyContent={'center'} height={24}>
                <JIcon icon="message" color={COLORS.primary} />
              </Stack>
              <Typography fontSize={12}>나의 리뷰</Typography>
            </JButton>
          </Row>
        </Stack>
        <Stack px={2}>
          <MypageRowButton label="프로필 수정" onClick={() => ''} />
          <MypageRowButton label="개인정보 처리방침" onClick={() => ''} />
          <MypageRowButton label="서비스 이용약관" onClick={() => ''} />
          <MypageRowButton label="문의하기" onClick={() => ''} />
          <MypageRowButton
            label="로그아웃"
            onClick={() => setIsShowLogout(true)}
          />
          <MypageRowButton label="탈퇴하기" onClick={() => ''} />
          <Row
            sx={{ justifyContent: 'space-between', paddingY: 1.5, paddingX: 1 }}
          >
            <Typography fontSize={12} color={COLORS.gray300}>
              앱 버전
            </Typography>
            <Typography fontSize={12} color={COLORS.gray300}>
              v1.0.0
            </Typography>
          </Row>
        </Stack>
      </Stack>
      <JDialog
        isOpen={isShowLogout}
        onClose={handleCancelLogout}
        title="로그아웃"
        description="정말 로그아웃 하시겠습니까?"
        onOkay={handleCancelLogout}
        labelOkay="아니오"
        onNo={() => {
          logout();
          // navigate('/enter');
        }}
        labelNo="네"
      />
    </MotionWrapper>
  );
};
export default Page;
