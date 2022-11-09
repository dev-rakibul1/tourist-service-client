import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogData = useLoaderData();
  console.log(blogData);

  return (
    <>
      <h1 className="text-center text-pink-600 font-bold text-3xl py-7">
        Blog
      </h1>
      <div className="md:w-[50%] mx-auto">
        {blogData.map((data) => (
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
          >
            <div className="collapse-title text-xl font-medium text-green-800">
              {data.title}
            </div>
            <div className="collapse-content">
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
