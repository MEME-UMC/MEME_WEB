import { SvgIcon } from '@mui/material';

type Props = {
  type: string;
};

export const NavigationIcon = ({ type }: Props) => {
  switch (type) {
    case 'home':
      return (
        <SvgIcon sx={{ width: 24, height: 24 }}>
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 18.5968H1C1 18.5968 1 3.09678 1 1.59678C1 0.0967846 9.5 7.59678 9.5 7.59678C9.5 7.59678 18 0.0968895 18 1.59678C18 3.09668 18 18.5968 18 18.5968H12M6.5 18.5968V13.0968C8.64788 13.0968 9.85212 13.0968 12 13.0968V18.5968M6.5 18.5968H12"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
        </SvgIcon>
      );
    case 'book':
      return (
        <SvgIcon sx={{ width: 22, height: 22 }}>
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </SvgIcon>
      );
    case 'my':
      return (
        <SvgIcon sx={{ width: 24, height: 24, pl: 1 }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </SvgIcon>
      );

    default:
      return null;
  }
};
