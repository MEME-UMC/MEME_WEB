import { JIcon } from '../../JIcon';
type Props = {
  type: string;
};

export const NavigationIcon = ({ type }: Props) => {
  switch (type) {
    case 'home':
      return <JIcon height={22} icon="home"></JIcon>;
    case 'book':
      return <JIcon height={22} icon="booking"></JIcon>;
    case 'my':
      return <JIcon height={22} icon="user"></JIcon>;
    default:
      return null;
  }
};
