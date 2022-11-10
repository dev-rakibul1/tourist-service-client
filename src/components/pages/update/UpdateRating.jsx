import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import UseTitle from "./../../useTitle/UseTitle";

const UpdateRating = () => {
  UseTitle("Rating update");
  const userRatingData = useLoaderData();
  const [userRating, setUserRating] = useState(userRatingData);
  console.log("User Data", userRating);

  const onUpdateHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const images = form.img.value;
    const rating = form.rating.value;
    const message = form.message.value;

    const updateUserRating = {
      title: title,
      images: images,
      rating: rating,
      message: message,
    };
    console.log(updateUserRating);

    fetch(
      `https://tourist-service-server.vercel.app/userRating/${userRating._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateUserRating),
      }
    )
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

  return (
    <div className="w-[90%] mx-auto px-2 mt-11">
      <h2 className="text-center py-4 text-2xl text-pink-600">
        Update user rating
      </h2>
      <form onSubmit={onUpdateHandler}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* service title */}
          <div>
            <input
              type="text"
              placeholder="Service title"
              className="input input-bordered input-primary w-full"
              name="title"
              defaultValue={userRating.title}
            />
          </div>
          {/* service img */}
          <div>
            <input
              type="text"
              placeholder="https://images/url"
              className="input input-bordered input-primary w-full"
              name="img"
              defaultValue={userRating.images}
            />
          </div>
          {/* service rating */}
          <div>
            <input
              type="text"
              placeholder="Rating"
              className="input input-bordered input-primary w-full"
              name="rating"
              defaultValue={userRating.rating}
            />
          </div>
        </div>
        {/* message */}
        <textarea
          className="textarea textarea-primary w-full h-48 mt-11"
          placeholder="Type your message...."
          name="message"
          defaultValue={userRating.message}
        ></textarea>
        <input
          type="submit"
          value="Update"
          className="btn btn-primary rounded-full mt-7 px-11"
        />
      </form>
    </div>
  );
};

export default UpdateRating;
