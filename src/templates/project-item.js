import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "@reach/router"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import { makeStyles } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#1C768F",
    padding: "0.1em",
    fontSize: "1.5em",
    color: "#FBF3F2",
  },
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
  expansionPanel: {
    height: "auto",
    backgroundColor: "#FBF3F2",
    width: "96%",
    color: "#032539",
    position: "relative",
    left: "2%",
    top: "-0.1em",
    borderBottomLeftRadius: "0.3em",
    borderBottomRightRadius: "0.3em",
    paddingLeft: "1em",
    border: "1px solid #1C768F",
    borderTop: "0px"
  },
  item: {
    paddingBottom: "0.5em"
  }
}))

export default ({ data, location }) => {
  const classes = useStyles()
  let pathname = location.pathname;

  pathname = pathname.split("/");

  if (pathname[pathname.length - 1] === "") {
    pathname.pop();
  }
  let project_name = pathname[pathname.length - 1];
  project_name = project_name.replace(/_/g, " ");

  let nodes = data.allMarkdownRemark.edges;

  nodes = nodes.map((item, key) => {
    let aPath = item.node.fileAbsolutePath;
    aPath = aPath.split("/");
    let aux = aPath[aPath.length - 1];
    aux = aux.substr(0, aux.length - 3);
    const p = "/portfolio/" + aPath[aPath.length - 2] + "/" + aux;

    return (
      <div key={key} className={classes.item}>
        <Link to={p}>
          <Card className={classes.card}>
            <CardActionArea>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="baseline"
              >
                <Grid item>
                  <span>{item.node.frontmatter.title}</span>
                </Grid>
                <Grid item>
                  <span>{item.node.frontmatter.date}</span>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        </Link>
          <div className={classes.expansionPanel}>{item.node.frontmatter.summary}</div>
      </div>
    )
  })

  return (
    <Layout>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={"/portfolio"} className={classes.link}>
            Portfolio
          </Link>
          <Typography className={classes.activeLink}>{project_name}</Typography>
        </Breadcrumbs>
      </Paper>
      <div className="container">
        <h1>{project_name}</h1>
        {nodes.length < 1 ?
        <h3>This project is empty</h3> :
        nodes}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($relativePath: String!) {
    allMarkdownRemark(sort: {fields: frontmatter___date}, filter: {fileAbsolutePath: {regex: $relativePath}}){
      edges {
        node {
          frontmatter {
            title,
            date,
            summary
          }
          fileAbsolutePath
          }
        }
      }
    }
  `