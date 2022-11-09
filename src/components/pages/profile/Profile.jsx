import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRegArrowAltCircleDown, FaTimes } from "react-icons/fa";
import { AuthContext } from "./../../context/ContextProvider";

const Profile = () => {
  const [newService, setNewService] = useState([]);
  const { userLogOut } = useContext(AuthContext);
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
              <td className="text-center cursor-pointer">
                <FaRegArrowAltCircleDown className="text-center" />
              </td>
            </tr>
          ))}
        </table>
      </div>

      {/* user info */}
      <div className="w-[25%] mx-auto">
        <h1>Profile</h1>
        <button onClick={handleLogOut}>log out</button>
      </div>
    </div>
  );
};

export default Profile;
