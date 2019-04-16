import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import './page.scss';
import SEO from '../components/seo';

class PageTemplate extends Component {
  render() {
    const { data: { wordpressPage: { title, content } } } = this.props;
    return (
      <Layout>
        <SEO title={title}/>
        <div className='app-page'>
          <h1 dangerouslySetInnerHTML={{ __html: title }}
              className='app-page__title'/>
          <div dangerouslySetInnerHTML={{ __html: content }}
               className='app-page__content'/>
        </div>
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
