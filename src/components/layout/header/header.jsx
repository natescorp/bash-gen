import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import * as TinyCookies from 'tiny-cookie';

const COOKIE_APPLICATION_X_AUTH_TOKEN = 'testJS';

const getTinyCookie = product => TinyCookies.get(`${COOKIE_APPLICATION_X_AUTH_TOKEN}_${product}`);

const setTinyCookie = (xAuthToken, product) =>
    TinyCookies.set(`${COOKIE_APPLICATION_X_AUTH_TOKEN}_${product}`, xAuthToken);

const setTinyCookieWithProps = (xAuthToken, product, props) =>
    TinyCookies.set(`${COOKIE_APPLICATION_X_AUTH_TOKEN}_${product}`, xAuthToken, props);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "inherit",
    textDecoration: "none",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}));

export default function Header() {
  const classes = useStyles();

  const onClickHandler = (e) => {
    e.preventDefault();

    localStorage.setItem('test', 'pisos');
    console.log('localStorage', localStorage);

    sessionStorage.setItem('test', 'pisos');
    console.log('sessionStorage', sessionStorage);

    document.cookie = 'test_path_simple=pisos;path=/';
    document.cookie = 'test_path_secure=pisosSecure;secure;path=/';
    document.cookie = 'test_path_noneSecure=pisosNoneSecure;samesite=none;secure;path=/';

    document.cookie = 'test_simple=pisos';
    document.cookie = 'test_secure=pisosSecure;secure';
    document.cookie = 'test_noneSecure=pisosNoneSecure;samesite=none;secure';
    console.log('Cookies', document.cookie);

    setTinyCookie('pisosTiny', 'simpleTiny');
    setTinyCookieWithProps('pisosSecureTiny', 'secureTiny', { sameSite: 'none', secure: true });
    console.log('Tiny-Cookie simple', getTinyCookie('simpleTiny'));
    console.log('Tiny-Cookie secure', getTinyCookie('secureTiny'));
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <a href="/" className={classes.link}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </a>
          <a href="/" className={classes.title}>
            <Typography variant="h6">Home</Typography>
          </a>
          <a href="/#" className={classes.link} onClick={onClickHandler}>
            <Button color="inherit">Set test Cookies</Button>
          </a>
          <a href="/bash" className={classes.link}>
            <Button color="inherit">Bash Gen</Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
