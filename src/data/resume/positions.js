const positions = [
  {
    company: 'Tesla Inc.',
    position: 'DOJO Hardware Engineering',
    link: 'https://www.tesla.com/',
    daterange: 'July 2022 - Current',
    points: [
      'Designed, managed, tested and integrated a custom NIC with PCIe, DDR and 100G QSFP for interfacing with out proprietary network protocol',
      'Monitored and enhanced the efficiency of a product production line through the implementation of quality improvements, in addition to constructing automated end-of-line testers to augment throughput significantly',
      'Developed RTL, C++ drivers and nodejs backend to improve hardware tracking and logging across our system',
      'Authored RTL to transform an I2C slave into an AXI master, enabling the onboard microcontroller to access the internal register bus and data bus, thereby expanding system capabilities.',
      'Solely design and wrote automated production scale provisioning and test software for silicon',
      'Successfully brought up and debugged an advanced fabric interfacing card equipped with sophisticated SERDES for ultra-high-speed 50Gb/s per channel communication as well as 200G QSFP-DD',
    ],
  },
  {
    company: 'Tesla Inc.',
    position: 'DOJO Hardware Engineering Intern',
    link: 'https://www.tesla.com/',
    daterange: 'August 2021 - January 2022',
    points: [
      'Redesigned control board for cabinet telemetry and control as well as daughter card for offloading complexity',
      'Engineered a super capacitor hot swap controller, enabling seamless hardware insertion into a live cabinet, thus promoting operational convenience and safety',
      'Effectively tested and integrated a large, complex system comprising intricate harnessing, control systems, and high-power delivery, ensuring overall system coherence and performance',
    ],
  },
  {
    company: 'Tesla Inc.',
    position: 'Autopilot Hardware Engineering Intern',
    link: 'https://www.tesla.com/',
    daterange: 'January 2020 - May 2021',
    points: [
      'Wrote hardware validation testing suites for the team including Ethernet Switch, GPS, VRM bringup in Python to reduce repetitive tasks and build software infrastructure',
      'Identified, investigated, and rectified reliability issues prevalent on the AutoPilot board in temperature-varying environments, enhancing overall system robustness',
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
      'Engineered a 60GHz mmWave radar system specifically for non-contact vital sign detection, pushing the boundaries of health technology',
      'Devised a sophisticated algorithm utilizing Matlab, wavelet transformation, and auto-correlation, proficient in detecting breath rates at distances of up to 10 meters, showcasing innovation in remote vital sign detection',
      'Established a client-server architecture in Python and C++, designed to seamlessly offload processing in real-time, thereby enhancing system performance and efficiency',
    ],
  },
  {
    company: 'Kazoo Technology',
    position: 'Electronics Designer and Innovator Intern',
    link: 'https://kazootechnology.com/',
    daterange: 'August 2019 - April 2020',
    points: [
      'Leveraged fundamental engineering principles and the scientific method to reverse engineer capacitive touchscreen stylus hardware. Successfully devised and validated theories through comprehensive simulations, verified by the construction of a hardware prototypee',
      'Reversed engineered capacitive touch screen stylus hardware to adapt technology to special usecase',
      'Designed both discrete and integrated analog amplifiers as well as digitally controlled filters, leveraging LTSpice simulations and progressing to building and testing physical prototypes.',
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
      'Developed automated RF amplifier testing suites to improve testing time efficiency using LabView and Python',
      'Implemented systems to flash unique MAC addresses to IP enabled products',
      'Characterized RF products to convey technical specs and information to the marketing department and datasheets',
    ],
  },
  {
    company: 'Evertz Microsystems',
    position: 'Systems Engineering Intern',
    link: 'https://evertz.com/',
    daterange: 'May 2018 - August 2018',
    points: [
      'Executed comprehensive research and deployed strategies for impedance and phase matching of 25G QSFP differential pairs, significantly enhancing signal integrity',
      'Successfully captured schematics for an Ethernet switch encompassing RGMII, 1000BTX, and SGMII, including the incorporation of magnetics and impedance matching for optimal performance',
      'Engineered specialized firmware to identify incoming video encryption streams, further enhancing user interaction through the development of a UI overlay system for seamless user feedback',
    ],
  },
  {
    company: 'Evertz Microsystems',
    position: 'Systems Engineering Intern',
    link: 'https://evertz.com/',
    daterange: 'September 2017 - December 2017',
    points: [
      'Developed FPGA firmware for capturing and replaying 10GB/s fiber optic layer 2 ethernet packets with realtime hardware timestamping',
      'Designed and implemented a DDR3 circular buffering system, implemented pre-fetching and caching, while also supporting DMA to DDR3, allowing generation of Wireshark files from Ethernet captured frames',
      'Troubleshot hardware short-circuits on high-density PCBs and spearheaded the design of a more robust active fusing system to safeguard boards against potential damage',
    ],
  },
  {
    company: 'Dozr',
    position: 'Fullstack Software Engineering',
    link: 'https://dozr.com/',
    daterange: 'January 2017 - April 2017',
    points: [
      'Engineered React components to enhance the functionality of our internal tooling website.',
      'Pioneered the creation of automated web crawlers, designed to extract user data from websites and automatically update the database, thereby enhancing accuracy and efficiency',
    ],
  },
];

export default positions;
