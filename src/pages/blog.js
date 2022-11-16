import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as blogStyles from "./blog.module.scss"
import Head from "../components/head"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMM YY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulProject.edges.map(e => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${e.node.slug}`}>
                <h2>{e.node.title}</h2>
                <p>{e.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
