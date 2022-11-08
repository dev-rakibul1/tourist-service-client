import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Booking = () => {
  const [userMess, setUserMess] = useState("");
  //   const { images, title, description, area, rating, charge } = data;

  //   const data = useLoaderData();
  //   console.log(data);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/tourist-all-services")
  //       .then((res) => res.json())
  //       .then((data) => setBookData(data))
  //       .catch((err) => console.log(err));
  //   }, []);

  //   bookData.map((data) => data);
  //   console.log(bookData);

  const handleBookForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    if (name === "" && name.length < 8) {
      setUserMess("Name must be need 8 charater");
      return;
    } else {
      setUserMess("");
    }
    const email = form.email.value;
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      setUserMess("");
    } else {
      setUserMess("Please provide a valid email.");
      return;
    }
    const address = form.address.value;
    if (address === "" && address.length < 15) {
      setUserMess("Please must be need 15 charater");
      return;
    } else {
      setUserMess("");
    }
    const number = form.number.value;
    if (number === "" && number.length < 11) {
      setUserMess("Please please provide a valid number");
      return;
    } else {
      setUserMess("");
    }
    const message = form.message.value;
    if (message === "" && message.length > 120 && message.length < 15) {
      setUserMess("Please write (15-12) charter");
      return;
    } else {
      setUserMess("");
    }

    const bookingUser = {
      name: name,
      email: email,
      address: address,
      number: number,
      message: message,
      //   title: title,
      //   images: images,
      //   area: area,
      //   rating: rating,
      //   charge: charge,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingUser),
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
    form.reset();
  };

  return (
    <div className="w-[90%] mx-auto mt-24">
      <form onSubmit={handleBookForm}>
        <div className="grid grid-cols-2 gap-11">
          {/* name */}
          <div>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-primary w-full"
              name="name"
            />
          </div>
          {/* email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full"
              name="email"
            />
          </div>
          {/* address */}
          <div>
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered input-primary w-full"
              name="address"
            />
          </div>
          {/* phone */}
          <div>
            <input
              type="number"
              placeholder="Number"
              className="input input-bordered input-primary w-full"
              name="number"
            />
          </div>
        </div>
        {/* message */}
        <textarea
          className="textarea textarea-primary w-full mt-8 h-48"
          placeholder="Type your message..."
          name="message"
        ></textarea>
        <p className="text-red-600 text-center">{userMess}</p>

        <button className="btn btn-active btn-primary w-full mt-4 rounded-full">
          Confirm book
        </button>
      </form>
    </div>
  );
};

export default Booking;
