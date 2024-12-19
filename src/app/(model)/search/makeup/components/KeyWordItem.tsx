import { JButton } from '@/components/JButton';
import { JIcon } from '@/components/JIcon';
import { Row } from '@/components/Row';
import { COLORS } from '@/styles/colors';
import { Typography } from '@mui/material';
import React from 'react';

type KeyWordItemProps = {
  text: string;
};
export const KeyWordItem = ({ text }: KeyWordItemProps) => {
  return (
    <Row
      minWidth={'108px'}
      border={`1px solid ${COLORS.gray500}`}
      borderRadius={'20px'}
      overflow={'hidden'}
    >
      <JButton sx={{ px: '12px', gap: '10px' }}>
        <Typography
          fontSize={12}
          fontWeight={400}
          lineHeight={'28px'}
          color={COLORS.gray500}
          whiteSpace={'nowrap'}
        >
          {text}
        </Typography>

        <JIcon icon="keyword-close" />
      </JButton>
    </Row>
  );
};
