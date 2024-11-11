import { Stack } from '@mui/material';
import { JTextField } from '../../../components/JTextField';

export const LoginPage = () => {
  return (
    <Stack px={2}>
      <Stack gap={1}>
        <JTextField label="이메일" />
        <JTextField label="비밀번호" />
      </Stack>
    </Stack>
  );
};
