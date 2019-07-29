import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data;
  console.log(post);
  return (
    <Layout>
      <div>
        <h1>Mihai</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query {
        allSitePage {
            totalCount
        }
    }
`