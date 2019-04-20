import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Footer = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return <footer>Written by {author} © 2019</footer>
}

export default Footer
