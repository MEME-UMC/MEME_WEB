import { Stack, Typography } from '@mui/material';
import { JButton } from '../../../components/JButton';

export const JoinPage = () => {
  return (
    <Stack>
      <Typography>
        메메를 사용하기 위해
        <br />
        이용 약관에 동의해주세요.
      </Typography>
      <JButton>
        <Typography>다음</Typography>
      </JButton>
    </Stack>
  );
};
