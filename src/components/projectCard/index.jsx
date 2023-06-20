import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import GitHub from '@mui/icons-material/GitHub';

export const ProjectCard = ({ title, image, description, link }) => {
  return (
    <Grid item xs={10} md={4}>
      <Card sx={{ height: '350px' }}>
        <CardMedia
          sx={{ height: 140 }}
          components='img'
          alt='project'
          image={image}
        ></CardMedia>
        <CardContent sx={{ height: { xs: '80px', sm: '120px' } }}>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label='github link'
            onClick={() => window.open(link)}
          >
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
  link: PropTypes.string,
};
