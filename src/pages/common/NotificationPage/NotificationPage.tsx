import { Stack } from '@mui/material';

import { AppBar } from '../../../components/AppBar';
import { NotificationItem } from './components/NotificationItem';

export const NotificationPage = () => {
  return (
    <Stack>
      <AppBar title="알림" backIcon />
      <Stack>
        <NotificationItem isRead={false} />
        <NotificationItem isRead={true} />
        <NotificationItem isRead={true} />
        <NotificationItem isRead={true} />
      </Stack>
    </Stack>
  );
};
