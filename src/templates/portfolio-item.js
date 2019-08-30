import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import { Link } from "@reach/router"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  link: {
    color: "#032539",
    marginLeft: "0 !important"
  },
  activeLink: {
    color: "#1C768F"
  },
  paper: {
    paddingTop: "0.5em",
    marginLeft: "0.3em",
    backgroundColor: "#FBF3F2"
  },
}));

export default ({ data, location }) => {
  const post = data.markdownRemark
  const classes = useStyles();
  const links = location.pathname.split('/');

  if (links[links.length - 1] === "") {
    links.pop();
  }
  let project_name = links[links.length-2];
  project_name = project_name.replace(/_/g, " ");

  links.pop();

  return (
    <Layout>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={"/portfolio"} className={classes.link}>
            Portfolio
          </Link>
          <Link to={links.join("/")} className={classes.link}>
            {project_name}
          </Link>
          <Typography className={classes.activeLink}>{post.frontmatter.title}</Typography>
        </Breadcrumbs>
      </Paper>
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
        <div className="md-holder" dangerouslySetInnerHTML={{ __html: post.html }} />
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