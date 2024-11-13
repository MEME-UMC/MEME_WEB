import { alpha, TextField, TextFieldProps } from '@mui/material';
import { COLORS } from '../core/colors';

type Props = TextFieldProps;

export const JTextField = (props: Props) => {
  return (
    <TextField
      variant="filled"
      slotProps={{
        input: {
          disableUnderline: true,
        },
      }}
      sx={(theme) => ({
        borderRadius: 8,
        backgroundColor: COLORS.white,
        '& .MuiInputLabel-root': {
          color: COLORS.gray400,
          '&.Mui-focused': {
            color: theme.palette.primary.main,
          },
        },
        '& .MuiFilledInput-root': {
          overflow: 'hidden',
          borderRadius: 4,
          border: '1px solid',
          backgroundColor: 'transparent',
          borderColor: COLORS.gray400,
          transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
          ]),
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
          },
        },
      })}
      {...props}
    />
  );
};
