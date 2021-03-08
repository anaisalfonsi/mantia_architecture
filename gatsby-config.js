module.exports = {
  siteMetadata: {
    title: "Mantia_Navigation",
    siteUrl: "https://determined-hoover-1d1e72.com"
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/favicon.ico",
      }
    }
  ],
};
