import React from "react"
import Layout from "../components/Layout"

const HomePage = () => {

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

  return (
    <Layout>
      <main >
        <h1>
          Here is Home Page
        </h1>
        <a
          href={`https://translate.google.com/`}
        > link </a>
      </main>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>
