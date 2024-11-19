/* eslint-disable no-empty-pattern */
import { Stack, Typography } from '@mui/material';

type Props = {
  onNext: () => void;
};

export const Step2 = ({}: Props) => {
  return (
    <Stack>
      <Typography>이메일을 찾았어요!</Typography>
      <Typography>지금 바로 로그인 해보세요</Typography>
    </Stack>
  );
};
