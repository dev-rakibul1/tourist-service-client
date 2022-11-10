import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import UseTitle from "./../../useTitle/UseTitle";

const Update = () => {
  const storedData = useLoaderData();
  const [updateUser, setUpdateUser] = useState(storedData);
  UseTitle("Update");

  const onUpdateHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const sTitle = form.title.value;
    const img = form.img.value;
    const rating = form.rating.value;
    const charge = form.charge.value;
    const place = form.place.value;
    const message = form.message.value;
    const area = form.area.value;

    const newUpdateInfo = {
      sTitle: sTitle,
      img: img,
      rating: rating,
      charge: charge,
      place: place,
      message: message,
      area: area,
    };
    console.log(newUpdateInfo);

    fetch(
      `https://tourist-service-server.vercel.app/update/${storedData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUpdateInfo),
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
    <div className="w-[90%] mx-auto px-2">
      <form onSubmit={onUpdateHandler}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* service title */}
          <div>
            <input
              type="text"
              placeholder="Service title"
              className="input input-bordered input-primary w-full"
              name="title"
              defaultValue={storedData.sTitle}
            />
          </div>
          {/* service img */}
          <div>
            <input
              type="text"
              placeholder="https://images/url"
              className="input input-bordered input-primary w-full"
              name="img"
              defaultValue={storedData.img}
            />
          </div>
          {/* service rating */}
          <div>
            <input
              type="text"
              placeholder="Rating"
              className="input input-bordered input-primary w-full"
              name="rating"
              defaultValue={storedData.rating}
            />
          </div>
          {/* service charge */}
          <div>
            <input
              type="text"
              placeholder="charge"
              className="input input-bordered input-primary w-full"
              name="charge"
              defaultValue={storedData.charge}
            />
          </div>
          {/* service area */}
          <div>
            <input
              type="text"
              placeholder="Service area"
              className="input input-bordered input-primary w-full"
              name="area"
              defaultValue={storedData.area}
            />
          </div>
          {/* service place */}
          <div>
            <input
              type="text"
              placeholder="Your favourite place name"
              className="input input-bordered input-primary w-full"
              name="place"
              defaultValue={storedData.place}
            />
          </div>
        </div>
        {/* message */}
        <textarea
          className="textarea textarea-primary w-full h-48 mt-11"
          placeholder="Type your message...."
          name="message"
          defaultValue={storedData.message}
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

export default Update;
