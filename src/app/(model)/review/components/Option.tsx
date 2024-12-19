import { JButton } from '@/components/JButton';
import { COLORS } from '@/styles/colors';
import { keyframes, Stack } from '@mui/material';
import React, { ReactNode } from 'react';

type OptionItemProps = {
  onClick?: () => void;
  children: ReactNode;
};
export const OptionItem = ({ onClick, children }: OptionItemProps) => {
  return (
    <JButton
      onClick={onClick}
      sx={{
        fontSize: '14px',
        fontWeight: 400,
        color: COLORS.gray500,
        lineHeight: '28px',
        borderBottom: `1px solid ${COLORS.gray300}`,
        '&:last-child': {
          borderBottom: 'none',
        },
        bgcolor: COLORS.white,
      }}
    >
      {children}
    </JButton>
  );
};

const fadeInSlideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

type OptionProps = {
  children: ReactNode;
  isActive: boolean | undefined;
};
export const Option = ({ children, isActive }: OptionProps) => {
  return (
    <Stack
      position={'absolute'}
      width={85}
      top={'120%'}
      right={0}
      border={`1px solid ${COLORS.gray300}`}
      sx={{
        opacity: isActive ? 1 : 0,
        animation: isActive ? `${fadeInSlideDown} 0.3s ease-in-out` : 'none',
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      {children}
    </Stack>
  );
};
