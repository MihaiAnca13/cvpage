import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Skill from "../components/skill"


export default () => (
  <Layout>
    <div className="container">
      <h1>
        About
      </h1>
      <div className="grid">
        <div className="column a">
          <p>
            Stuff about me
          </p>
          <p>
            That probably no one cares about
          </p>
          <p>
            But needs to be here so it impresses people
          </p>
        </div>
        <div className="column b">
          <h3>My Skills</h3>
          <Skill>Need</Skill>
          <Skill color="blue">To</Skill>
          <Skill color="green">Add</Skill>
          <Skill color="orange">Those</Skill>
          <Skill color="red">In</Skill>
          <hr />
          <a
            href="/documents/Mihai_Anca_CV.pdf"
            download="Mihai_Anca_CV.pdf"
            className="download button"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  </Layout>
)