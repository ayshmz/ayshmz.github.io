import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Grid,
} from '@mui/material';
import { GitHub } from '@mui/icons-material';

export const ProjectCard = ({ title, image, description }) => {
  console.log('is this running....?');
  return (
    <Grid item xs={3}>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          components='img'
          alt='project'
          image={image}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label='github link'>
            <GitHub />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
