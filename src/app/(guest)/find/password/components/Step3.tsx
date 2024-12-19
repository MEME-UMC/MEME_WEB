import { JTextField } from '@/components/JTextField';
import { Modal } from '@/components/Modal/Modal';
import { ModalContent } from '@/components/Modal/ModalContent';
import { COLORS } from '@/styles/colors';
import { Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const Step3 = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    if (password && confirmPassword) {
      setIsValid(password === confirmPassword);
    } else {
      setIsValid(null);
    }
  }, [password, confirmPassword]);

  return (
    <Stack flex={1}>
      <Stack flex={1} px={2} gap={1}>
        <Typography fontWeight={600} fontSize={18} pt={6} pb={4}>
          메메에서 새로 사용할
          <br />
          비밀번호를 입력해주세요
        </Typography>
        <JTextField
          placeholder="비밀번호를 입력해주세요"
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <JTextField
          placeholder="비밀번호를 한 번 더 입력해주세요"
          type="password"
          onChange={handleConfirmPasswordChange}
          error={isValid === false}
          helperText={isValid === false ? '비밀번호가 일치하지 않습니다.' : ''}
          value={confirmPassword}
        />
        <Typography fontSize={12} fontWeight={400} color={COLORS.red_etc}>
          영문, 숫자, 특수기호 조합 8~20자
        </Typography>
      </Stack>
      <Stack padding={2}>
        <Button
          variant="contained"
          onClick={() => setIsOpen(true)}
          disabled={isValid !== true}
        >
          다음
        </Button>
      </Stack>
      <Modal isOpen={isOpen}>
        <ModalContent
          type="submit"
          onClose={() => setIsOpen(false)}
          onClick={() => router.replace('/login')}
        >
          <Typography fontSize={17} fontWeight={700} textAlign={'center'}>
            비밀번호 재설정이 완료되었습니다.
          </Typography>
        </ModalContent>
      </Modal>
    </Stack>
  );
};
