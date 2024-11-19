import { TextField, TextFieldProps } from '@mui/material';

type Props = TextFieldProps & {
  pt?: number;
};

export const JTextField = ({ pt, ...props }: Props) => {
  return (
    <TextField
      sx={{
        flex: 1,
        pt,
        '& .MuiOutlinedInput-root': {
          borderRadius: 4,
        },
      }}
      {...props}
    />
  );
};
