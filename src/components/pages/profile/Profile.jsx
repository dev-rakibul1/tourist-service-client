import React, { useContext } from "react";
import { AuthContext } from "./../../context/ContextProvider";

const Profile = () => {
  const { userLogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    userLogOut()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-[50%] mx-auto">
      <h1>Profile</h1>
      <button onClick={handleLogOut}>log out</button>
    </div>
  );
};

export default Profile;
