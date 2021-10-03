import React from 'react';
import useStyles from '../hooks/useStyles';
import {
  Backdrop,
  CircularProgress
} from '@mui/material';



export default function LoadingScreen(props) {
  const { isOpen = false } = props;
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={isOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}