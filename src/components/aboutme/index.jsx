import React from 'react';
import Grid from '@mui/material/Grid';
import { ExperienceItem } from '../../components/experienceItem';
import { ProjectCard } from '../../components/projectCard';
import { aboutMeText, experienceInfo, projects } from './info';

export const AboutMe = () => (
  <div
    style={{
      fontSize: '5.0vw',
      lineHeight: '5.5vw',
      fontFamily: 'Inconsolata',
    }}
  >
    {aboutMeText}
  </div>
);

export const Experiences = () => (
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
);

export const Projects = () => (
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
);
