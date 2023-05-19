import React, { useEffect, useState } from 'react';
import { FrontPage } from '../../components/FrontPage';
import { Main } from '../../components/Main';

export const Landing = () => {
  const [showLanding, setShowLanding] = useState(false);
  console.log(showLanding);

  useEffect(() => {
    setTimeout(() => {
      setShowLanding(true);
    }, 3000);
  }, []);

  return (
    <div className='front-loading'>
      {showLanding ? (
        <div>
          <Main />
        </div>
      ) : (
        <FrontPage />
      )}
    </div>
  );
};
