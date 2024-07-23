import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    // const slug = props.match.params.id;

    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
        setBlog(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [slug]);

  const createBlog = () => {
    console.log({ __html: blog.content });
    return { __html: blog.content };
  };
  // const capitalizeFirstLetter = (word) => {
  //   if (word) return word.charAt(0).toUpperCase() + word.slice(1);
  // };

  return (
    <div className="container mt-3">
      <h1 className="display-2"> {blog.title}</h1>
      <h2 className="text-muted mt-3"> Category: {blog.category}</h2>
      <h4> month day</h4>
      <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
      <hr />
      <p className="lead mb-5">
        <Link to="/blog" className="font-weight-bold">
          back to Blog
        </Link>
      </p>
    </div>
  );
};

export default BlogDetails;

BlogDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

BlogDetails.defaultProps = {
  match: {
    params: {
      id: "",
    },
  },
};
