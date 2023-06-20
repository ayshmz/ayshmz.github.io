import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { ExperienceToolTip } from '../experienceTooltip';

export const ExperienceItem = ({
  start,
  end,
  role,
  employer,
  description,
  tech,
}) => {
  const [moreInfo, setMoreInfo] = useState(false);
  let years = `${start} ~ ${end}`;
  if (!end) years = start;
  return (
    <>
      <Grid item xs={10} sm={2}>
        <div>{years}</div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          paddingLeft: { xs: '32px', sm: 0 },
        }}
        onClick={() => setMoreInfo(!moreInfo)}
      >
        {!moreInfo ? (
          <ExperienceToolTip
            arrow
            title={<React.Fragment>{tech}</React.Fragment>}
          >
            <Grid
              item
              className='role'
              sx={{ lineHeight: { xs: '3.5vh', sm: '2.5vw' } }}
            >
              {role}
            </Grid>
          </ExperienceToolTip>
        ) : (
          <Grid item className='role'>
            {role}
          </Grid>
        )}
      </Grid>
      <Grid item sm={4} sx={{ paddingLeft: { xs: '32px', sm: 0 } }}>
        <div>{employer}</div>
      </Grid>
      {moreInfo && (
        <Grid item xs={12} sx={{ lineHeight: { xs: '3.5vh', sm: 0 } }}>
          <strong>{description}</strong>
        </Grid>
      )}
    </>
  );
};

ExperienceItem.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  role: PropTypes.string.isRequired,
  employer: PropTypes.string.isRequired,
  description: PropTypes.string,
  tech: PropTypes.string,
};
