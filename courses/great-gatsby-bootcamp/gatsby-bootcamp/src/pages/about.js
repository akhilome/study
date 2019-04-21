import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About Me" />
        <h1>The Skinny On Me</h1>
        <p>
          As breifly pointed out on the homepage, I am a budding full-stack-ish
          software developer from Lagos Nigeria.
        </p>
        <p>
          At the moment, I am proficient with the following technologies and
          tools:
        </p>
        <ul>
          <li>Core Javascript (ES6 and onward)</li>
          <li>Node JS</li>
          <li>React</li>
          <li>Redux</li>
          <li>Angular</li>
          <li>SQL (worked with PGSQL extensively)</li>
          <li>MongoDB</li>
          <li>Git (annoyingly proficient with git and DVCS with GitHub)</li>
          <li>CI/CD with Circle CI/Travis CI</li>
          <li>Testing - unit, integration, and e2e</li>
          <li>HTML, Semantic HTML</li>
          <li>CSS (very very comfortable BEM-ing)</li>
          <li>SCSS</li>
          <li>
            Linux (not core Linux, yet, but very very comfortable in a CLI
            environment. Working my way up though).
          </li>
          <li>Heroku, Now.sh</li>
          <li>
            RESTful paradigms (built and written unit and integration tests for
            a handful of RESTful APIs at this point)
          </li>
          <li>Typescript</li>
          <li>Python - leveling up</li>
        </ul>
        <p>Some other tools I'm familiar with:</p>
        <ul>
          <li>NextJS</li>
          <li>Gatsby JS</li>
          <li>Wordpress</li>
        </ul>
        <p>
          Bar Core Software Development, I also have the following experience
        </p>
        <ul>
          <li>Copywriting</li>
          <li>Search Engine Optimization</li>
          <li>Affiliate Marketting</li>
        </ul>
        <h1>Say Hi</h1>
        <p>
          You can find out how to reach out to me from{" "}
          <Link to="/contact">here</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
