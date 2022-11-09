import React from "react";
import { PhotoProvider } from "react-photo-view";
import { Link } from "react-router-dom";
import AddServices from "../addService/AddServices";
import Tour from "../tour/Tour";
import TourApp from "../tourApp/TourApp";
import TravelMode from "../travelMode/TravelMode";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <>
      <PhotoProvider>
        <div className="hero">
          <div className="hero max-h-screen pt-24 pb-60 bg-base-200 w-[90%] mx-auto px-2 relative">
            <div className="hero-content flex-col md:flex-row">
              {/* title part */}
              <div className="text-center lg:text-left md:w-[50%] md:mt-92">
                <h1 className="text-5xl font-bold hero-title">
                  Exploring the <br /> World! A great <br /> choice of tours.
                </h1>
              </div>

              {/* details */}
              <div className="card flex-shrink-0 max-w-sm w-[50%] md:none">
                <div className="">
                  <p className="hero-details">
                    The most popular place tour in the world. our traveling area
                    is very popular in the world and most of the people like it.
                    There are have any type of comfort tools for enjoy the
                    people.
                  </p>
                  <Link to="/serviceDetails/:id">
                    <button className="btn btn-active btn-primary rounded-full px-9">
                      Get Started
                    </button>
                  </Link>
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
        <div className="w-[90%] mx-auto py-2 mt-32">
          <TravelMode />
        </div>

        {/* Add service */}
        <div className="w-[90%] mx-auto py-2 mt-32">
          <AddServices />
        </div>

        {/* download app */}
        <div className="w-[90%] mx-auto py-2 mt-32 ">
          <TourApp />
        </div>
      </PhotoProvider>
    </>
  );
};

export default Home;
