import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const SingleDetailsServices = () => {
  const { images, title, description, area, rating, charge } = useLoaderData();

  const handleUserReview = (event) => {
    event.preventDefault();

    const form = event.target;
    const rating1 = form.rating1.value;
    const message = form.message.value;
    console.log(rating1);
  };

  return (
    <div className="md:flex gap-11 mt-16">
      <div className="w-[65%] px-3">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={images} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="md:flex mt-7">
              <p className="flex items-center font-bold">
                People rating {rating} <FaStar className=" text-green-800" />
              </p>
              <p className="font-bold">Visiting Fee ${charge}</p>
              <p className="font-bold">Tour area in {area}</p>
            </div>
            <p className="mt-7">{description}</p>

            {/* user rating area */}
            <div className="mt-36">
              <h4 className="text-2xl">New review request</h4>
              <form className="" onSubmit={handleUserReview}>
                {/* review area */}
                <div className="user-rating flex ">
                  <label htmlFor="rate-5" className="hover:text-green-800">
                    <FaStar />
                  </label>
                  <input type="radio" name="rate" id="rate-5" />
                  <label htmlFor="rate-4" className="hover:text-green-800">
                    <FaStar />
                  </label>
                  <input type="radio" name="rate" id="rate-4" />
                  <label htmlFor="rate-3" className="hover:text-green-800">
                    <FaStar />
                  </label>
                  <input type="radio" name="rate" id="rate-3" />
                  <label htmlFor="rate-2" className="hover:text-green-800">
                    <FaStar />
                  </label>
                  <input type="radio" name="rate" id="rate-2" />
                  <label htmlFor="rate-1" className="hover:text-green-800">
                    <FaStar />
                  </label>
                  <input type="radio" name="rate" id="rate-1" />
                </div>
                <textarea
                  className="textarea textarea-primary w-full h-48 text-xl	"
                  placeholder="Your review text here..."
                  name="message"
                ></textarea>
                <input
                  type="submit"
                  value="Review submit"
                  className="btn btn-active btn-primary rounded-full px-9 mt-7"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%] px-3">
        <article>
          <h2 className="text-2xl booking-title mt-4">
            Booking your favourite place
          </h2>
          <h4 className="font-bold text-xl text-pink-600 mt-7">{title}</h4>
          <p className="flex items-center mt-2">
            <strong>People rating - </strong> {rating}{" "}
            <FaStar className="text-green-800" />
          </p>
          <p className="mt-2">
            <strong>Tourist area - </strong> {area}
          </p>
          <p className="mt-2">
            <strong>Service charge - </strong> ${charge}
          </p>
          <Link to={`/booking/:id`}>
            <button className="btn btn-active btn-primary mt-4 w-full rounded-full">
              Booking now
            </button>
          </Link>
        </article>
      </div>
    </div>
  );
};

export default SingleDetailsServices;
