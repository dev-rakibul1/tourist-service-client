import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImg from "../../../asset/register.jpg";
import { AuthContext } from "./../../context/ContextProvider";

const Register = () => {
  const { user, userEmailPasswordLogin, googleLoginSystem } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    if (name === "" && name.length < 8) {
      toast.error("Name require and must be less then 8 charter.");
      return;
    }
    const email = form.email.value;
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(re)) {
      toast.error("Please provide a valid email");
    }
    const password = form.password.value;
    if (password.length < 6) {
      toast.error("Password less then must be 6 charter");
    }
    handleEmailPassLoginSystem(email, password);
    // handleUpdateProfile(name);
  };

  // handle user email password login system
  const handleEmailPassLoginSystem = (email, password) => {
    userEmailPasswordLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Login is success!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  // google sign method
  const handleGoogleLoginSystem = () => {
    googleLoginSystem()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login is success!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  // update profile
  // const handleUpdateProfile = (name) => {
  //   const profile = {
  //     displayName: name,
  //   };
  //   updateUserProfile(profile);
  // };

  return (
    <div>
      <div className=" min-h-screen w-[90%] mx-auto">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center lg:text-left w-[50%]">
            <img src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-[50%]">
            <form className="card-body" onSubmit={handleRegister}>
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                />
              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary rounded-full">
                  Register
                </button>
              </div>
            </form>
            <div>
              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link className="text-pink-600 mt-4" to="/login">
                  Login
                </Link>
              </p>

              <h2 className="or text-center">Or</h2>
              <div className="text-center cursor-pointe  flex items-center justify-center">
                <button
                  className=" border rounded-full w-6/12  flex items-center justify-center p-2 border-pink-600"
                  onClick={handleGoogleLoginSystem}
                >
                  <FaGoogle className="text-pink-600" />{" "}
                  <span className="ml-4">Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
