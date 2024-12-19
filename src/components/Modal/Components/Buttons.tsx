import { JButton } from '@/components/JButton';
import { Typography } from '@mui/material';
import React from 'react';

type ButtonsProps = {
  onClick?: () => void;
  text: string;
};
export const UnderLineButton = ({ text, onClick }: ButtonsProps) => {
  return (
    <JButton
      onClick={onClick}
      sx={{
        width: '109px',
        fontSize: '17px',
        fontWeight: '600',
        borderRadius: '10px',
      }}
    >
      <Typography
        fontSize={17}
        fontWeight={600}
        sx={{
          textDecoration: 'underline',
          textUnderlinePosition: 'under',
          lineHeight: '43px',
        }}
      >
        {text}
      </Typography>
    </JButton>
  );
};

export const HighlightButton = ({ text, onClick }: ButtonsProps) => {
  return (
    <JButton
      onClick={onClick}
      sx={{
        width: '109px',
        border: '1px solid #FFB3A0',
        borderRadius: '10px',
        background: '#FFF6F3',
        lineHeight: '43px',
        fontSize: '17px',
        fontWeight: '600',
      }}
    >
      {text}
    </JButton>
  );
};
