import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "@reach/router"

const color_list = ['#f44336', '#673ab7', '#2196f3', '#00bcd4', '#009688', '#4caf50', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#795548', '#607d8b'];

export default ({ data }) => {
  console.log(data);
  let nodes = data.allDirectory.edges;
  nodes = nodes.map((item, key) =>
    <div className="portfolio-item" style={{backgroundColor: color_list[key]}}>
      <Link to={"/portfolio/"+item.node.name} key={key}>{item.node.name}</Link>
    </div>
  )

  return (
    <Layout>
      <div className="container">
        <h1>
          Portfolio
        </h1>
        <div className="wrapper">
        {nodes}
        </div>
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