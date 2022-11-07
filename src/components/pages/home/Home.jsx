import React from "react";
import Tour from "../tour/Tour";
import TourApp from "../tourApp/TourApp";
import TravelMode from "../travelMode/TravelMode";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero max-h-screen py-60 bg-base-200 w-[90%] mx-auto px-2 relative">
          <div className="hero-content flex-col md:flex-row">
            {/* title part */}
            <div className="text-center lg:text-left w-[50%]">
              <h1 className="text-5xl font-bold hero-title">
                Exploring the <br /> World! A great <br /> choice of tours.
              </h1>
            </div>

            {/* details */}
            <div className="card flex-shrink-0 max-w-sm w-[50%]">
              <div className="">
                <p className="hero-details">
                  The most popular place tour in the world. our traveling area
                  is very popular in the world and most of the people like it.
                  There are have any type of comfort tools for enjoy the people.
                </p>
                <button className="btn btn-active btn-primary">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* hero banner */}
          <Banner />
        </div>
      </div>

      {/* tour */}
      <div className="w-[90%] mx-auto px-2">
        <Tour />
      </div>

      {/* travel mode */}
      <div className="w-[90%] mx-auto py-2 mt-44">
        <TravelMode />
      </div>

      {/* download app */}
      <div className="w-[90%] mx-auto py-2 mt-44 ">
        <TourApp />
      </div>
    </>
  );
};

export default Home;
