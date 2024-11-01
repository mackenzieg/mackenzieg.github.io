import dayjs from 'dayjs';

// Fetch user's IP and country information
// async function getUserCountry() {
//   const response = await fetch('https://ipinfo.io/json?token=your_ipinfo_token'); // Replace with your token
//   const data = await response.json();
//   return data.country; // Returns the country code, e.g., 'US'
// }

async function getData() {
  const randomNumber = Math.floor(Math.random() * 300) + 1;

  const data = [
    {
      label: 'Number of weirdos here',
      value: randomNumber,
    },
    {
      label: 'Last updated at',
      key: 'pushed_at',
      link: 'https://github.com/mackenzieg/mackenzieg.github.io/commits',
      format: (x) => dayjs(x).format('MMMM DD, YYYY'),
    },
  ];

  return data;
}

// Update and export the data array
export default await getData();
