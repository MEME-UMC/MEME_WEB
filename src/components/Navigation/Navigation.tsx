import { createPortal } from 'react-dom';
import { BottomNavigation } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationIcon } from './components/NavigationIcon';
import { NavigationButton } from './components/NavigationButton';

export const Navigation = () => {
  const location = useLocation();
  const value = location.pathname;
  const navigate = useNavigate();

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
      <NavigationButton label="예약" value="/book">
        <NavigationIcon type="book" />
      </NavigationButton>
      <NavigationButton label="MY" value="/my">
        <NavigationIcon type="my" />
      </NavigationButton>
    </BottomNavigation>,
    document.body
  );
};
