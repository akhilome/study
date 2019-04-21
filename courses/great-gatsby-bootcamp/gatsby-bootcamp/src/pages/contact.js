import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>I'm Available For A Chat!</h1>
        <p>You can hit me up on any of the following plaforms</p>
        <ul>
          <li>
            Email: <a href="mailto:kizito@akhilo.me">kizito[at]akhilo.me</a>
          </li>
          <li>
            Twitter: <a href="https://twitter.com/devkizito">@devkizito</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/kizitoakhilome">Kizito Akhilome</a>
          </li>
        </ul>
        <p>
          Again, you can read more about me <Link to="/about">here</Link>
        </p>
        <p>Looking forward to your message!</p>
      </Layout>
    </div>
  )
}

export default ContactPage
