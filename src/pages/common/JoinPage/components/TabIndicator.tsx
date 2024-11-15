import { Tabs, Tab } from '@mui/material';
import { COLORS } from '../../../../core/colors';

type Props = {
  index: number;
  count: number;
};

export const TabIndicator = ({ index, count }: Props) => {
  return (
    <Tabs
      value={index}
      indicatorColor="primary"
      sx={{
        minHeight: '2px',
        height: '2px',
        px: 2,
        '& .MuiTabs-flexContainer': {
          gap: 1,
        },
      }}
    >
      {Array(count)
        .fill(1)
        .map((_, i) => (
          <Tab
            key={i}
            value={i}
            sx={{ flex: 1, backgroundColor: COLORS.gray300, minWidth: 0 }}
          />
        ))}
    </Tabs>
  );
};
