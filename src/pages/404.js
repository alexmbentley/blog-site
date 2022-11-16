import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <div>Page not found</div>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default NotFound
