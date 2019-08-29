import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Grid from "@material-ui/core/Grid"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="container">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="baseline"
        >
          <Grid item>
            <h1>{post.frontmatter.title}</h1>
          </Grid>
          <Grid item>
            <p>{post.frontmatter.date}</p>
          </Grid>
        </Grid>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title,
                date
            }
        }
    }
`