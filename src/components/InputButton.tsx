import { InputBase, InputBaseProps } from '@mui/material';

export const InputButton = ({ ...props }: InputBaseProps) => {
  return (
    <InputBase
      sx={{
        borderRadius: '10px',
        backgroundColor: '#f2f0eb',
        borderWidth: '2px',
        borderRightColor: 'white',
        padding: '10px',
        boxShadow: 2,
        '&.Mui-focused': {},
      }}
      {...props}
    />
  );
};
