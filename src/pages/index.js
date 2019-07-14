import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Particles from "react-particles-js"
import Typed from "react-typed"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default ({ data }) => {
  return (
    <Layout>
      <div id="home">
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800,
                },
              },
              "color": {
                "value": "#1c768f",
              },
              "shape": {
                "type": "polygon",
                "stroke": {
                  "width": 2,
                  "color": "#fbf3f2",
                },
                "polygon": {
                  "nb_sides": 3,
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100,
                },
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false,
                },
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false,
                },
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#fbf3f2",
                "opacity": 0.4,
                "width": 1,
              },
              "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200,
                },
              },
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse",
                },
                "onclick": {
                  "enable": false,
                  "mode": "push",
                },
                "resize": true,
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1,
                  },
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3,
                },
                "repulse": {
                  "distance": 150,
                  "duration": 0.4,
                },
                "push": {
                  "particles_nb": 4,
                },
                "remove": {
                  "particles_nb": 2,
                },
              },
            },
            "retina_detect": true,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}/>
        <div className="container">
          <h1>
            <Typed
              loop
              typeSpeed={80}
              backSpeed={20}
              strings={[
                "I'm <span class='accent'>Mihai</span> Anca.",
                "I'm a <span class='accent'>robotics</span> engineer.",
                "I'm a <span class='accent'>PhD</span> student.",
                "I'm ready to <span class='accent'>learn</span>.",
              ]}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
              className="typed"
            />
          </h1>
          <p>As an engineer with an undergoing PhD in robotics I am always
            looking for new opportunities and projects to fill up my spare time.</p>
        </div>
        <div className="container2">
          <a
            href="https://github.com/MihaiAnca13"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <FaGithub/>
          </a>
          <a
            href="https://www.linkedin.com/in/mihai-anca-7783b8167/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin/>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`