import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../src/Data";
const Blog = () => {
  const { title } = useParams();
  const [blogData, setData] = useState(" ");
  useEffect(() => {
    const detail = data.filter(d => d.title === title);
    setData(detail[0].description);
  }, []);
  return (
    <div className="container mx-auto">
      <div className="card m-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {title}
          </h5>
          <p style={{ textAlign: "justify" }} className="card-text ">
            {blogData}
          </p>
        </div>
      </div>
      <Link to="/blogs" className="btn btn-primary w-25 ">
        Back to blogs
      </Link>
    </div>
  );
};

export default Blog;
