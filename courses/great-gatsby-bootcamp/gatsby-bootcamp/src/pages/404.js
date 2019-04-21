import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <h1>FOUR OH FOUR!</h1>
      <p>
        <Link to="/">Go Home!</Link>
      </p>
    </Layout>
  )
}

export default NotFound
