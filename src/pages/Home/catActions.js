export const leftCatAction = {
  scrollY: {
    translateX: [
      ['elInY', 'elOutY'],
      [4100, -50],
      {
        inertia: 10,
      },
    ],
  },
};

export const runCatAction = {
  scrollY: {
    translateX: [
      ['elInY', 'elCenterY', 'elOutY'],
      ['-2*screenWidth', 'screenWidth/2', '2*screenWidth/3'],
    ],
  },
};
