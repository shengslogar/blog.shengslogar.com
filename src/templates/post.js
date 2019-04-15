import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../layouts';
import SEO from '../components/seo';
import './post.scss';

class PostTemplate extends Component {
  render() {
    const { data: { wordpressPost: { title, content } } } = this.props;

    return (
      <Layout>
        <SEO title={title}/>
        <div className='app-post'>
          <h1 className='app-post__title'
              dangerouslySetInnerHTML={{ __html: title }}/>
          <div className='app-post__content'
               dangerouslySetInnerHTML={{ __html: content }}/>
        </div>
      </Layout>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
};

export default PostTemplate;

export const query = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`;