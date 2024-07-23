import React from "react";
import { Route, Routes } from "react-router-dom";
// import routes from "routes";

import Layout from "./hocs/Layout";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Category from "./components/Category";
const App = () => (
  <Layout>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/blog" element={<Blog />} />
      <Route exact path="/category/:id" Component={Category} />
      <Route exact path="/blog/:id" Component={BlogDetail} />
    </Routes>
  </Layout>
);

export default App;
