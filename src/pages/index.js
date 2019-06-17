import React, { Component } from 'react';
import Layout from '../layouts';
import { graphql, Link } from 'gatsby';
import './index.scss';
import SEO from '../components/seo';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { decodeHtmlChars } from '../lib/util';

export default class PageTemplate extends Component {
  render() {
    const { data: { allWordpressPost: { nodes } } } = this.props;

    const posts = nodes.map(({ title, id, slug, date }) => (
        <h2 key={id}>
          <Link to={`/${slug}`}
                className='app-page-index__post-link'>
            {decodeHtmlChars(title)}
          </Link>
          <small className='app-page-index__post-date' title={date}>
            {`Posted ${distanceInWordsToNow(date)} ago`.toUpperCase()}
          </small>
        </h2>
      ),
    );

    return (
      <Layout>
        <SEO/>
        <div className='app-page-index'>
          {posts}
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      nodes {
        id
        title
        date
        slug
      }
    }
  }
`;
