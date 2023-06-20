export const leftCatAction = {
  scrollY: {
    translateX: [
      ['elInY', 'elOutY'],
      ['2*screenWidth/3', '0'],
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
