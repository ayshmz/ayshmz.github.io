import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
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
      <Grid item xs={2}>
        <div>{years}</div>
      </Grid>
      <Grid item xs={6} onClick={() => setMoreInfo(!moreInfo)}>
        {!moreInfo ? (
          <ExperienceToolTip
            arrow
            moreInfo
            title={<React.Fragment>{tech}</React.Fragment>}
          >
            <div className='role'>{role}</div>
          </ExperienceToolTip>
        ) : (
          <div className='role'>{role}</div>
        )}
      </Grid>
      <Grid item xs={4}>
        <div>{employer}</div>
      </Grid>
      {moreInfo && (
        <Grid item xs={12}>
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
