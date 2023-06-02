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
          const { id, image, title, description } = d;
          return (
            <div className="card m-3" style={{ width: "18rem" }}>
              <img src={d.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  {title}
                </h5>
                <p className="card-text">
                  Id: {id}
                </p>
                <Link
                  to={d.title}
                  state={{ image, description, id }}
                  className="btn btn-primary w-100"
                >
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
