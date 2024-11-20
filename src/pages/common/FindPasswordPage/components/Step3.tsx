import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { JTextField } from '../../../../components/JTextField';
import { JDialog } from '../../../../components/JDialog';
import { COLORS } from '../../../../core/colors';

type Props = {
  onNext: () => void;
};

export const Step3 = ({ onNext }: Props) => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

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
        <Typography fontSize={12} color={COLORS.gray400} pl={1} pt={0.5}>
          영문, 숫자, 특수기호 조합 8~20자
        </Typography>
      </Stack>
      <Stack padding={2}>
        <Button
          variant="contained"
          onClick={() => {
            setIsOpen(true);
          }}
          disabled={!isCorrect}
        >
          다음
        </Button>
      </Stack>
      <JDialog
        isOpen={isOpen}
        onClose={handleClose}
        title="비밀번호 재설정이 완료되었습니다!"
        labelOkay="확인"
        onOkay={onNext}
      />
    </Stack>
  );
};
