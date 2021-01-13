import React, { memo } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Iframe from 'react-iframe';
import useStyles from './style';

const VideoPlayerMain = (props: any) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      data-testid="loading-page"
    >
      <Iframe
                // test url https://facecast.net/v/pybh3r?nolabel&noanimation&autorun=true&t=30
        url={props.videoURL}
        width="100%"
        height="auto"
        id="myId"
        className="myClassname"
        position="relative"
        allow="autoplay; fullscreen"
      />
    </Grid>
  );
};

export default memo(VideoPlayerMain);
