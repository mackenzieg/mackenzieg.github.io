const positions = [
  {
    company: 'Tesla Inc.',
    position: 'Supercomputer Hardware Engineering Intern',
    link: 'https://www.tesla.com/',
    daterange: 'August 2021 - January 2022',
    points: [
      'Suppressed 100,000 Amp transient by designing dual hot-swap and constant current to constant voltage buck converter',
      'Proposed, designed and tested daughter card architecture for complexity offloading and improve fault tolerance',
      'Managed mechanical, harness, and system integration for the program',
      'Designed FPGA RTL create I2C interface and memory map data peripheral to PCIe link with Verilog',
      'Delivered hardware designs while brought up, validated and revised documentation under intense Tesla engineering deadlines',
    ],
  },
  {
    company: 'Tesla Inc.',
    position: 'Autopilot Hardware Engineering Intern',
    link: 'https://www.tesla.com/',
    daterange: 'January 2020 - May 2021',
    points: [
      'Wrote hardware validation testing suites for the team including Ethernet Switch, GPS, VRM bringup in Python to reduce repetitive tasks and build software infrastructure',
      'Discovered, root caused and implemented solution to reliability issues on AutoPilot board in temperature varying environments',
      'Performed time-domain reflectometry on SGMII and 1000Base-T1 signal paths to verify signal integrity and performed eye-diagram analysis for intersymbol distortion',
      'Validated multi-phase buck converter load transient step response and open-loop phase response; meeting requirements',
    ],
  },
  {
    company: 'University of Waterloo',
    position: 'Undergraduate Research Assistant',
    link: 'https://kazootechnology.com/',
    daterange: 'April 2020 - August 2020',
    points: [
      'Designed 60GHz mmWave radar system for non-contact vital sign detection',
      'Designed algorithm using Matlab with wavelet transformation and auto-correlation to detect breath rate at up to 10 meters',
      'Implemented client-server architecture in Python and C++ to offload processing in realtime',
    ],
  },
  {
    company: 'Kazoo Technology',
    position: 'Electronics Designer and Innovator Intern',
    link: 'https://kazootechnology.com/',
    daterange: 'August 2019 - April 2020',
    points: [
      'Reversed engineered capacitive touch screen stylus hardware to adapt technology to special usecase',
      'Design discrete and integrated analog amplifier and digitally controlled filters using LTSpice simulations and built and tested prototypes',
      'Design and packaged manufacturable products for consumer use',
      'Designed 200MSP/s ADC with FPGA dev-board in Altium including touch screen protocol detection and spoofing for touch screen stylus testing',
    ],
  },
  {
    company: 'AR Modular RF',
    position: 'Radio Frequency Hardware Engineering Intern',
    link: 'https://www.arww-modularrf.com/home_modular_rf.cfm',
    daterange: 'January 2019 - April 2019',
    points: [
      'Wrote automated RF amplifier testing suites to improve testing time efficiency using LabView and Python',
      'Characterized RF products to convey technical specs and information to the marketing department and datasheets',
    ],
  },
  {
    company: 'Evertz Microsystems',
    position: 'Systems Engineering Intern',
    link: 'https://evertz.com/',
    daterange: 'May 2018 - August 2018',
    points: [
      'Researched and implemented techniques to impedance match and phase match 25G QSFP differential pairs for signal integrity',
      'Schematic captured ethernet switch with RGMII, 1000BTX and SGMII including magnetics and impedance matching',
      'Developed firmware to detect video encryption protocol and UI overlay system for user feedback',
    ],
  },
  {
    company: 'Evertz Microsystems',
    position: 'Systems Engineering Intern',
    link: 'https://evertz.com/',
    daterange: 'September 2017 - December 2017',
    points: [
      'Developed FPGA firmware for capturing and replaying 10GB/s fiber optic IP packets with realtime hardware timestamping',
      'Improved SDRAM data packing density by 50% using intelligent circular buffering and memory pre-caching',
      'Debugged hardware short on high density PCB and designed improved active fusing system',
    ],
  },
  {
    company: 'Dozr',
    position: 'Fullstack Software Engineering',
    link: 'https://dozr.com/',
    daterange: 'January 2017 - April 2017',
    points: [
      'Developed React components for internal tooling website',
      'Implemented backend features from JIRA in NodeJS and PHP',
      'Developed automatic web crawlers to scrape user information from websites and automatically parse and update database',
    ],
  },
];

export default positions;
