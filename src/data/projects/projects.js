import React from 'react';

// TODO Add a couple lines about each project
const projectCards = [
  {
    projectId: 'microplastics-resonator',
    title: 'Microplastic Detection Using Microwave Resonators',
    subtitle: 'Improve human sustainability',
    link: 'https://todo.com',
    image: '/images/projects/microplastics.jpg',
    date: '2022-04',
    desc:
      'Developed a device to aid microbiologists in detecting microplastic in water to determine pollution in an ecosystem. '
      + 'This uses a 6GHz cavity resonator to measure dialetric properties of materials. '
      + 'Everything was simulated in Ansys HFSS and tested using a microfluidic pump and VNA.',
    details: {
      title: 'Microplastic Resonator',
      contents: (
        <p>Test with different stuff yoyo</p>
      ),
    },
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
