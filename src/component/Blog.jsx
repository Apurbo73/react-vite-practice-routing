import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import data from "../../src/Data";
const Blog = () => {
  const { title } = useParams();
  const location = useLocation();
//   console.log(location)
//   const [blogData, setData] = useState(" ");
//   useEffect(() => {
//     const detail = data.filter(d => d.title === title);
//     setData(detail[0].description);
//   }, []);
  return (
    <div className="container mx-auto">
      <div className="card m-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center">
            {title}
          </h5>
          <p style={{ textAlign: "justify" }} className="card-text ">
            {location.state.description}
          </p>
          <img src={location.state.image} className="card-img-top" alt="..." />

        </div>
      </div>
      <Link to="/blogs" className="btn btn-primary w-25 ">
        Back to blogs
      </Link>
    </div>
  );
};

export default Blog;
