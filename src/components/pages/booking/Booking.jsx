import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Booking = () => {
  const [bookData, setBookData] = useState([]);
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
    const email = form.email.value;
    const address = form.address.value;
    const number = form.number.value;
    const message = form.message.value;

    const bookingUser = {
      name: name,
      email: email,
      address: address,
      number: number,
      message: message,
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
        <button className="btn btn-active btn-primary w-full mt-4 rounded-full">
          Confirm book
        </button>
      </form>
    </div>
  );
};

export default Booking;
