import { createPortal } from 'react-dom';
import { BottomNavigation } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { NavigationIcon } from './components/NavigationIcon';
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
      <NavigationButton label="홈" value="/">
        <NavigationIcon type="home" />
      </NavigationButton>
      <NavigationButton label="예약" value="/reservation">
        <NavigationIcon type="reservation" />
      </NavigationButton>
      <NavigationButton label="MY" value="/my">
        <NavigationIcon type="my" />
      </NavigationButton>
    </BottomNavigation>,
    document.body
  );
};
