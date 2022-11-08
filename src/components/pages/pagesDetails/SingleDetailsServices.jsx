import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const SingleDetailsServices = () => {
  const { images, title, description, area, rating, charge } = useLoaderData();
  return (
    <div className="md:flex">
      <div className="w-[75%] px-3">
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
              <form className="mt-3">
                <div className="rating py-7">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                {/* review area */}
                <textarea
                  className="textarea textarea-primary w-full h-48 text-xl	"
                  placeholder="Your review text here..."
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
      <div className="w-[25%] px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          architecto deleniti commodi molestiae corrupti sit! Minus veritatis
          laboriosam sapiente iusto! Voluptatum dolores cum alias quod
          voluptatem iure est inventore. Numquam.
        </p>
      </div>
    </div>
  );
};

export default SingleDetailsServices;
