const path = require("path")

//// => Generate slugs based on file names
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

//// => create pages based on local md files
// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogTemplate = path.resolve("./src/templates/blog.js")
//   const {
//     data: {
//       allMarkdownRemark: { edges },
//     },
//   } = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   edges.forEach(edge => {
//     const {
//       node: {
//         fields: { slug },
//       },
//     } = edge
//     createPage({
//       component: blogTemplate,
//       path: `/blog/${slug}`,
//       context: {
//         slug,
//       },
//     })
//   })
// }

// Generate pages from contentful data 👇🏾
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const {
    data: {
      allContentfulBlogPost: { edges },
    },
  } = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  edges.forEach(edge => {
    const {
      node: { slug },
    } = edge
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    })
  })
}
