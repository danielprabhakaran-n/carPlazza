import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import LocalRoutes from "../routes/Routes";
import Layout from "../components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <LocalRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
