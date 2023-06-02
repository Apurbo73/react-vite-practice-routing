import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore odit
        sed expedita delectus, omnis nihil asperiores nisi a, cupiditate modi
        fugiat dolorum vitae quia minus dolore aspernatur ut natus ab, facilis
        totam deleniti ipsam suscipit. Maiores ut, accusamus vel, reprehenderit
        blanditiis eius ex dignissimos eum consequuntur, corporis provident
        molestias esse.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id
        debitis similique cupiditate repellat fugit iure quod atque corporis
        saepe!
      </p>
      <Link to="/">
        <button className="btn btn-danger">Home</button> 
      </Link> <br />
      <button className="btn btn-primary"
       onClick={()=>{navigate("/blogs")}}>useNavigate to Blogs</button>
    </div>
  );
};

export default Contact;
