import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Are You Lost?" />
      <h1>FOUR OH FOUR!</h1>
      <p>
        <Link to="/">Go Home!</Link>
      </p>
    </Layout>
  )
}

export default NotFound
