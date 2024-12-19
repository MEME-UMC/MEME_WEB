import { Stack } from '@mui/material';
import React from 'react';
import { JIcon } from '../JIcon';
import { JButton } from '../JButton';
import { Row } from '../Row';
import { HighlightButton, UnderLineButton } from './Components/Buttons';

type ModalContentProps = {
  children: React.ReactNode;
  type: 'confirm' | 'submit';
  onClick?: () => void;
  onClose?: () => void;
};
export const ModalContent = ({
  children,
  type,
  onClose,
  onClick,
}: ModalContentProps) => {
  return (
    <Stack
      width="265px"
      minHeight="212px"
      maxHeight="223px"
      pb={'40px'}
      border={`1px solid #FFB3A0`}
      borderRadius={'10px'}
      bgcolor="white"
      overflow={'hidden'}
    >
      <Stack alignItems={'flex-end'}>
        <JButton onClick={onClose} sx={{ width: '28px', padding: '2px 2px' }}>
          <JIcon icon="close" />
        </JButton>
      </Stack>
      <Stack
        height={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
        px={2}
      >
        {children}
      </Stack>
      <Row alignItems={'center'}>
        {type === 'confirm' ? (
          <Row width={'100%'}>
            <UnderLineButton text="네" onClick={onClick} />
            <HighlightButton text="아니요" onClick={onClose} />
          </Row>
        ) : (
          <HighlightButton text="확인" onClick={onClick} />
        )}
      </Row>
    </Stack>
  );
};
