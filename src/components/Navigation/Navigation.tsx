import { createPortal } from 'react-dom';
import { BottomNavigation } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { NavigationButton } from './components/NavigationButton';
import { useJNavigate } from '../../core/routes';

type Props = {
  type?: 'model' | 'artist' | 'guest';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Navigation = ({ type }: Props) => {
  const location = useLocation();
  const value = location.pathname;
  const navigate = useJNavigate();

  return createPortal(
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_, to) => {
        navigate(to);
      }}
      sx={{
        width: '100%',
        maxWidth: 768,
      }}
    >
      <NavigationButton label="홈" value="/" icon="home" />
      <NavigationButton
        label="예약"
        value="/search/makeup"
        icon="reservation"
      />
      <NavigationButton label="MY" value="/mypage" icon="user" />
    </BottomNavigation>,
    document.body
  );
};
