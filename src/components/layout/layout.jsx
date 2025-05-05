import React from "react";
import PropTypes from 'prop-types';
import Header from "./header/header";
import './Layout.css';

const Layout = ({ children }) => (
  <>
    <Header/>
    <div className="layout">
      { children }
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
