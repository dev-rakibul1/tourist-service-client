import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import registerImg from "../../../asset/login.jpg";

const Login = () => {
  return (
    <div>
      <div className=" min-h-screen w-[90%] mx-auto">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center lg:text-left w-[50%]">
            <img src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-[50%]">
            <div className="card-body">
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
                <button className="btn btn-primary rounded-full">Login</button>
              </div>

              <p className="text-center mt-4">
                Create a new account?{" "}
                <Link className="text-pink-600 mt-4" to="/register">
                  Register
                </Link>
              </p>

              <h2 className="or text-center">Or</h2>
              <div className="text-center cursor-pointe  flex items-center justify-center">
                <button className=" border rounded-full w-6/12  flex items-center justify-center p-2 border-pink-600">
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

export default Login;
