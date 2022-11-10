import React from "react";
import imagesTour from "../../../asset/enjoy.jpg";
import UseTitle from "./../../useTitle/UseTitle";

const TravelMode = () => {
  UseTitle("Travel mode");
  return (
    <div>
      <div className=" ">
        <div className="hero-content flex-col lg:flex-row-reverse md:flex-row">
          <div className="md:w-[50%] mx-auto px-2">
            <img src={imagesTour} className=" rounded-lg max-w-full" />
          </div>
          <div className="md:w-[50%] mx-auto px-2">
            <h4 className="md:text-xl text-md py-4 font-bold">
              Happy traveling{" "}
              <span className="text-pink-600"> in your life </span>
            </h4>
            <h1 className="md:text-5xl text-2xl font-bold tour-mode-title">
              The travel to the any <br /> corner of the world!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary rounded-full px-9">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelMode;
