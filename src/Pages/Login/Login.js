import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";

function Login() {
  const { userLogin, signinGooglePopup } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoginError("");
    const email = data.inputEmail;
    const password = data.inputPassword;
    userLogin(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Login Successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
    console.log({ email, password });
  };

  const from = location.state?.from?.pathname || "/";

  return (
    <div className="contsiner mx-auto py-20">
      <div className="flex items-center justify-center">
        <div className="border shadow-md rounded-md p-10 w-96 m-4">
          <h1 className="text-xl font-bold text-gray-700 text-center">Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control w-full max-w-xs"
          >
            <label className="label">
              <span className="label-text text-base text-gray-600 font-medium">
                Email
              </span>
            </label>
            <input
              {...register("inputEmail", { required: true })}
              type="text"
              placeholder="Email Type here"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.inputEmail && (
              <span className="text-red-500">Email is Required</span>
            )}
            <label className="label mt-2">
              <span className="label-text text-base text-gray-600 font-medium">
                Password
              </span>
            </label>
            <input
              type="password"
              {...register("inputPassword", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Password Mus be 6 character longer",
                },
              })}
              placeholder="Password Type here"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.inputPassword && (
              <span className="text-red-500">
                {errors?.inputPassword?.message}
              </span>
            )}
            <Link
              to="/passwordreset"
              className="label-text text-end cursor-pointer hover:underline"
            >
              Forgat Password?
            </Link>
            <input
              type="submit"
              className="btn font-normal w-full text-lg m-auto my-4"
              value={"Submit"}
            />
            <p className="label-text">
              New To Doctors Portal ?{" "}
              <Link
                to="/signup"
                className="cursor-pointer text-cyan-500 hover:underline"
              >
                Create new Account
              </Link>
            </p>
            {loginError && (
              <p className="label-text text-red-500">{loginError}</p>
            )}
            <div className="divider">OR</div>
            <button
              onClick={() => signinGooglePopup()}
              type="button"
              className="btn font-normal text-base btn-outline w-full m-auto"
            >
              Login With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
