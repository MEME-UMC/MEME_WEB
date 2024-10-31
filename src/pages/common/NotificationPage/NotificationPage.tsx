import { Stack } from '@mui/material';

import { AppBar } from '../../../components/AppBar/AppBar';
import { NotificationList } from './components/NotificationList';

export const NotificationPage = () => {
  return (
    <Stack>
      <AppBar title="알림" backIcon />
      <Stack>
        <NotificationList isRead={false} />
        <NotificationList isRead={true} />
        <NotificationList isRead={true} />
        <NotificationList isRead={true} />
      </Stack>
    </Stack>
  );
};
