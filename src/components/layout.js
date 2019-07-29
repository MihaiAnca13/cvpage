import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
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
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://mysite.com/example"/>
      </Helmet>
      <header>
        <h2
          css={css`
            float: left;
            margin-top: 0px;
          `}>
          <Link to={`/`}>
            <span className="accent">Mihai</span> Anca
          </Link>
        </h2>
        <Link to={`/portfolio/`}>
          Portfolio
        </Link>
        <Link
          to={`/about/`}
        >
          About
        </Link>
      </header>
      <main>
      {
        children
      }
      </main>
      <footer>
        © <strong>Mihai Anca</strong> {(new Date().getFullYear())}
      </footer>
    </div>
  )
}