import React from 'react';

// TODO Add a couple lines about each project
const projectCards = [
  {
    projectId: 'microplastics-resonator',
    title: 'Microplastic Detection Using Microwave Resonators',
    subtitle: 'Improve human sustainability',
    image: '/images/projects/microplastics.jpg',
    date: '2022-04',
    desc:
      'Developed a device to aid microbiologists in detecting microplastic in water to determine pollution in an ecosystem. '
      + 'This uses a 6GHz cavity resonator to measure dialetric properties of materials. '
      + 'Everything was simulated in Ansys HFSS and tested using a microfluidic pump and VNA.',
  },
  {
    projectId: 'mmwave-radar',
    title: 'mmWave 60GHz Radar Vital Sign Detection',
    subtitle: 'At a distance breath-rate detection',
    image: '/images/projects/mmwaveradar.jpg',
    date: '2020-04',
    desc:
      'Designed a system using the Infineon 60GHz mmWave radar for detecting breath rate of patients. This is for old age homes '
      + 'to automatically collect health metric of the residents.',
  },
  {
    projectId: 'rf-pulser',
    title: '6GHz AM Modulated RF Pulser',
    subtitle: 'AM modulate a signal with a 6GHz carrier',
    image: '/images/projects/rfpulser.jpg',
    date: '2021-02',
    desc:
      'Designed a 6GHz VCO with AM modulation and 20dBm output power. This was just for fun as I was taking a course on '
      + 'Signals & Systems as well as RF Systems.',
  },
  {
    projectId: 'ecg',
    title: '3-Lead ECG With ARM Dev Board',
    subtitle: 'For detecting arrhythmia in heart beats',
    image: '/images/projects/ecg.jpg',
    date: '2020-08',
    desc:
      'Designed a build a ECG for detecting irregular heat beats. Later this will be developed to detect other conditions '
      + 'using machine learning.',
  },
  {
    projectId: 'pkm-go',
    title: 'PokemonGo Bot',
    subtitle: 'Automatically catches pokemon, walks, evolves and xp farms',
    image: '/images/projects/pokemongo.jpg',
    date: '2017-01',
    desc:
      'At the time I was really interested in PokemonGo and wanted a way to level up without actually playing. '
      + 'As a fun project I decided to design and build my own auto xp farming PokemonGo bot. This included a path finding '
      + 'bot to automatically walk and pickup pokemon.',
  },
];

const projectDetails = {
  'microplastics-resonator': {
    title: 'Microplastic Resonator',
    contents: (
      <p>Test with different stuff yoyo</p>
    ),
  },
};

export default { projectCards, projectDetails };
