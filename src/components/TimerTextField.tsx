import {
  OutlinedInput,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { COLORS } from '@/styles/colors';
import { JIcon } from './JIcon';

type Props = {
  isCorrect: boolean;
  isTimerActive: boolean;
  onTimerEnd: () => void;
  value: string;
  onChange: (value: string) => void;
};

export const TimerTextField = ({
  isCorrect,
  isTimerActive,
  onTimerEnd,
  value,
  onChange,
}: Props) => {
  const [time, setTime] = useState(180);

  useEffect(() => {
    let timer: NodeJS.Timeout | number = 0;
    if (isTimerActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(timer);
      onTimerEnd();
    }
    return () => clearInterval(timer);
  }, [isTimerActive, time, onTimerEnd]);

  const formattedTime = format(new Date(time * 1000), 'm:ss');
  return (
    <Stack>
      <OutlinedInput
        id="outlined-adornment-weight"
        placeholder="인증코드를 입력해주세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
      <Typography
        fontSize={12}
        color={isCorrect ? COLORS.etc_blue : COLORS.gray400}
        pl={1}
        pt={0.5}
      >
        인증코드 일치 <JIcon icon="checked" />
      </Typography>
    </Stack>
  );
};
