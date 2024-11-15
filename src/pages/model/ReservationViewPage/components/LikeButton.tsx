import { Stack } from '@mui/material';
import { JButton } from '../../../../components/JButton';
import { JIcon } from '../../../../components/JIcon';

type likeButtonProps = {
  onClick: () => void;
  isScaled: boolean;
};
export const LikeButton = ({ onClick, isScaled }: likeButtonProps) => {
  return (
    <Stack position={'relative'}>
      <JButton onClick={onClick}>
        <JIcon icon="heart-outline" />
        <Stack
          position={'absolute'}
          sx={{ transition: '0.3s', scale: isScaled ? 1 : 0 }}
        >
          <JIcon icon="heartBlack" />
        </Stack>
      </JButton>
    </Stack>
  );
};
