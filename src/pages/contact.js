import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <h3>
        Name: Alex Bentley
        <br />
        Email: AlexanderMBentley@gmail.com
        <br />
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/alexmbentley/">Click here</a>
      </h3>
    </Layout>
  )
}

export default Contact
