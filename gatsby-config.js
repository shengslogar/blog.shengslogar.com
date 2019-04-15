module.exports = {
  siteMetadata: {
    title: `Sheng Slogar's Blog`,
    description: ``,
    author: `@shengslogar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: 'shengslogar.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
      },
    },
  ],
};
