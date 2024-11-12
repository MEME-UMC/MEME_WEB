import { JButton } from '../../../../components/JButton';

type DrawerItemProps = {
  text: string;
};
const DrawerItem = ({ text }: DrawerItemProps) => {
  return (
    <JButton sx={{ width: '100%', fontSize: '16px', fontWeight: 500 }}>
      {text}
    </JButton>
  );
};

export default DrawerItem;
