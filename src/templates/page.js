import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import './page.scss';

class PageTemplate extends Component {
  render() {
    const { data: { wordpressPage: { title, content } } } = this.props;

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: title }}/>
        <div dangerouslySetInnerHTML={{ __html: content }}/>
      </Layout>
    );
  }
}

export default PageTemplate;

export const query = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;
