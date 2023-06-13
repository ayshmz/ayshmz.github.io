import React, { useState } from 'react';
import dayjs from 'dayjs';
import {
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
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BookShelfSVG } from '../../assets/bookshelf.svg';
import { ReactComponent as SlightSmile } from '../../assets/slight_aya.svg';
import { ReactComponent as SmileSVG } from '../../assets/smile_aya.svg';
import { ReactComponent as DeskSVG } from '../../assets/newdesk.svg';
import { ReactComponent as CatSVG } from '../../assets/cat.svg';
import { ReactComponent as LightSVG } from '../../assets/lightbulb.svg';
import { ReactComponent as NoLightSVG } from '../../assets/greylightbulb.svg';
import brickwall from '../../assets/brick-wall-painted-white.jpg';
import './index.css';

const navBarIcons = {
  Home: <Home />,
  'About Me': <Face4 />,
  Projects: <AccountTree />,
};

const navBarLinks = {
  Home: '/',
  'About Me': '/about',
  Projects: '/projects',
};

const compText = [
  'Hello! My name is Aya!',
  'Please feel free to look around :)',
  'The main menu can be accessed by turning off the lamp.',
  'Projects I worked/am working on is in the bookshelf.',
  'Thanks for stopping by!',
  'Please click again to repeat.',
];

export const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onPicture, setOnPicture] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [compCounter, setCompCounter] = useState(0);
  window.sessionStorage.setItem('visited', true);
  const navigate = useNavigate();

  const menulist = (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={() => setIsOpen(!isOpen)}
    >
      <List>
        {['Home', 'About Me', 'Projects'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(navBarLinks[text])}>
              <ListItemIcon>{navBarIcons[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
        textAlign: 'center',
      }}
    >
      <Grid
        container
        spacing={0}
        className='topshelf'
        justifyContent='center'
        alignItems='flex-end'
      >
        <Grid item sm={4}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              {onPicture ? (
                <SmileSVG
                  style={{ width: '150px', height: '160px' }}
                  onMouseEnter={() => setOnPicture(true)}
                  onMouseLeave={() => setOnPicture(false)}
                  onClick={() => navigate('/about')}
                />
              ) : (
                <SlightSmile
                  style={{ width: '150px', height: '160px' }}
                  onMouseEnter={() => setOnPicture(true)}
                  onMouseLeave={() => setOnPicture(false)}
                  onClick={() => navigate('/about')}
                />
              )}
            </Grid>
            <Grid
              item
              xs={12}
              className='linklabel'
              paddingBottom={{ xs: '56px', sm: '12px' }}
            >
              About Me
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={4} display={{ xs: 'none', sm: 'block' }}>
          {isLight ? (
            <LightSVG
              height='300px'
              onClick={() => {
                setIsLight(!isLight);
                setIsOpen(!isOpen);
              }}
            />
          ) : (
            <NoLightSVG
              height='300px'
              onClick={() => {
                setIsLight(!isLight);
                setIsOpen(!isOpen);
              }}
            />
          )}
        </Grid>
        <Grid item sm={4}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <BookShelfSVG
                width='300px'
                height='200px'
                onClick={() => navigate('/projects')}
              />
            </Grid>
            <Grid
              item
              xs={12}
              className='linklabel'
              paddingBottom={{ xs: '56px', sm: '12px' }}
            >
              Projects
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={0} className='desk' justifyContent='center'>
        <Grid item sm={12} display={{ xs: 'none', sm: 'block' }}>
          <DeskSVG style={{ width: '100%' }} />
        </Grid>
        <Grid
          display={{ xs: 'none', sm: 'block' }}
          width={{ xs: '200px', md: '300px' }}
        >
          <div
            className='comptext'
            onClick={() => setCompCounter(compCounter + 1)}
          >
            {compText[compCounter % 6]}
          </div>
        </Grid>
        <Grid
          item
          sm={12}
          display={{ xs: 'block', sm: 'none' }}
          className='cat'
        >
          <CatSVG style={{ width: '150px', height: '160px' }} />
          <Grid item xs={12} className='linklabel'>
            Cats
          </Grid>
        </Grid>
      </Grid>
      <Drawer
        anchor='left'
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setIsLight(true);
        }}
      >
        {menulist}
      </Drawer>
    </div>
  );
};
