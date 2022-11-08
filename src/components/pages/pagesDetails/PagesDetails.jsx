import React from "react";
import { useLoaderData } from "react-router-dom";

const PagesDetails = () => {
  const services = useLoaderData();

  return (
    <div>
      <h1>Details {services.length}</h1>
    </div>
  );
};

export default PagesDetails;
