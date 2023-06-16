import React from 'react';
import { ReactComponent as CatSVG } from '../../assets/cat.svg';
import { ReactComponent as CatRunSVG } from '../../assets/cat_run.svg';
import '../../pages/Home/index.css';

export const LeftRunningCat = (
  <CatRunSVG
    className='runcat'
    style={{
      width: '10.0vw',
      height: '10.0vw',
    }}
  />
);

export const RightRunningCat = (
  <CatSVG
    className='leftcat'
    style={{
      width: '10.0vw',
      height: '10.0vw',
    }}
  />
);
