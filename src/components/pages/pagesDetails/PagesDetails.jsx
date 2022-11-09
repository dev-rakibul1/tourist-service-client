import React from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import UseTitle from "./../../useTitle/UseTitle";

const PagesDetails = () => {
  const services = useLoaderData();
  UseTitle("Service");

  return (
    <PhotoProvider>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-[90%] mx-auto px-2 mt-14">
        {services.map((service) => (
          <div
            className="card card-compact w-full bg-base-100 shadow-xl"
            key={service._id}
          >
            <figure>
              <PhotoView src={service.images}>
                <img src={service.images} alt="service images" />
              </PhotoView>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-lg">
                  <span>{service.rating}</span>{" "}
                  <FaStar className="inline text-green-800" />
                </div>
                <div>
                  <span>Visiting fee ${service.charge}</span>
                </div>
              </div>
              <p>
                {service.description.length > 100
                  ? service.description.slice(0, 100)
                  : service.description}
              </p>
              <Link
                to={`/tourist-all-services/${service._id}`}
                className="max-w-full block"
              >
                <button className="btn btn-active btn-primary rounded-full">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default PagesDetails;
