import { Button, Stack, Typography } from '@mui/material';
import { AppBar } from '../../../components/AppBar';
import { Row } from '../../../components/Row';
import { JIcon } from '../../../components/JIcon';
import { JTextField } from '../../../components/JTextField';

export const LeavePage = () => {
  return (
    <Stack flex={1}>
      <AppBar backIcon title="회원 탈퇴" />
      <Stack flex={1} justifyContent={'space-between'}>
        <Stack px={2} pt={4}>
          <Row px={1} justifyContent={'start'}>
            <Typography fontWeight={700} fontSize={18}>
              차차님,
              <br />
              정말 탈퇴하시겠어요?
            </Typography>
          </Row>
          <Stack px={1}>
            <Row
              justifyContent={'flex-start'}
              alignItems={'center'}
              gap={0.5}
              pt={3}
            >
              <JIcon icon="circle-alert-outlined" />
              <Typography fontSize={12} fontWeight={500}>
                탈퇴 후에는 작성하신 리뷰를 수정 혹은 삭제할 수 없어요.
              </Typography>
            </Row>
            <Row
              justifyContent={'flex-start'}
              alignItems={'center'}
              gap={0.5}
              pt={1}
            >
              <JIcon icon="circle-alert-outlined" />
              <Typography fontSize={12} fontWeight={500}>
                닉네임 입력 시 회원 탈퇴됩니다.
              </Typography>
            </Row>
            <JTextField placeholder="닉네임 입력" pt={2} />
            <Row
              justifyContent={'flex-start'}
              alignItems={'center'}
              gap={0.5}
              pt={4}
            >
              <JIcon icon="circle-checked-outlined" />
              <Typography fontSize={14} fontWeight={500}>
                회원 탈퇴 유의사항을 확인하였으며 동의합니다.
              </Typography>
            </Row>
          </Stack>
        </Stack>

        <Stack padding={2}>
          <Button variant="contained">회원 탈퇴</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
