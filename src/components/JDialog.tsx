import { Button, Fade, Modal, Stack, Typography } from '@mui/material';
import { BlinkButton } from './BlinkButton';
import { JIcon } from './JIcon';
import { Row } from './Row';
import { ReactNode } from 'react';
import { COLORS } from '@/styles/colors';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  onOkay?: () => void;
  onNo?: () => void;
  labelOkay?: string;
  labelNo?: string;
  icon?: ReactNode;
};

export const JDialog = ({
  isOpen,
  onClose,
  title,
  description,
  labelOkay = '네',
  labelNo = '아니오',
  onOkay,
  onNo,
  icon,
}: Props) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
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
            <BlinkButton sx={{ width: 'auto' }} onClick={onClose}>
              <JIcon icon="close" />
            </BlinkButton>
          </Row>
          <Stack justifyContent={'space-between'} flex={1}>
            <Stack flex={1} justifyContent={'center'} alignItems={'center'}>
              {icon}
              <Typography fontSize={17} fontWeight={700} textAlign={'center'}>
                {title}
              </Typography>
              <Typography fontSize={14} fontWeight={600} textAlign={'center'}>
                {description}
              </Typography>
            </Stack>
            <Row pb={3}>
              {onNo && (
                <Button variant="text" onClick={onNo}>
                  {labelNo}
                </Button>
              )}
              {onOkay && (
                <Button variant="outlined" onClick={onOkay}>
                  {labelOkay}
                </Button>
              )}
            </Row>
          </Stack>
        </Stack>
      </Fade>
    </Modal>
  );
};
