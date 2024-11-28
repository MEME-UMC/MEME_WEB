import { AppBar } from '@/components/AppBar';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Stack } from '@mui/material';
import { NotificationItem } from './components/NotificationItem';

const Page = () => {
  return (
    <MotionWrapper>
      <Stack>
        <AppBar title="알림" backIcon />
        <Stack>
          <NotificationItem isRead={false} />
          <NotificationItem isRead={true} />
          <NotificationItem isRead={true} />
          <NotificationItem isRead={true} />
        </Stack>
      </Stack>
    </MotionWrapper>
  );
};
export default Page;
