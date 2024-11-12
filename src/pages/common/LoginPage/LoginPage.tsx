import { Box, Button, Stack, Typography } from '@mui/material';
import { JTextField } from '../../../components/JTextField';
import { JButton } from '../../../components/JButton';
import { COLORS } from '../../../core/colors';
import logo from '../../../assets/logo-sm.png';
import { JImage } from '../../../components/JImage';
import { AppBar } from '../../../components/AppBar';
import { Row } from '../../../components/Row';
import { JIcon } from '../../../components/JIcon';
import { MotionWrapper } from '../../../components/MotionWrapper';
import { useJNavigate } from '../../../core/routes';

export const LoginPage = () => {
  const navigate = useJNavigate();

  return (
    <MotionWrapper>
      <AppBar backIcon />
      <Stack px={2} alignItems={'center'}>
        <Stack maxWidth={'375px'} width={'100%'}>
          <Stack alignItems={'center'} py={6}>
            <JImage src={logo} width={68} height={43} />
          </Stack>
          <Stack gap={1}>
            <JTextField label="이메일" />
            <JTextField label="비밀번호" />
          </Stack>
          <Stack marginTop={2}>
            <Button variant="contained">로그인</Button>
          </Stack>
          <Row paddingY={4}>
            <Box>
              <JButton sx={{ px: 0.5, borderRadius: 4 }}>
                <Typography fontSize={14} color={COLORS.gray400}>
                  비밀번호 찾기
                </Typography>
              </JButton>
            </Box>
            <Box height={17} bgcolor={COLORS.gray400} width={'1px'} mx={0.5} />
            <Box>
              <JButton sx={{ px: 0.5, borderRadius: 4 }}>
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
                  navigate('/join');
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
    </MotionWrapper>
  );
};
