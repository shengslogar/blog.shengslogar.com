import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './nav.scss';

const Nav = ({ links }) => {
  const markup = links.map(({ id, slug, title }) => (
    <Link key={id}
          to={`/${slug}`}
          className='app-nav__link'>
      {title.toUpperCase()}
    </Link>
  ));
  return (<div className='app-nav'>
    {markup}
  </div>);
};

Nav.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Nav;
