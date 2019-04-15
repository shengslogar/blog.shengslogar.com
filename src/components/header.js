import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ siteTitle }) => (
  <header className='app-header'>
    <Link to='/'>
      <h1 className='app-header__h1'>
        {siteTitle}
      </h1>
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
