module.exports = {
  siteMetadata: {
    title: "Gatsby-site"
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
