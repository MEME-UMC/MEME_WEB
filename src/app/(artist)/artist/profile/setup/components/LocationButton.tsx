import { JButton } from '@/components/JButton';
import { COLORS } from '@/styles/colors';
import { Typography } from '@mui/material';
type LocationButtonProps = {
  text: string;
  onClick?: () => void;
  active: boolean;
};
export const LocationButton = ({
  text,
  onClick,
  active,
}: LocationButtonProps) => {
  return (
    <JButton
      onClick={onClick}
      sx={{
        width: 'calc(33% - 9px)',
        height: '76px',
        border: `1px solid ${active ? COLORS.primary : COLORS.gray300}`,
        borderRadius: '10px',
      }}
    >
      <Typography
        fontSize={12}
        color={active ? COLORS.primary : COLORS.gray500}
      >
        {text}
      </Typography>
    </JButton>
  );
};
