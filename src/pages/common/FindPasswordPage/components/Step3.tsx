import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { JTextField } from '../../../../components/JTextField';

type Props = {
  onNext: () => void;
};

export const Step3 = ({ onNext }: Props) => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const isCorrect = password === rePassword && password.length > 0;
  return (
    <Stack flex={1}>
      <Stack flex={1} px={2} gap={1}>
        <Typography fontWeight={600} fontSize={18} pt={6} pb={3}>
          메메에서 새로 사용할
          <br />
          비밀번호를 입력해주세요
        </Typography>
        <JTextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
        />
        <JTextField
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          placeholder="비밀번호를 한 번 더 입력해주세요"
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
