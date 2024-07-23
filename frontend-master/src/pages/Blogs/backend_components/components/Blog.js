import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  <div>blog</div>;
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
        setFeaturedBlog(res.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogs();
  }, []);
  // const capitalizeFirstLetter = (word) => {
  //   if (word) return word.charAt(0).toUpperCase() + word.slice(1);
  // };
  const getBlogs = () => {
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
      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <button
            type="button"
            className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
            aria-label="Close"
          ></button>

          <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
          <p className="col-lg-6 mx-auto mb-4">
            This faded back jumbotron is useful for placeholder content. It&aposs also a great way
            to add a bit of context to a page or section when no content is available and to
            encourage visitors to take a specific action.
          </p>
          <button className="btn btn-primary px-5 mb-5" type="button">
            Call to action
          </button>
        </div>
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">{featuredBlog.title}</h1>
            <p className="lead my-3"> {featuredBlog.excerpt}</p>
            <p className="lead mb-0">
              <Link to={`/blog/${featuredBlog.slug}`} className="text-body-emphasis fw-bold">
                Continue reading
              </Link>
            </p>
          </div>
        </div>
      </div>
      {getBlogs()}
    </div>
  );
};

export default Blog;
