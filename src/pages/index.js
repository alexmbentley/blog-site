import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const Home = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>NFT News and Updates</h1>
      <h2>Welcome to our blog</h2>
      <p>
        Want to be featured?<Link to="/contact">Contact us.</Link>
      </p>
    </Layout>
  )
}

export default Home
