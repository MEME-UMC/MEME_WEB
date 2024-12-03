import { JButton } from '@/components/JButton';
import { COLORS } from '@/styles/colors';
import { ReactNode } from 'react';

type Props = {
  isActive: boolean;
  children: ReactNode;
  onClick: () => void;
};

export const ShadowButton = ({ isActive, children, onClick }: Props) => {
  return (
    <JButton
      sx={{
        height: '63px',
        borderRadius: '20px',
        boxShadow: `-5px -5px 20px 0px ${
          isActive ? COLORS.primarySelect : 'transparent'
        } inset`,
        transition: 'box-shadow 0.3s ease-in-out',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: isActive ? COLORS.primarySelect : COLORS.gray400,
      }}
      onClick={onClick}
    >
      {children}
    </JButton>
  );
};
