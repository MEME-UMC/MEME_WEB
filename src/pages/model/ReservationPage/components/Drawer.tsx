import { Stack } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../../core/colors';

type DrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

function Drawer({ children, isOpen, onClose }: DrawerProps) {
  return (
    <Stack
      position={'fixed'}
      maxWidth={'768px'}
      width={'100%'}
      top={`${isOpen ? '0' : '100%'}`}
      bottom={0}
      sx={{ background: '#00000038' }}
      onClick={onClose}
    >
      <Stack
        position={'absolute'}
        width={'100%'}
        justifyContent={'left'}
        bottom={0}
        left={'50%'}
        gap={5}
        py={5}
        sx={{
          backgroundColor: COLORS.white,
          transform: isOpen ? 'translate(-50%, 0)' : 'translate(-50%, 100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 1000,
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
}

export default Drawer;
