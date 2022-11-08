import React, { useContext } from "react";
import { AuthContext } from "./../../context/ContextProvider";

const Blog = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>Blog components {user?.name}</h1>
    </div>
  );
};

export default Blog;
