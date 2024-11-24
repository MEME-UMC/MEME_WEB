import { Stack, StackProps } from '@mui/material';

type Props = StackProps;
export const Row = ({ ...props }: Props) => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      {...props}
    />
  );
};
