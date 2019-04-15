import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Header from '../components/header';
import './index.scss';

const DefaultLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className='app'>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <div className='app__body'>
          {children}
        </div>
      </div>
    )}
  />
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;