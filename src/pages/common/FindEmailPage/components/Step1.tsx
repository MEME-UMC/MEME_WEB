import { Button, Stack, Typography } from '@mui/material';
import { JoinTextField } from '../../../../components/JoinTextField';

type Props = {
  onNext: () => void;
};

export const Step1 = ({ onNext }: Props) => {
  return (
    <Stack flex={1}>
      <Stack flex={1} px={2} justifyContent={'space-between'}>
        <Typography fontWeight={600} fontSize={18} pt={6} pb={4}>
          메메에서 사용하는 닉네임을
          <br />
          입력해주세요
        </Typography>
        <JoinTextField placeholder="닉네임을 입력해주세요" />
      </Stack>
      <Stack padding={2}>
        <Button variant="contained" onClick={onNext}>
          다음
        </Button>
      </Stack>
    </Stack>
  );
};
