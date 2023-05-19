import React, { useState } from 'react';
import dayjs from 'dayjs';
import {
  // Drawer,
  // Box,
  // List,
  // ListItem,
  // ListItemButton,
  // ListItemIcon,
  // ListItemText,
  Grid,
} from '@mui/material';
// import { Home, Face4, AccountTree } from '@mui/icons-material';
import { ReactComponent as BookShelfSVG } from '../../assets/bookshelf.svg';
import { ReactComponent as SlightSmile } from '../../assets/slight_aya.svg';
import { ReactComponent as SmileSVG } from '../../assets/smile_aya.svg';
import { ReactComponent as DeskSVG } from '../../assets/newdesk.svg';
import { ReactComponent as LightSVG } from '../../assets/lightbulb.svg';
import { ReactComponent as NoLightSVG } from '../../assets/greylightbulb.svg';
import brickwall from '../../assets/brick-wall-painted-white.jpg';

import './index.css';

// const navBarIcons = {
//   Home: <Home />,
//   'About Me': <Face4 />,
//   Projects: <AccountTree />,
// };

export const Main = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [onPicture, setOnPicture] = useState(false);
  const [isLight, setIsLight] = useState(true);

  // const list = (
  //   <Box
  //     sx={{ width: 250 }}
  //     role='presentation'
  //     onClick={() => setIsOpen(!isOpen)}
  //     onKeyDown={() => setIsOpen(!isOpen)}
  //   >
  //     <List>
  //       {['Home', 'About Me', 'Projects'].map((text, index) => (
  //         <ListItem key={index} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>{navBarIcons[text]}</ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  const pos = { x: 0, y: 0 };
  const saveCursorPosition = (x, y) => {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty('--x', pos.x);
    document.documentElement.style.setProperty('--y', pos.y);
  };
  document.addEventListener('mousemove', (e) => {
    saveCursorPosition(e.clientX, e.clientY);
  });

  const saveTimePosition = () => {
    const hour = dayjs().hour();
    const minute = dayjs().minute();
    document.documentElement.style.setProperty(
      '--longhand',
      `${(minute * 6) % 360}deg`
    );
    document.documentElement.style.setProperty(
      '--shorthand',
      `${(hour * 30 - 90 + minute / 2) % 360}deg`
    );
  };
  saveTimePosition();

  return (
    <div
      style={{
        backgroundImage: `url(${brickwall})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        minHeight: '100vh',
      }}
    >
      <Grid
        container
        spacing={0}
        className='topshelf'
        justifyContent='space-evenly'
        alignItems='flex-end'
      >
        <Grid item xs={4}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              {onPicture ? (
                <SmileSVG
                  style={{ width: '150px' }}
                  onMouseEnter={() => setOnPicture(true)}
                  onMouseLeave={() => setOnPicture(false)}
                />
              ) : (
                <SlightSmile
                  style={{ width: '150px' }}
                  onMouseEnter={() => setOnPicture(true)}
                  onMouseLeave={() => setOnPicture(false)}
                />
              )}
            </Grid>
            <Grid item xs={12} className='linklabel'>
              About Me
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          {isLight ? (
            <LightSVG height='300px' onClick={() => setIsLight(!isLight)} />
          ) : (
            <NoLightSVG height='300px' onClick={() => setIsLight(!isLight)} />
          )}
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <BookShelfSVG width='300px' height='200px' />
            </Grid>
            <Grid item xs={12} className='linklabel'>
              Projects
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={0} className='desk' justifyContent='center'>
        <DeskSVG />
      </Grid>
      {/* <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
        {list}
      </Drawer> */}
    </div>
  );
};
