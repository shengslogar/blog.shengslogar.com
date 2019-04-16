import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import './index.scss';
import Nav from '../components/nav';

const Layout = ({ children }) => (
  <div className='app'>
    <Link to='/'
          className='app__header'>
      S/S
    </Link>
    <div className='app__nav'>
      <StaticQuery
        query={graphql`{
          allWordpressPage {
            nodes {
              id
              title
              slug
            }
          }
        }`}
        render={({ allWordpressPage: { nodes } }) => (
          <Nav links={nodes}/>
        )}/>
    </div>
    <div className='app__body'>
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
