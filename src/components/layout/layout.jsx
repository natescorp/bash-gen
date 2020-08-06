import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Header from "components/layout/header/header";

const useStyles = makeStyles({
  root: {
    padding: '3vmin',
  }
});

function Layout(props) {
  const classes = useStyles();

  return(
    <>
      <Header/>
      <CssBaseline />
      <Container maxWidth="lg" component="main" className={classes.root}>
          {props.children}
      </Container>
    </>
  );
}

export default Layout;