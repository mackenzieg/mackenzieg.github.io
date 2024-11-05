import dayjs from 'dayjs';

// Fetch user's IP and country information
async function getUserCountry() {
  try {
    const response = await fetch('https://ipinfo.io/json?token=your_ipinfo_token'); // Replace with your token
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.country; // Returns the country code, e.g., 'US'
  } catch (error) {
    console.error('Failed to fetch country data:', error);
    // Return a default country code, like 'UNKNOWN' or assume it's not the US
    return 'UNKNOWN';
  }
}

async function getData() {
  const country = await getUserCountry();

  // Map each country code to a specific number of weirdos
  const countryWeirdoMap = {
    US: 3,
    CA: 50000,
    MX: 15,
    FR: 20,
    DE: 25,
    IN: 30,
    CN: 35,
    JP: 40,
    UNKNOWN: 42, // Default for any unknown country or country not in the map
  };

  // Get the weirdo count based on the country, defaulting to 42 if not listed
  const weirdoCount = countryWeirdoMap[country] ?? 42;

  const data = [
    {
      label: 'Number of weirdos here',
      value: weirdoCount,
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

// Export the data array
export default await getData();
