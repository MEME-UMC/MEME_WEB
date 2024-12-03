'use client';
import { Checkbox, keyframes, Typography } from '@mui/material';
import { JButton } from '../../../../components/JButton';
import { JIcon } from '../../../../components/JIcon';
import { Row } from '../../../../components/Row';
import { useState } from 'react';

type Props = {
  isChecked: boolean;
  onClick: () => void;
  label: string;
  isBold?: boolean;
};

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const PolicyCheckbox = ({
  isChecked,
  onClick,
  label,
  isBold,
}: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <Row justifyContent={'start'}>
      <Checkbox
        checked={isChecked}
        onClick={onClick}
        icon={<JIcon icon="circle-unchecked" />}
        checkedIcon={<JIcon icon="circle-checked" />}
      />
      <JButton
        sx={{
          justifyContent: 'start',
        }}
        onClick={handleClick}
        disableRipple
      >
        <Typography
          fontWeight={isBold ? 600 : 400}
          sx={{
            animation: isAnimating ? `${blinkAnimation} 0.3s ease` : 'none',
          }}
        >
          {label}
        </Typography>
      </JButton>
    </Row>
  );
};
