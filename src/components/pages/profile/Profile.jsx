import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRegArrowAltCircleDown, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import userImg from "../../../asset/user.png";
import { AuthContext } from "./../../context/ContextProvider";
import UseTitle from "./../../useTitle/UseTitle";

const Profile = () => {
  UseTitle("Profile");
  const [newService, setNewService] = useState([]);
  const [userRating, setUserRating] = useState([]);
  const [bookingInfo, setBookingInfo] = useState([]);
  const { user, userLogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    userLogOut()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("http://localhost:5000/newServices")
      .then((res) => res.json())
      .then((data) => setNewService(data))
      .catch((err) => console.log(err));
  }, []);

  // rating info
  useEffect(() => {
    fetch("http://localhost:5000/userRating")
      .then((res) => res.json())
      .then((data) => setUserRating(data))
      .catch((err) => console.log(err));
  }, []);

  // Booking info
  useEffect(() => {
    fetch("http://localhost:5000/bookingInfo")
      .then((res) => res.json())
      .then((data) => setBookingInfo(data))
      .catch((err) => console.log(err));
  }, []);

  // handle delete
  const handleDelete = (id) => {
    const agree = window.confirm("Are your sure delete this user?");
    if (agree) {
      fetch(`http://localhost:5000/newServices/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            const remaining = newService.filter(
              (service) => service._id !== id
            );
            setNewService(remaining);
          } else {
            toast.error(data.error);
          }
        })
        .then((error) => console.log(error));
    }
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

  // delete request for booking info
  const handleBookingInfo = (id) => {
    const agree = window.confirm("Are your sure delete this application");
    console.log(id);

    if (agree) {
      fetch(`http://localhost:5000/bookingInfo/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            const remaining = bookingInfo.filter(
              (uRating) => uRating._id !== id
            );
            setBookingInfo(remaining);
          } else {
            toast.error(data.error);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="w-[90%] mx-auto px-2 flex gap-6 mt-7">
      <div className="w-[75%] mx-auto">
        <h2 className="text-center text-2xl py-4">Your added services</h2>
        <table>
          <tr>
            <th>Delete</th>
            <th>images</th>
            <th>Title</th>
            <th>Visiting fee</th>
            <th>Area</th>
            <th>rating</th>
            <th>Update</th>
          </tr>
          {newService.map((data) => (
            <tr>
              <th
                className="text-center cursor-pointer"
                onClick={() => handleDelete(data._id)}
              >
                <FaTimes />
              </th>
              <td>
                <img src={data?.img} alt="" className="w-16 rounded-sm" />
              </td>
              <td>{data?.sTitle}</td>
              <td>{data?.charge}$</td>
              <td>{data?.area}</td>
              <td>{data?.rating} Star</td>
              <Link
                className="w-full text-center flex items-center justify-center h-full "
                to={`/update/${data?._id}`}
              >
                <td className="text-center cursor-pointer border-none mt-4">
                  <FaRegArrowAltCircleDown className="text-center text-xl" />
                </td>
              </Link>
            </tr>
          ))}
        </table>

        {/* user rating info */}
        <h2 className="text-center text-2xl py-4 mt-7">Your last reviews</h2>
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
                  className="w-24"
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

        {/* booking info */}
        <h1 className="text-center text-2xl py-4 mt-7">
          Your apply information
        </h1>
        <table>
          <tr>
            <th>Delete</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Number</th>
            <th>Apply status</th>
          </tr>

          {bookingInfo.map((book) => (
            <tr>
              <td
                className="cursor-pointer"
                onClick={() => handleBookingInfo(book._id)}
              >
                <FaTimes />
              </td>
              <td>{book?.name}</td>
              <td>{book?.email}</td>
              <td>{book?.address}</td>
              <td>{book?.number}</td>
              <td>pending</td>
            </tr>
          ))}
        </table>
      </div>

      {/* user info */}
      <div className="w-[25%] mx-auto">
        <article className="text-center">
          <h2 className="text-2xl text-pink-600 text-center py-4">
            User information
          </h2>
          <div className="text-center flex justify-center">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                alt="user"
                className="rounded-full w-16"
              />
            ) : (
              <img src={userImg} alt="user" className="rounded-full w-16" />
            )}
          </div>

          <h3 className="mt-4">
            <strong>Name:</strong>{" "}
            {user?.displayName ? user?.displayName : "Name not found"}
          </h3>
          <h3>
            <strong>Email:</strong> {user?.email}
          </h3>
          <h3>
            <strong>Email status:</strong>{" "}
            {user?.emailVerified ? "Email verified " : "Email not verified"}
          </h3>

          <button
            onClick={handleLogOut}
            className="btn btn-primary w-full mt-4 rounded-full"
          >
            log out
          </button>
        </article>
      </div>
    </div>
  );
};

export default Profile;
