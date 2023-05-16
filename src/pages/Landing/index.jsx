import React, { useEffect, useState } from 'react';
import { FrontPage } from '../../components/FrontPage';
import { Sidebar } from '../../components/Sidebar';

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
          <Sidebar />
        </div>
      ) : (
        <FrontPage />
      )}
    </div>
  );
};
