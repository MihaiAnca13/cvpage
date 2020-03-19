import React from "react"
import Layout from "../components/layout"
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
            Interests: robotics, machine learning, AI
          </p>
          <p>
            Favourite language: Python
          </p>
          <p>
            Frameworks I work in: PyTorch, Keras, Tensorflow 2, ROS
		  </p>
		  <p>
			Tools I know how to use: Linux, rviz, gazebo, MySQL, docker, git, raspberry pi, Arduino
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