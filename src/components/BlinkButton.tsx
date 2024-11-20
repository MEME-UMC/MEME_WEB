import { ButtonBase, ButtonBaseProps, keyframes } from '@mui/material';
import { ReactNode, useState } from 'react';

type Props = {
  children: ReactNode;
} & ButtonBaseProps;

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const BlinkButton = ({ children, sx, onClick, ...props }: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsAnimating(true);
    if (onClick) {
      onClick(e);
    }
    setTimeout(() => setIsAnimating(false), 300);
  };
  return (
    <ButtonBase
      component="div"
      sx={[
        {
          animation: isAnimating ? `${blinkAnimation} 0.3s ease` : 'none',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      disableRipple
      onClick={handleClick}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};
