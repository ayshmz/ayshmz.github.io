import React from 'react';
import Grid from '@mui/material/Grid';
import { ExperienceItem } from '../../components/experienceItem';
import { ProjectCard } from '../../components/projectCard';
import { aboutMeText, experienceInfo, projects } from './info';

export const AboutMe = () => <div>{aboutMeText}</div>;

export const Experiences = () => (
  <Grid
    container
    rowSpacing={3}
    sx={{
      fontSize: { xs: '3.0vh', sm: '2.0vw' },
      lineHeight: { xs: '3.5vh', sm: '3.0vw' },
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
    justifyContent='center'
    alignItems='center'
    rowSpacing={2}
    columnSpacing={2}
    sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
  >
    {projects.map((project, index) => (
      <ProjectCard {...project} key={`project-${index}`} />
    ))}
  </Grid>
);
