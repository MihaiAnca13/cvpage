import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "@reach/router"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(1),
    textAlign: "center",
    backgroundColor: "#1C768F",
    fontSize: theme.spacing(5),
  },
  text: {
    color: "#FBF3F2 !important"
  },
  cardMedia: {
    marginBottom: "0 !important"
  }
}))

export default ({ data }) => {
  const classes = useStyles();

  let nodes = data.allDirectory.edges
  nodes = nodes.map((item, key) => {
    let name = item.node.name;
    name = name.replace(/-/g, " ");

    return (
      <Grid item xs={12} sm={12} md={6} lg={3} xl={2} key={key}>
        <Card className={classes.card}>
          <Link to={"/portfolio/" + item.node.name}>
            <CardMedia
              component="img"
              alt={name}
              height="140"
              image={"/images/projects/"+item.node.name+"/image.png"}
              title={name}
              className={classes.cardMedia}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className={classes.color}>
                {name}
              </Typography>
              <Typography variant="body2" color="#FBF3F2" component="p">
                {item.node.fields.description}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </Grid>
    );
  }
  )

  return (
    <Layout>
      <div className="container">
        <h1>
          Portfolio
        </h1>
        <Grid container spacing={2}>
          {nodes}
        </Grid>
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
                    name,
                    fields {
                      description
                    }
                }
            }
        }
    }
`