import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import './page.scss';
import SEO from '../components/seo';
import { decodeHtmlChars } from '../lib/util';

class PageTemplate extends Component {
  render() {
    const { data: { wordpressPage: { title, content } } } = this.props;
    return (
      <Layout>
        <SEO title={title}/>
        <div className='app-page'>
          <h1 className='app-page__title'>
            {decodeHtmlChars(title)}
          </h1>
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
