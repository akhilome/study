import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
