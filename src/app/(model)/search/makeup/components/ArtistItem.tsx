import { JButton } from '@/components/JButton';
import { COLORS } from '@/styles/colors';
import { Stack } from '@mui/material';
import React from 'react';

type ArtistItemProps = { text: string; onClick: () => void };
export const ArtistItem = ({ text, onClick }: ArtistItemProps) => {
  return (
    <Stack border={`1px solid ${COLORS.primaryLight}`} borderRadius={'20px'}>
      <JButton onClick={onClick} sx={{ padding: '7px 12px', fontSize: '10px' }}>
        {text}
      </JButton>
    </Stack>
  );
};
