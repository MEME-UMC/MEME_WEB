import { Typography } from '@mui/material';
import { Row } from '../../../../components/Row';
import { COLORS } from '@/styles/colors';

type Props = {
  title: string;
  value: string;
};

export const MyinfoRow = ({ title, value }: Props) => {
  return (
    <Row
      justifyContent={'space-between'}
      sx={{
        py: 1.5,
        borderTopColor: COLORS.gray400,
        borderTopWidth: 1,
        borderTopStyle: 'solid',
      }}
    >
      <Typography fontWeight={600}>{title}</Typography>
      <Typography>{value}</Typography>
    </Row>
  );
};
