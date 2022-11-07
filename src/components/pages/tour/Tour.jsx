import React, { useEffect, useState } from "react";

const Tour = () => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTour(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mt-72  ">
      <h3 className="text-center py-7 text-2xl">Choice your service</h3>
      <div className="grid grid-cols-3 gap-6">
        {tour.map((myTour) => (
          <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Tour;
