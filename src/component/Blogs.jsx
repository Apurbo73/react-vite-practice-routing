import React, { useState } from "react";
import data from "../../src/Data";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [dataBlogs, setData] = useState(data);
  console.log(dataBlogs);
  return (
    <div className=" mt-5">
      <h1 className="mb-5">Blogs Page</h1>

      <div className="d-flex flex-wrap">
        {dataBlogs.map(d => {
          return (
            <div className="card m-3" style={{ width: "18rem" }}>
              <img src={d.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  {d.title}
                </h5>
                <p className="card-text">
                  Id: {d.id}
                </p>
                <p style={{textAlign:"justify"}} className="card-text ">
                  Id: {d.description}
                </p>
                <Link to={d.title} className="btn btn-primary w-100">
                  See More...
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
