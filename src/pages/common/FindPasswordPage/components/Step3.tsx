import { Button, Fade, Modal, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { JTextField } from '../../../../components/JTextField';
import { COLORS } from '../../../../core/colors';
import { Row } from '../../../../components/Row';
import { JIcon } from '../../../../components/JIcon';
import { BlinkButton } from '../../../../components/BlinkButton';

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
      <Modal open={isOpen} onClose={handleClose}>
        <Fade in={isOpen}>
          <Stack
            position={'absolute'}
            top={'50%'}
            left={'50%'}
            sx={{
              transform: 'translate(-50%, -50%)',
            }}
            bgcolor={COLORS.white}
            border={1}
            borderColor={COLORS.primary600}
            borderRadius={2}
            minWidth={210}
            minHeight={180}
          >
            <Row justifyContent={'flex-end'}>
              <BlinkButton sx={{ width: 'auto' }}>
                <JIcon icon="close" />
              </BlinkButton>
            </Row>
            <Stack justifyContent={'space-between'} flex={1}>
              <Stack flex={1} justifyContent={'center'} alignItems={'center'}>
                <Typography fontSize={14} fontWeight={600} textAlign={'center'}>
                  비밀번호 재설정이 완료되었습니다!
                </Typography>
              </Stack>
              <Row pb={3}>
                <Button variant="outlined" onClick={onNext}>
                  확인
                </Button>
              </Row>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </Stack>
  );
};
