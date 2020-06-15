import React, { Component, Fragment } from 'react';
import Layout from '../layouts';
import SEO from '../components/seo';
import './post.scss';
import { dateToScreen, decodeHtmlChars, isSsr } from '../lib/util';
import { Disqus } from 'gatsby-plugin-disqus';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

class PostTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areCommentsVisible: false,
    };
  }

  openComments() {
    this.setState({
      areCommentsVisible: true,
    });
  }

  render() {
    const {
            data: {
              wordpressPost: { id: identifier, title, content, date },
              site: { siteMetadata: { url: siteUrl } },
            },
          } = this.props;

    const disqusConfig = isSsr()
      ? null
      : {
        url: `${siteUrl}${window.location.pathname}`,
        identifier,
        title,
      };

    return (
      <Layout>
        <SEO title={title}/>
        <div className='app-post'>
          <h1 className='app-post__title'>
            {decodeHtmlChars(title)}
          </h1>
          <div className='app-post__date'
               title={date}>
            {`Posted ${dateToScreen(date)}`}
          </div>
          <div className='app-post__content'
               dangerouslySetInnerHTML={{ __html: content }}/>
          {
            disqusConfig !== null
            && <Fragment>
              {
                this.state.areCommentsVisible
                  ? <Disqus config={disqusConfig}
                            className='app-post__comments'/>
                  : <button onClick={this.openComments.bind(this)}
                            className='app-post__comments-toggle'>
                    Load Comments
                  </button>
              }
            </Fragment>
          }
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
              wordpressPost(id: {eq: $id}) {
              id
              title
              content
              date
            },
              site {
              siteMetadata {
              url
            }
            }
            }
              `;
