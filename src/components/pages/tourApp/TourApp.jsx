import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const TourApp = () => {
  return (
    <div className="text-center">
      <h2 className="md:text-5xl text-2xl md:text-green-900">
        Download the Tour.link app, now!
      </h2>
      <p className="md:text-xl text-md md:font-semibold font-thin mt-4">
        Get the latest update from us and easier booking for sure
      </p>
      <div className="md:flex items-center justify-center mt-7">
        <div className="flex items-center bg-black text-white p-4 rounded-md m-2 cursor-pointer">
          <FaGooglePlay className="text-4xl" />{" "}
          <div className="ml-4">
            <small className="uppercase font-thin">Get it on</small>
            <h4 className="text-2xl font-semibold -mt-2">Google Play</h4>
          </div>
        </div>
        <div className="m-2 cursor-pointer">
          <div className="flex items-center bg-black text-white p-4 rounded-md">
            <FaApple className="text-4xl" />{" "}
            <div className="ml-4">
              <small className="uppercase font-thin">Download on the</small>
              <h4 className="text-2xl font-semibold -mt-2">Apple store</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourApp;
