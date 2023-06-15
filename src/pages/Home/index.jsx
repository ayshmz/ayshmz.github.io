import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import lax from 'lax.js';
import { ExperienceItem } from '../../components/experienceItem';
import { ReactComponent as CatSVG } from '../../assets/cat.svg';
import { ReactComponent as CatRunSVG } from '../../assets/cat_run.svg';
import { aboutMeText, experienceInfo, projects } from './info';
import { ProjectCard } from '../../components/projectCard';
import './index.css';

const Home = () => {
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

  useEffect(() => {
    lax.init();
    lax.addDriver('scrollY', function () {
      return window.scrollY;
    });
    lax.addElements('.leftcat', {
      scrollY: {
        translateX: [
          ['elInY', 'elOutY'],
          [4100, -50],
          {
            inertia: 10,
          },
        ],
      },
    });
    lax.addElements('.runcat', {
      scrollY: {
        translateX: [
          {
            500: [],
            900: ['elInY', 'elOutY'],
            1400: ['elInY', 'elOutY'],
          },
          {
            500: [],
            900: [-800, 1000],
            1400: [-600, 1700],
          },
          {
            inertia: 10,
          },
        ],
      },
    });
  }, []);

  return (
    <div style={{ margin: '10vh 0' }}>
      <Grid container rowSpacing={4} justifyContent={'center'}>
        <Grid item xs={11} alignSelf={'center'}>
          <CatSVG
            className='leftcat'
            style={{
              width: '10.0vw',
              height: '10.0vw',
            }}
          />
        </Grid>
        <Grid item xs={9} alignSelf={'center'}>
          <div
            style={{
              fontSize: '5.0vw',
              lineHeight: '5.5vw',
              fontFamily: 'Inconsolata',
            }}
          >
            {aboutMeText}
          </div>
        </Grid>
        <Grid item xs={11} alignSelf={'center'}>
          <CatRunSVG
            className='runcat'
            style={{
              width: '10.0vw',
              height: '10.0vw',
            }}
          />
        </Grid>
        <Grid
          item
          xs={10}
          style={{
            fontSize: '2.25vw',
            lineHeight: '3.5vw',
            fontFamily: 'Inconsolata',
          }}
        >
          <strong>My work journey:</strong>
        </Grid>
        <Grid item xs={10} alignSelf={'center'}>
          <Grid
            container
            rowSpacing={3}
            style={{
              fontSize: '2.0vw',
              lineHeight: '3.0vw',
              fontFamily: 'Inconsolata',
            }}
          >
            {experienceInfo.map((info, index) => (
              <ExperienceItem {...info} key={`experience-${index}`} />
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={10}
          style={{
            marginTop: '5vw',
            fontSize: '2.25vw',
            lineHeight: '3.5vw',
            fontFamily: 'Inconsolata',
          }}
        >
          <strong>Projects:</strong>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            rowSpacing={2}
            columnSpacing={{ xs: 4, sm: 3 }}
          >
            {projects.map((project, index) => (
              <ProjectCard {...project} key={`project-${index}`} />
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={10}
          style={{
            marginTop: '5vw',
            fontSize: '2.25vw',
            lineHeight: '3.5vw',
            fontFamily: 'Inconsolata',
          }}
        >
          <strong>Contact Me!</strong>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
