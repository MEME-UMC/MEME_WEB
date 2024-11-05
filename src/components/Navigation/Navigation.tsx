import { createPortal } from 'react-dom';
import { BottomNavigation } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { NavigationButton } from './components/NavigationButton';
import { useJNavigate } from '../../core/routes';

export const Navigation = () => {
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
      <NavigationButton label="예약" value="/reservation" icon="reservation" />
      <NavigationButton label="MY" value="/my" icon="user" />
    </BottomNavigation>,
    document.body
  );
};
