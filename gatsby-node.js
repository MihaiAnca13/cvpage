const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `projects` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if (node.internal.type === `Directory` && node.relativeDirectory === `projects`) {
    const slug = createFilePath({ node, getNode, basePath: `projects` })
    createNodeField({
      node,
      name: `slug`,
      value: "/portfolio" + slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      },
      allDirectory(filter: {relativePath: {regex: "/projects//"}}) {
        edges {
          node {
            relativePath
            name
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allDirectory.edges.forEach(({ node }) => {
      let p = node.relativePath;
      p = "/(" + p + ")/";
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/project-item.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          relativePath: p
        },
      })
    })
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/portfolio-item.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug
        },
      })
    })
  })
}