import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const Index = () => (
  <div>
    <Header />
    <h1>Hi, I'm Kay!</h1>
    <p>Full Stack-ish software developer from Nigeria</p>
    <p>
      Find out more about me <Link to="/about">here</Link>
    </p>
    <Footer />
  </div>
)

export default Index
