import { Typography } from '@mui/material';
import { JButton } from '../../../../components/JButton';

type Props = {
  onClick: () => void;
  label: string;
};

export const MypageRowButton = ({ onClick, label }: Props) => {
  return (
    <JButton
      sx={{ justifyContent: 'start', paddingY: 1.5, paddingX: 1 }}
      onClick={onClick}
    >
      <Typography fontSize={14}>{label}</Typography>
    </JButton>
  );
};
