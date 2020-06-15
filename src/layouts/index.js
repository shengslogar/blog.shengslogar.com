import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './index.scss';

const Layout = ({ children }) => (
  <div className='app'>
    <Link to='/'
          className='app__header'>
      Sheng Slogar
    </Link>
    <div className='app__body'>
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
