import { JButton } from '@/components/JButton';
import { COLORS } from '@/styles/colors';
import { Typography } from '@mui/material';

type MakeupLocationItemProps = {
  text: string;
  onClick: () => void;
  isActive: boolean;
};
export const MakeupLocationItem = ({
  text,
  onClick,
  isActive,
}: MakeupLocationItemProps) => {
  return (
    <JButton
      sx={{
        border: `1px solid ${isActive ? COLORS.primary : COLORS.gray300}`,
        borderRadius: '9px',
      }}
      onClick={onClick}
    >
      <Typography fontSize={14} lineHeight={'41px'}>
        {text}
      </Typography>
    </JButton>
  );
};
