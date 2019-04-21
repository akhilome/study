import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = ({ data: { markdownRemark } }) => {
  const {
    frontmatter: { title, date },
    html: __html,
  } = markdownRemark
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
    </Layout>
  )
}

export default Blog
