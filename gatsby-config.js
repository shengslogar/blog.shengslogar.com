module.exports = {
  siteMetadata: {
    title: `Sheng Slogar's Blog`,
    description: `Thoughts about life.`,
    author: `@shengslogar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sheng Slogar's Blog`,
        short_name: `Sheng's Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#222222`,
        icon: `src/images/icon.png`,
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
