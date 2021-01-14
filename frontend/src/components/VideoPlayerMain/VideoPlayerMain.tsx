import React, { memo, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Iframe from 'react-iframe';
import $ from 'jquery';
import { createPortal } from 'react-dom';
import useStyles from './style';

const VideoPlayerMain = (props: any) => {
  const classes = useStyles();

  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef;
  const inputRef: any = React.useRef<HTMLInputElement>(null); // note the passed in `null` arg

  const playVideo = (): any => {
    setTimeout(
      () => {
        // $('#myId').click();
        console.log('inputRef :>> ', inputRef);
        inputRef.current.click();
        const event = $.Event('click');
        event.clientX = 10;
        event.clientY = 10;
        $('.myClassname2').trigger(event);
        // console.log(inputRef.node.contentWindow.document.getElementById("myId").value);
      },
      5000,
    );
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      data-testid="loading-page"
    >
      <div
        className="myClassname2"
        ref={inputRef}
      >
        <Iframe
          // test url https://facecast.net/v/pybh3r?nolabel&noanimation&autorun=true&t=30
          url={props.videoURL}
          width="100%"
          height="auto"
          id="myId"
          className="myClassname"
          position="relative"
          allow="fullscreen"
          onLoad={playVideo()}
        />
      </div>
    </Grid>

  );
};

export default memo(VideoPlayerMain);
