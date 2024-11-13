import { TextField, TextFieldProps } from '@mui/material';

export const JoinTextField = (props: TextFieldProps) => {
  return (
    <TextField
      sx={{
        flex: 1,
        '& .MuiOutlinedInput-root': {
          borderRadius: 4,
        },
      }}
      {...props}
    />
  );
};
