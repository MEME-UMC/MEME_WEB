import { JButton } from '../../../../components/JButton';
import { COLORS } from '../../../../core/colors';

type OptionButtonProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};
export const OptionButton = ({
  label,
  selected,
  onClick,
}: OptionButtonProps) => {
  return (
    <JButton
      onClick={onClick}
      sx={{
        height: '45px',
        border: `1px solid ${selected ? COLORS.primary : COLORS.gray300} `,
        background: selected ? COLORS.primary : 'transparent',
        color: selected ? COLORS.white : undefined,
        borderRadius: '10px',
        fontSize: '14px',
      }}
    >
      {label}
    </JButton>
  );
};
