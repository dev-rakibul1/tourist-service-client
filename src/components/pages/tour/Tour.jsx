import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tour = () => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setTour(data))
      .catch((err) => console.log(err));
  }, []);
  //   const { image, title } = tour;
  return (
    <div className="mt-72  min-h-screen ">
      <h3 className="text-center py-7 text-2xl">Choice your service</h3>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {tour.map((myTour) => (
          <div key={myTour._id}>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={myTour.images} alt="tour" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{myTour.title}</h2>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-lg">
                    Rating - <span> {myTour.rating}</span>{" "}
                    <FaStar className="inline text-green-800" />
                  </div>
                  <div>
                    <p>
                      <strong>Visiting fee ${myTour.charge}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* see all btn */}
      <div className="text-center py-16">
        <Link to={`/serviceDetails/:id`}>
          <button className="bg-pink-600 rounded-full py-2 px-6 inline w-32 text-white">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tour;
