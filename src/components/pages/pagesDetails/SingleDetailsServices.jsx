import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaStar, FaTimes } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import userImg from "../../../asset/user.png";
import { AuthContext } from "./../../context/ContextProvider";
import UseTitle from "./../../useTitle/UseTitle";

const SingleDetailsServices = () => {
  UseTitle("Review");
  const { images, title, description, area, rating, charge } = useLoaderData();
  const [userRating, setUserRating] = useState([]);
  const { user } = useContext(AuthContext);

  const handleUserReview = (event) => {
    event.preventDefault();

    const form = event.target;
    const rating = form.rating.value;
    const message = form.message.value;

    if (message === " " || message.length < 15) {
      toast.error("Min 15 charter reviews");
      return;
    }

    const userReview = {
      rating: rating,
      message: message,
      images: images,
      title: title,
    };

    fetch("http://localhost:5000/userRating", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  // delete request
  const handleDeleteRating = (id) => {
    const agree = window.confirm("Are your sure delete this reviews");
    // console.log(id);

    if (agree) {
      fetch(`http://localhost:5000/userRating/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            const remaining = userRating.filter(
              (uRating) => uRating._id !== id
            );
            setUserRating(remaining);
          } else {
            toast.error(data.error);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  // user rating
  useEffect(() => {
    fetch("http://localhost:5000/userRating")
      .then((res) => res.json())
      .then((data) => setUserRating(data))
      .then((err) => console.log(err));
  }, []);

  return (
    <div className="md:flex gap-4 mt-16">
      <div className="md:w-[60%] px-3">
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

                <div className="rating py-4">
                  <input
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-green-800"
                    value="1"
                  />
                  <input
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-green-800"
                    value="2"
                  />
                  <input
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-green-800"
                    value="3"
                  />
                  <input
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-green-800"
                    checked
                    value="4"
                  />
                  <input
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-green-800"
                    value="5"
                  />
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
      <div className="md:w-[40%] px-3">
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

        {/* user rating */}
        <div className="mt-7">
          <table>
            <tr>
              <th>Place name</th>
              <th>Place images</th>
              <th>User</th>
              <th>User name</th>
              <th>User meg</th>
              <th>Rating</th>
              <th>Delete</th>
            </tr>
            {userRating.map((rating) => (
              <tr>
                <td>{rating?.title}</td>
                <td>
                  <img
                    src={rating?.images}
                    alt="rating images"
                    className="w-9"
                  />
                </td>
                <td>
                  <div className="text-center flex justify-center">
                    {user?.photoURL ? (
                      <img
                        src={user?.photoURL}
                        alt="user"
                        className="rounded-full w-16"
                      />
                    ) : (
                      <img
                        src={userImg}
                        alt="user"
                        className="rounded-full w-16"
                      />
                    )}
                  </div>
                </td>
                <td>
                  {" "}
                  {user?.displayName ? user?.displayName : "Name not found"}
                </td>
                <td>{rating.message.slice(0, 30)}</td>
                <td>{rating.rating} Star</td>
                <td
                  className="cursor-pointer"
                  onClick={() => handleDeleteRating(rating._id)}
                >
                  <FaTimes />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default SingleDetailsServices;
