import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        I am an aspiring software developer currently based in South Yorkshrie
        but willing to relocate for work.
        <br />I have Just completed a 13 week full-stack coding bootcamp based
        around Javascript on which I spent 4 weeks on Javascript fundementals, 4
        weeks on back-end and 4 weeks on front-end finally finishing with a week
        final project in which I built a POS system.
        <p>
          <Link to="/contact">Contact me.</Link>
        </p>
      </p>
    </Layout>
  )
}

export default About
