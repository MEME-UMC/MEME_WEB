import { COLORS } from '@/styles/colors';
import {
  Button,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

type Props = {
  onNext: () => void;
  step: number;
};
export const Step2 = ({ onNext, step }: Props) => {
  const [time, setTime] = useState(180);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    if (step === 2) {
      setIsTimerActive(true);
    } else {
      setIsTimerActive(false);
      setTime(180);
    }
  }, [step]);

  useEffect(() => {
    let timer: NodeJS.Timeout | number = 0;
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
  const formattedTime = format(new Date(time * 1000), 'm:ss');

  return (
    <Stack flex={1}>
      <Stack flex={1} px={2}>
        <Typography fontWeight={600} fontSize={18} pt={6} pb={4}>
          이메일로 발송된
          <br />
          인증코드를 입력해주세요
        </Typography>
        <OutlinedInput
          id="outlined-adornment-weight"
          placeholder="인증코드를 입력해주세요"
          sx={{
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
        <Typography fontSize={12} color={COLORS.etc_blue} pl={1} pt={0.5}>
          인증코드 일치
        </Typography>
      </Stack>
      <Stack padding={2}>
        <Button variant="contained" onClick={onNext}>
          다음
        </Button>
      </Stack>
    </Stack>
  );
};
