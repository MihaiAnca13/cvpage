import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "@reach/router"

export default ({ data }) => {
  console.log(data);
  let nodes = data.allDirectory.edges;
  nodes = nodes.map((item, key) =>
    <Link to={"/"+item.node.name} key={key}>{item.node.name}</Link>
  )

  return (
    <Layout>
      <div className="container">
        <h1>
          Portfolio
        </h1>
        {nodes}
      </div>
    </Layout>
  )
}

export const query = graphql`
    query
    {
        allDirectory(filter: {relativePath: {regex: "/projects//"}}) {
            edges {
                node {
                    name
                }
            }
        }
    }
`