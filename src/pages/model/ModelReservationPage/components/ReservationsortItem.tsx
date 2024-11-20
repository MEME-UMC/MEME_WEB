import { Typography } from '@mui/material';
import { JButton } from '../../../../components/JButton';
import { COLORS } from '../../../../core/colors';

type ReservationsortItemProps = {
  defaultValue: string;
};
export const ReservationsortItem = ({
  defaultValue,
}: ReservationsortItemProps) => {
  return (
    <JButton
      sx={{
        padding: '0 8px',
        border: `1px solid ${COLORS.primary}`,
        borderRadius: '20px',
      }}
      onClick={() => {
        // alert(`${defaultValue}`);
      }}
    >
      <Typography fontSize={10} whiteSpace={'nowrap'} lineHeight={'30px'}>
        {defaultValue}
      </Typography>
    </JButton>
  );
};
