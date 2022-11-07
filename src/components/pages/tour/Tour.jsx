import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Tour = () => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTour(data))
      .catch((err) => console.log(err));
  }, []);
  //   const { image, title } = tour;
  return (
    <div className="mt-72  min-h-screen ">
      <h3 className="text-center py-7 text-2xl">Choice your service</h3>
      <div className="grid grid-cols-3 gap-6">
        {tour.map((myTour) => (
          <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={myTour.images} alt="tour" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{myTour.title}</h2>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-lg">
                    <span>{myTour.rating}</span>{" "}
                    <FaStar className="inline text-green-800" />
                  </div>
                  <div>
                    <button className="bg-pink-600 rounded-full py-2 px-6 inline w-32 text-white">
                      See details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* see all btn */}
      <div className="text-center py-7">
        <button className="bg-pink-600 rounded-full py-2 px-6 inline w-32 text-white">
          See All
        </button>
      </div>
    </div>
  );
};

export default Tour;
