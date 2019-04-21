import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const BlogPage = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            timeToRead
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <h1>Blog Page</h1>
        <ol>
          {edges.map(edge => (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          ))}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
