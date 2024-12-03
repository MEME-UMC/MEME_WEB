import { COLORS } from '@/styles/colors';
import { JButton } from '../../../../components/JButton';

import { ReactNode } from 'react';

type Props = {
  isActive: boolean;
  children: ReactNode;
  onClick: () => void;
};

export const TypeButton = ({ isActive, children, onClick }: Props) => {
  return (
    <JButton
      sx={{
        height: '120px',
        borderRadius: '100px',
        width: '327px',
        boxShadow: `-5px -5px 20px 0px ${
          isActive ? COLORS.primarySelect : COLORS.gray300
        } inset`,
        transition: 'box-shadow 0.3s ease-in-out',
      }}
      onClick={onClick}
    >
      {children}
    </JButton>
  );
};
