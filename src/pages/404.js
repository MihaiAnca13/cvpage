import React from "react";

import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <title>404 Not Found</title>
    <div className="container" style={{ marginTop: "2rem" }}>
      <h1>
        Oh no<span className="accent">!</span>
      </h1>
      <p>It seems like you have lost your way.</p>
    </div>
  </Layout>
);

export default NotFoundPage;