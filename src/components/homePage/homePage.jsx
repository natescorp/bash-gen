import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: '2vmin',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 'calc(100vh - 64px)',
    padding: '0 30px',
  },
});

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}><h1>pisos de madera</h1>
    </div>
  );
}

export default HomePage;
