'use client';
import { useState } from 'react';
import { AppBar } from '@/components/AppBar';
// import { ImageLoadingLayer } from '@/components/ImageLoadingLayer';
import { JImage } from '@/components/JImage';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Box, Button, Stack, Typography } from '@mui/material';
import { LoginTextField } from './components/LoginTextField';
import { login } from '@/app/auth';
import { Row } from '@/components/Row';
import { JButton } from '@/components/JButton';
import { COLORS } from '@/styles/colors';
import { JIcon } from '@/components/JIcon';
import { JDialog } from '@/components/JDialog';

const Page = () => {
  // const navigate = useJNavigate();
  const [isShowSelectUserRole, setIsShowSelectUserRole] = useState(false);

  const loginByArtist = () => {
    login('artist', 'artist');
    // navigate('/artist/home');
  };

  const loginByModel = () => {
    login('model', 'model');
    // navigate('/model/home');
  };
  return (
    // <ImageLoadingLayer>
    <MotionWrapper>
      <AppBar backIcon />
      <Stack px={2} alignItems={'center'}>
        <Stack maxWidth={'375px'} width={'100%'}>
          <Stack alignItems={'center'} py={6}>
            <JImage image="logo-sm" />
          </Stack>
          <Stack gap={1}>
            <LoginTextField label="이메일" />
            <LoginTextField label="비밀번호" />
          </Stack>
          <Stack marginTop={2}>
            <Button
              variant="contained"
              onClick={() => setIsShowSelectUserRole(true)}
            >
              로그인
            </Button>
          </Stack>
          <Row paddingY={4}>
            <Box>
              <JButton
                sx={{ px: 0.5, borderRadius: 4 }}
                // onClick={() => navigate('/find-password')}
              >
                <Typography fontSize={14} color={COLORS.gray400}>
                  비밀번호 찾기
                </Typography>
              </JButton>
            </Box>
            <Box height={17} bgcolor={COLORS.gray400} width={'1px'} mx={0.5} />
            <Box>
              <JButton
                sx={{ px: 0.5, borderRadius: 4 }}
                // onClick={() => navigate('/find-email')}
              >
                <Typography fontSize={14} color={COLORS.gray400}>
                  이메일 찾기
                </Typography>
              </JButton>
            </Box>
            <Box height={17} bgcolor={COLORS.gray400} width={'1px'} mx={0.5} />
            <Box>
              <JButton
                sx={{ px: 0.5, borderRadius: 4 }}
                onClick={() => {
                  // navigate('/join');
                }}
              >
                <Typography fontSize={14} color={COLORS.primary}>
                  회원가입
                </Typography>
              </JButton>
            </Box>
          </Row>
          <Row>
            <Typography fontSize={14}>SNS 계정으로 로그인하기</Typography>
          </Row>
          <Row gap={2} py={3}>
            <JIcon icon="kakaoSm" />
            <JIcon icon="appleSm" />
          </Row>
        </Stack>
      </Stack>
      <JDialog
        isOpen={isShowSelectUserRole}
        onClose={() => {
          setIsShowSelectUserRole(false);
        }}
        title="(임시)역할선택"
        description="로그인 역할을 선택하세요"
        labelOkay="아티스트"
        onOkay={loginByArtist}
        labelNo="모델"
        onNo={loginByModel}
      />
    </MotionWrapper>
    // </ImageLoadingLayer>
  );
};
export default Page;
