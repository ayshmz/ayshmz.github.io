import React from 'react';
import { ReactComponent as CatSVG } from '../../assets/cat.svg';
import { ReactComponent as CatRightSVG } from '../../assets/cat_right.svg';
import '../../pages/Home/index.css';

// eslint-disable-next-line react/prop-types
export const LeftRunningCat = ({ isSafari }) => {
  return isSafari ? (
    <CatRightSVG
      className='runcat'
      style={{
        width: '10.0vw',
        height: '10.0vw',
      }}
    />
  ) : (
    <CatSVG
      className='runcat'
      style={{
        width: '10.0vw',
        height: '10.0vw',
      }}
    />
  );
};
