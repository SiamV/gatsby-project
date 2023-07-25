import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const HomePage = (props) => {

  //example static query
  // import { graphql, useStaticQuery } from "gatsby"
  // const site = useStaticQuery(
  //   graphql`
  //   query{
  //     site {
  //       siteMetadata {
  //         title
  //         siteUrl
  //         description
  //       }
  //     }
  //   }`
  // )
  // console.log("site>>>", site) //metadata from gatsby-config.js
  const { nodes } = props.data.allMysqlPosts

  return (
    <Layout>
      <main >
        <h1>
          Туры по Мексике
        </h1>
        {nodes.map(post => <div key={post.mysqlId}>
          <Link to={`/${post.category}/${post.url}`}>{post.title}</Link>
        </div>)}
      </main>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>

export const query = graphql`
  query GetPosts {
    allMysqlPosts {
      nodes {
        mysqlId
        text
        title
        url
        category
      }
    }
}`
