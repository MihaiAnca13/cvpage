import React from "react";

import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <h1>
        Oh no<span className="accent">!</span>
      </h1>
      <p>It seems like you have lost your way.</p>
    </div>
  </Layout>
);

export default NotFoundPage;