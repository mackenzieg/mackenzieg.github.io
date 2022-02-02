import dayjs from 'dayjs';

const data = [
  {
    label: 'Number of weirdos here',
    value: '0',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/mackenzieg/mackenzieg.github.io/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;
