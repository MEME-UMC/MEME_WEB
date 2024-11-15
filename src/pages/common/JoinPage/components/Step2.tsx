import {
  Stack,
  Typography,
  Button,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { Row } from '../../../../components/Row';
import { COLORS } from '../../../../core/colors';
import { JoinTextField } from './JoinTextField';
import { AppBar } from '../../../../components/AppBar';

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export const Step2 = ({ onPrev, onNext }: Props) => {
  const [time, setTime] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let timer = 0;
    if (isTimerActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(timer);
      setIsTimerActive(false);
    }
    return () => clearInterval(timer);
  }, [isTimerActive, time]);

  const handleRequestCode = () => {
    setTime(180);
    setIsTimerActive(true);
  };

  const formattedTime = format(new Date(time * 1000), 'm:ss');
  return (
    <>
      <AppBar backIcon title="회원가입" onBack={onPrev} />
      <Stack flex={1} justifyContent={'space-between'}>
        <Stack px={2} pt={2}>
          <Typography>이메일</Typography>
          <Row gap={1}>
            <JoinTextField placeholder="이메일을 입력해주세요" />
            <Button
              variant="contained"
              onClick={handleRequestCode}
              sx={{ borderRadius: 4, fontSize: 12, height: 1 }}
            >
              인증코드 요청
            </Button>
          </Row>
          <Typography pt={2}>인증코드 입력</Typography>
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder="인증코드를 입력해주세요"
            sx={{
              flex: 1,
              borderRadius: 4,
            }}
            endAdornment={
              <InputAdornment
                position="end"
                sx={{
                  '& .MuiTypography-root': {
                    color: COLORS.red_etc,
                  },
                }}
              >
                {formattedTime}
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <Typography fontSize={12} color={COLORS.gray500} pl={1} pt={0.5}>
            인증코드 일치
          </Typography>
          <Typography pt={2}>비밀번호</Typography>
          <JoinTextField placeholder="비밀번호를 입력해주세요" />
          <JoinTextField
            placeholder="비밀번호를 한 번 더 입력해주세요"
            pt={1}
          />
          <Typography fontSize={12} color={COLORS.gray500} pl={1} pt={0.5}>
            영문, 숫자, 특수기호 조합 8~20자
          </Typography>
        </Stack>
        <Stack padding={2}>
          <Button variant="contained" onClick={onNext}>
            다음
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
