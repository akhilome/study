import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

// // Sourcing from md in fs
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// const Blog = ({ data: { markdownRemark } }) => {
//   const {
//     frontmatter: { title, date },
//     html: __html,
//   } = markdownRemark
//   return (
//     <Layout>
//       <h1>{title}</h1>
//       <p>{date}</p>
//       <div dangerouslySetInnerHTML={{ __html }} />
//     </Layout>
//   )
// }

// Sourcing from contentful 👇🏾
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(fromNow: true)
      body {
        json
      }
    }
  }
`

const Blog = ({
  data: {
    contentfulBlogPost: {
      title,
      publishedDate,
      body: { json },
    },
  },
}) => {
  const options = {
    renderNode: {
      "embedded-asset-block": ({
        data: {
          target: { fields },
        },
      }) => {
        const alt = fields.title["en-US"]
        const url = fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(json, options)}
    </Layout>
  )
}

export default Blog
