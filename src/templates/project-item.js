import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "@reach/router"

export default ({ data }) => {
  let project_name = "";
  let nodes = data.allMarkdownRemark.edges;
  nodes = nodes.map((item, key) => {
    let aPath = item.node.fileAbsolutePath;
    aPath = aPath.split('/');
    let aux = aPath[aPath.length-1];
    aux = aux.substr(0, aux.length-3);
    const p = "/portfolio/" + aPath[aPath.length-2] + "/" + aux;
    project_name = aPath[aPath.length-2];

    return (<Link to={p} key={key}>{item.node.frontmatter.title}</Link>)
  })

  if (project_name === "") {
    project_name = "This project is empty"
  }

  return (
    <Layout>
      <div  className="container">
        <h1>{project_name}</h1>
        {nodes}
      </div>
    </Layout>
  )
}

export const query = graphql`
    query($relativePath: String!) {
        allMarkdownRemark (filter: {fileAbsolutePath: {regex: $relativePath}}){
            edges {
                node {
                    frontmatter {
                        title
                    }
                    fileAbsolutePath
                }
            }
        }
    }
`