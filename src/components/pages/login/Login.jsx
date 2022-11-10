import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImg from "../../../asset/login.jpg";
import { AuthContext } from "./../../context/ContextProvider";
import UseTitle from "./../../useTitle/UseTitle";

const Login = () => {
  UseTitle("Login");
  const { signEmailAndPass, googleLoginSystem } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;

    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(re)) {
      toast.error("Please provide a valid email");
    }
    if (password.length < 6) {
      toast.error("Password less then must be 6 charter");
    }
    userEmailPassSign(email, password);
  };

  // user email password login system
  const userEmailPassSign = (email, password) => {
    signEmailAndPass(email, password)
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

  // google sign method
  const handleGoogleLoginSystem = () => {
    googleLoginSystem()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login is success!");
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className=" min-h-screen w-[90%] mx-auto">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center lg:text-left md:w-[50%] px-2 w-full">
            <img src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 md:w-[50%] px-2 w-full">
            <form className="card-body" onSubmit={handleUserLogin}>
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
            </form>

            {/* google login */}
            <div>
              <p className="text-center mt-2">
                Create a new account?{" "}
                <Link className="text-pink-600 mt-4" to="/register">
                  Register
                </Link>
              </p>

              <h2 className="or text-center py-4">Or</h2>
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

export default Login;
