import { JButton } from '@/components/JButton';
import { COLORS } from '@/styles/colors';
import { Stack, Typography } from '@mui/material';

type SpecializationItemProps = {
  text: string;
  onClick: () => void;
  isActive: boolean;
};
export const SpecializationItem = ({
  text,
  onClick,
  isActive,
}: SpecializationItemProps) => {
  return (
    <Stack
      border={`1px solid ${COLORS.primary}`}
      borderRadius={'20px'}
      overflow={'hidden'}
      bgcolor={isActive ? COLORS.primary : undefined}
    >
      <JButton onClick={onClick}>
        <Typography
          px={3}
          fontSize={10}
          fontWeight={400}
          lineHeight={'27px'}
          color={isActive ? COLORS.white : undefined}
        >
          {text}
        </Typography>
      </JButton>
    </Stack>
  );
};
