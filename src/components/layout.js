import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import { Helmet } from "react-helmet"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `,
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        padding: ${rhythm(1.5)};
        padding-top: ${rhythm(1)};
      `}
    >
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://mysite.com/example"/>
      </Helmet>
      <h3
        css={css`
            float: left;
            margin-top: 0px;
          `}>
        <Link
          to={`/`}>
          <span className="accent">Mihai</span> Anca
        </Link>
      </h3>
      < Link
        to={`/portfolio/`
        }
      >
        Portfolio
        < /Link>
          <Link
            to={`/about/`}
          >
            Contact
          </Link>
          {
            children
          }
    </div>
)
}