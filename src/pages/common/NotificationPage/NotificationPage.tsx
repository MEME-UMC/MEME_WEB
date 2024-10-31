import { Stack } from '@mui/material';

import { AppBar } from '../../../components/AppBar/AppBar';
import { NotificationList } from './components/NotificationList';

export const NotificationPage = () => {
  return (
    <Stack>
      <AppBar title="알림" />
      <Stack>
        <NotificationList read={false} />
        <NotificationList read={true} />
        <NotificationList read={true} />
        <NotificationList read={true} />
      </Stack>
    </Stack>
  );
};
