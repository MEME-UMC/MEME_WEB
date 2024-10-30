import { Typography, TypographyProps } from "@mui/material";

type Props = TypographyProps;
export const Span = ({ ...props }: Props) => {
  return <Typography component={"span"} {...props} />;
};
