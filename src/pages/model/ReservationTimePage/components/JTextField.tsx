import { TextField, TextFieldProps } from '@mui/material';
import { COLORS } from '../../../../core/colors';

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
        borderRadius: 9,
        backgroundColor: COLORS.white,
        '& .MuiFilledInput-root': {
          overflow: 'hidden',
          height: '41px',
          borderRadius: '9px',
          border: '1px solid',
          backgroundColor: 'transparent',
          borderColor: COLORS.primary,
          fontSize: '14px',
          transition: theme.transitions.create([
            'border-color',
            'background-color',
          ]),
          '& .MuiFilledInput-input': {
            padding: '0 12px',
          },
        },
      })}
      {...props}
    />
  );
};
