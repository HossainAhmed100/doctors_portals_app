import React from "react";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.inputEmail;
    const password = data.inputPassword;
    console.log({ email, password });
  };

  return (
    <div className="contsiner mx-auto py-20">
      <div className="flex items-center justify-center">
        <div className="border shadow-md rounded-md p-10">
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
                required: true,
                minLength: {
                  value: 6,
                  message: "Password Mus be 6 character lobger",
                },
              })}
              placeholder="Password Type here"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.inputPassword && (
              <span className="text-red-500">Password is Required</span>
            )}
            <span className="label-text text-end cursor-pointer hover:underline">
              Forgat Password?
            </span>
            <input
              type="submit"
              className="btn w-full text-lg m-auto my-4"
              value={"Submit"}
            />
            <p className="label-text">
              New To Doctors Portal ?{" "}
              <span className="cursor-pointer text-cyan-500 hover:underline">
                Create new Account
              </span>
            </p>
            <div className="divider">OR</div>
            <button
              type="button"
              className="btn text-lg btn-outline w-full m-auto"
            >
              Login With Googel <BsGoogle className="ml-1" size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
