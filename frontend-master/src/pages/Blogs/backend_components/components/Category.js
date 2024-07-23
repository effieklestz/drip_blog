import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);
  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    setCurrentCategory(category);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const fetchData = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/blog/category`,
          { category },
          config
        );
        setBlogs(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

  const getCategoryBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary-emphasis">
              {blogPost.category}
            </strong>
            <h3 className="mb-0">{blogPost.title}</h3>
            <div className="mb-1 text-body-secondary">
              {blogPost.month} {blogPost.day}
            </div>
            <p className="card-text mb-auto">{blogPost.excerpt}</p>
            <Link
              to={`/blog/${blogPost.slug}`}
              className="icon-link gap-1 icon-link-hover stretched-link"
            >
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img width="200" height="250" src={blogPost.thumbnail} alt="thumbnail" />
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <div className="container mt-3">
      <h3 className="display-4">{currentCategory} Category</h3>
      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-between">
          <Link className="nav-item nav-link link-body-emphasis active" to="category/world">
            World
          </Link>
          <Link className="nav-item nav-link link-body-emphasis" to="category/travel">
            Travel
          </Link>
          <Link className="nav-item nav-link link-body-emphasis" to="category/coffee">
            coffee
          </Link>
          <Link className="nav-item nav-link link-body-emphasis" to="category/work_life">
            Work Life
          </Link>
          <Link className="nav-item nav-link link-body-emphasis" to="category/digital_nomad">
            Digital Nomad
          </Link>
          <Link className="nav-item nav-link link-body-emphasis" to="category/food">
            Food
          </Link>
          <Link className="nav-item nav-link link-body-emphasis" to="category/hikes">
            Hikes
          </Link>
          <Link className="nav-item nav-link link-body-emphasis" to="category/beaches">
            Beaches
          </Link>
        </nav>
      </div>
      {getCategoryBlogs()}
    </div>
  );
};

export default Category;
