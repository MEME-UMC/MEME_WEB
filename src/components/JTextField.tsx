import { TextField, TextFieldProps } from '@mui/material';

type Props = TextFieldProps & {
  pt?: number;
};

export const JTextField = ({ pt, sx, ...props }: Props) => {
  return (
    <TextField
      sx={{
        pt,
        '& .MuiOutlinedInput-root': {
          borderRadius: 4,
        },
        ...sx,
      }}
      {...props}
    />
  );
};
