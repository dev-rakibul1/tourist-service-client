import React, { useState } from "react";
import { toast } from "react-hot-toast";
import UseTitle from "./../../useTitle/UseTitle";

const AddServices = () => {
  const [err, setErr] = useState("");
  UseTitle("Add service");
  const onServiceHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const sTitle = form.title.value;
    const img = form.img.value;
    const rating = form.rating.value;
    const charge = form.charge.value;
    const place = form.place.value;
    const message = form.message.value;
    const area = form.area.value;

    // validation form
    if (sTitle === " " || sTitle.length < 8) {
      setErr("Title is require and less then 8 charter.");
      return;
    }

    if (rating.length === " " || (rating.length < 5 && rating > 0)) {
      setErr("Rating is require and you need 1-5 charter.");
      return;
    }

    if (message === " " || message.length < 20) {
      setErr("Message is require and less then 20 charter.");
      return;
    }

    const newServiceInfo = {
      sTitle: sTitle,
      img: img,
      rating: rating,
      charge: charge,
      place: place,
      message: message,
      area: area,
    };

    fetch("https://tourist-service-server.vercel.app/newServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newServiceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-pink-600 py-11">
        Add new service
      </h1>
      <form onSubmit={onServiceHandler}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* service title */}
          <div>
            <input
              type="text"
              placeholder="Service title"
              className="input input-bordered input-primary w-full"
              name="title"
            />
          </div>
          {/* service img */}
          <div>
            <input
              type="text"
              placeholder="https://images/url"
              className="input input-bordered input-primary w-full"
              name="img"
            />
          </div>
          {/* service rating */}
          <div>
            <input
              type="text"
              placeholder="Rating"
              className="input input-bordered input-primary w-full"
              name="rating"
            />
          </div>
          {/* service charge */}
          <div>
            <input
              type="text"
              placeholder="charge"
              className="input input-bordered input-primary w-full"
              name="charge"
            />
          </div>
          {/* service area */}
          <div>
            <input
              type="text"
              placeholder="Service area"
              className="input input-bordered input-primary w-full"
              name="area"
            />
          </div>
          {/* service place */}
          <div>
            <input
              type="text"
              placeholder="Your favourite place name"
              className="input input-bordered input-primary w-full"
              name="place"
            />
          </div>
        </div>
        {/* message */}
        <textarea
          className="textarea textarea-primary w-full h-48 mt-11"
          placeholder="Type your message...."
          name="message"
        ></textarea>
        <h3 className="text-red-600">{err}</h3>
        <input
          type="submit"
          value="Send Service"
          className="btn btn-primary rounded-full mt-7 px-11"
        />
      </form>
    </div>
  );
};

export default AddServices;
