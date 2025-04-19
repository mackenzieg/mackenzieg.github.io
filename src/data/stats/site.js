import dayjs from 'dayjs';

// Fetch user's IP and country information
function getUserCountry() {
  try {
    // Get browser language (e.g., "en-US", "fr-FR")
    const language = navigator.language || navigator.userLanguage;
    // Extract country code from language tag (last 2 characters)
    const country = language.slice(-2).toUpperCase();
    return country;
  } catch (error) {
    console.error('Failed to detect country:', error);
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
