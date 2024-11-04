import { Typography } from '@mui/material';
import { JButton } from '../../../../components/JButton';

type ReservationsortItemProps = {
  defaultValue: string;
};
const ReservationsortItem = ({ defaultValue }: ReservationsortItemProps) => {
  return (
    <JButton
      sx={{
        padding: '0 8px',
        border: '1px solid #FF633E',
        borderRadius: '20px',
      }}
      onClick={() => {
        alert(`${defaultValue}`);
      }}
    >
      <Typography
        fontSize={10}
        fontWeight={400}
        whiteSpace={'nowrap'}
        lineHeight={'30px'}
      >
        {defaultValue}
      </Typography>
    </JButton>
  );
};

export default ReservationsortItem;
