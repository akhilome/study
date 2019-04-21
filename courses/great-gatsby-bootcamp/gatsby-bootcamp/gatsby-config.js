module.exports = {
  siteMetadata: {
    title: "Kizito's Place",
    author: "Kizito Akhilome",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
}
