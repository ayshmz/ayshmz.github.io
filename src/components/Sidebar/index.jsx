import React, { Fragment, useState } from 'react';
import {
  Button,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
} from '@mui/material';
import { Home, Face4, AccountTree } from '@mui/icons-material';
import { ReactComponent as BookShelfSVG } from '../../assets/bookshelf.svg';
import { ReactComponent as SlightSmile } from '../../assets/slight_aya.svg';
import { ReactComponent as SmileSVG } from '../../assets/smile_aya.svg';
import { ReactComponent as DeskSVG } from '../../assets/desk.svg';
import { ReactComponent as LightSVG } from '../../assets/lightbulb.svg';
import { ReactComponent as NoLightSVG } from '../../assets/greylightbulb.svg';
import './index.css';

const navBarIcons = {
  Home: <Home />,
  'About Me': <Face4 />,
  Projects: <AccountTree />,
};

const deskCSS = {
  'place-content': 'center',
  display: 'inline-flex',
  'margin-left': '96px',
  width: '1200px',
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onPicture, setOnPicture] = useState(false);
  const [isLight, setIsLight] = useState(true);

  const list = (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={() => setIsOpen(!isOpen)}
    >
      <List>
        {['Home', 'About Me', 'Projects'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{navBarIcons[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const pos = { x: 0, y: 0 };
  const saveCursorPosition = function (x, y) {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);
    console.log(pos.x, pos.y);
    document.documentElement.style.setProperty('--x', pos.x);
    document.documentElement.style.setProperty('--y', pos.y);
  };

  document.addEventListener('mousemove', (e) => {
    saveCursorPosition(e.clientX, e.clientY);
  });

  return (
    <Fragment>
      <Grid container spacing={12} className='topshelf'>
        <Grid item xs={4}>
          <Grid container spacing={0}>
            <Grid item xs={12} spacing={0}>
              {onPicture ? (
                <SmileSVG
                  width='200px'
                  height='200px'
                  onMouseEnter={() => setOnPicture(true)}
                  onMouseLeave={() => setOnPicture(false)}
                />
              ) : (
                <SlightSmile
                  width='200px'
                  height='200px'
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
        <Grid item xs={4} spacing={0} onClick={() => setIsLight(!isLight)}>
          {isLight ? (
            <LightSVG height='300px' />
          ) : (
            <NoLightSVG height='300px' />
          )}
        </Grid>
        <Grid item xs={4} spacing={0}>
          <Grid container spacing={4}>
            <Grid item xs={12} spacing={0}>
              <BookShelfSVG width='400px' height='200px' />
            </Grid>
            <Grid item xs={12} className='linklabel'>
              Projects
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={12} style={deskCSS}>
        <DeskSVG />
      </Grid>
      <Button onClick={() => setIsOpen(!isOpen)}>Menu</Button>
      <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
        {list}
      </Drawer>
    </Fragment>
  );
};
