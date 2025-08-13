import raw from 'raw.macro';

// TODO Add a couple lines about each project
const projectCards = [
  {
    projectId: 'microplastics-resonator',
    title: 'Microplastic Detection Using Microwave Resonators',
    subtitle: 'Improve human sustainability',
    image: '/images/projects/microplastics.jpg',
    date: '2022-04',
    desc:
      'Developed a device to aid microbiologists in detecting microplastics in water to determine pollution in an ecosystem. '
      + 'Uses a 6 GHz cavity resonator to measure dielectric properties of materials. '
      + 'Simulated entirely in Ansys HFSS and tested with a microfluidic pump and VNA.',
  },
  {
    projectId: 'mmwave-radar',
    title: 'mmWave 60GHz Radar Vital Sign Detection',
    subtitle: 'Breath-rate detection at a distance',
    image: '/images/projects/mmwaveradar.jpg',
    date: '2020-04',
    desc:
      'Designed a system using the Infineon 60 GHz mmWave radar for detecting breath rates of patients. '
      + 'Intended for use in care homes to automatically collect health metrics from residents.',
  },
  {
    projectId: 'rf-pulser',
    title: '6GHz AM Modulated RF Pulser',
    subtitle: 'AM modulate a signal with a 6GHz carrier',
    image: '/images/projects/rfpulser.jpg',
    date: '2021-02',
    desc:
      'Designed a 6 GHz VCO with AM modulation and 20 dBm output power. '
      + 'Created as a side project while taking courses on Signals & Systems and RF Systems.',
  },
  {
    projectId: 'ecg-vest',
    title: '3-Lead ECG With ARM Dev Board',
    subtitle: 'For detecting arrhythmia in heartbeats',
    image: '/images/projects/ecg.jpg',
    date: '2020-08',
    desc:
      'Designed and built a 3-lead ECG for detecting irregular heartbeats. '
      + 'Planned future development includes detecting other conditions using machine learning.',
  },
  {
    projectId: 'pkm-go',
    title: 'PokemonGo Bot',
    subtitle: 'Automatically catches Pokémon, walks, evolves, and XP farms',
    image: '/images/projects/pokemongo.jpg',
    date: '2017-01',
    desc:
      'At the time, I was really into PokemonGo and wanted a way to level up without constant playing. '
      + 'As a fun project, I designed and built my own auto XP farming bot, including a pathfinding system to automatically walk and catch Pokémon.',
  },
];

const path = '../../data/projects';

const projectDetails = {
  'microplastics-resonator': {
    markdown: raw(`${path}/microplastics-resonator.md`),
  },
  'mmwave-radar': {
    markdown: raw(`${path}/mmwave-radar.md`),
  },
  'rf-pulser': {
    markdown: raw(`${path}/rf-pulser.md`),
  },
  'ecg-vest': {
    markdown: raw(`${path}/ecg-vest.md`),
  },
  'pkm-go': {
    markdown: raw(`${path}/pkm-go.md`),
  },
};

export default { projectCards, projectDetails };
