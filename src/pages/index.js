import React, { Component } from 'react';
import Layout from '../layouts';
import { graphql, Link } from 'gatsby';
import './index.scss';
import SEO from '../templates/post';

export default class PageTemplate extends Component {
  render() {
    const { data: { allWordpressPost: { nodes } } } = this.props;

    const posts = nodes.map(({ title, id, slug }) => (
        <h2 key={id}>
          <Link to={`/${slug}`}
                className='app-page-index__post-link'
                dangerouslySetInnerHTML={{ __html: title }}/>
        </h2>
      ),
    );

    return (
      <Layout>
        <SEO title='Posts'/>
        <div className='app-page-index'>
          {posts}
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        id
        title
        slug
      }
    }
  }
`;
