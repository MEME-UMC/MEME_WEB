import { Button, Stack, Typography } from '@mui/material';
import { TimerTextField } from '../../../../components/TimerTextField';
import { useState } from 'react';

type Props = {
  onNext: () => void;
};

export const Step2 = ({ onNext }: Props) => {
  const [value, setValue] = useState('');
  const [isTimeout, setIsTimeout] = useState(false);

  const isCorrect = value.length === 5 && !isTimeout;
  return (
    <Stack flex={1}>
      <Stack flex={1} px={2}>
        <Typography fontWeight={600} fontSize={18} pt={6} pb={4}>
          이메일로 발송된
          <br />
          인증코드를 입력해주세요
        </Typography>
        <TimerTextField
          value={value}
          onChange={setValue}
          isTimerActive
          onTimerEnd={() => setIsTimeout(true)}
          isCorrect={isCorrect}
        />
      </Stack>
      <Stack padding={2}>
        <Button variant="contained" onClick={onNext} disabled={!isCorrect}>
          다음
        </Button>
      </Stack>
    </Stack>
  );
};
