import React, { useEffect, useState } from 'react';
import { FrontPage } from '../FrontPage';
import { Main } from '../Main';

const Landing = () => {
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    if (!window.sessionStorage.getItem('visited')) {
      setTimeout(() => {
        setShowLanding(true);
      }, 3000);
    } else {
      setShowLanding(true);
    }
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

export default Landing;
