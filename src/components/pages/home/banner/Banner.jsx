import React from "react";

const Banner = () => {
  return (
    <div className="banner-bg absolute w-full py-16 bottom-[-50%] mt-60">
      <article className="bg-white w-[50%] p-5 ml-6 rounded-md flex flex-col">
        <h4 className="text-xl py-4 font-bold">
          Mr <span className="text-pink-600">Tour</span>
        </h4>
        <h2 className="banner-title text-4xl font-bold">
          Cambodia & Vietnam: <br /> Bonfires & Banh Mi
        </h2>
        <p className="py-4">Most popular place in the world!</p>
        <button className="bg-pink-600 rounded-full py-2 px-6 inline w-32 text-white">
          Visit here
        </button>
      </article>
    </div>
  );
};

export default Banner;
