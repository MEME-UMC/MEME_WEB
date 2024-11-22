import { Button, Stack, Typography } from '@mui/material';
import { AppBar } from '../../../components/AppBar';
import { Row } from '../../../components/Row';
import { JTextField } from '../../../components/JTextField';

export const ContactPage = () => {
  return (
    <Stack flex={1}>
      <AppBar backIcon title="문의하기" />
      <Stack flex={1} justifyContent={'space-between'}>
        <Stack px={3} pt={2}>
          <Row justifyContent={'start'}>
            <Typography fontWeight={600} fontSize={18}>
              문의할 내용을 남겨주세요
            </Typography>
          </Row>
          <Typography pt={2} pb={1}>
            문의 제목
          </Typography>
          <JTextField placeholder="제목을 입력해주세요" />
          <Typography pt={2} pb={1}>
            이메일
          </Typography>
          <JTextField placeholder="답변 받을 이메일을 입력해주세요" />
          <Typography pt={2} pb={1}>
            문의 내용
          </Typography>
          <JTextField
            placeholder="여기에 내용을 작성해주세요."
            multiline
            rows={6}
          />
        </Stack>

        <Stack padding={2}>
          <Button variant="contained">문의하기</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
