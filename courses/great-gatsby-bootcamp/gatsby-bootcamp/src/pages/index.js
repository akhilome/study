import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Index = () => (
  <div>
    <Layout>
      <h1>Hi, I'm Kay!</h1>
      <p>Full Stack-ish software developer from Nigeria</p>
      <p>
        Find out more about me <Link to="/about">here</Link>
      </p>
    </Layout>
  </div>
)

export default Index
