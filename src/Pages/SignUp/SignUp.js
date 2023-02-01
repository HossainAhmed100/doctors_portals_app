import axios from "../../axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../hooks/useToken";

function SignUp() {
  const { createUser, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const name = data.inputName;
    const email = data.inputEmail;
    const password = data.inputPassword;
    await createUser(email, password)
      .then(async (result) => {
        const userInfo = { displayName: name };
        toast.success("SignUp Successfull");
        await updateUser(userInfo)
          .then(() => {
            saveUser(name, email);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    axios.post("/users", { user }).then((res) => {
      if (res.data) {
        setCreatedUserEmail(email);
      }
    });
  };

  return (
    <div className="contsiner mx-auto py-20">
      <div className="flex items-center justify-center">
        <div className="border shadow-md rounded-md p-10 w-96 m-4">
          <h1 className="text-xl font-bold text-gray-700 text-center">
            SignUp
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control w-full"
          >
            <label className="label">
              <span className="label-text text-base text-gray-600 font-medium">
                Name
              </span>
            </label>
            <input
              {...register("inputName", { required: true })}
              type="text"
              placeholder="Name Type here"
              className="input input-bordered w-full"
            />
            {errors.inputName && (
              <span className="text-red-500">Name is Required</span>
            )}
            <label className="label">
              <span className="label-text text-base text-gray-600 font-medium">
                Email
              </span>
            </label>
            <input
              {...register("inputEmail", { required: true })}
              type="email"
              placeholder="Email Type here"
              className="input input-bordered w-full"
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
                  message: "Password Must be 6 character longer",
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
            <span className="label-text text-end cursor-pointer hover:underline">
              Forgat Password?
            </span>
            <input
              type="submit"
              className="btn w-full text-lg m-auto my-4"
              value={"Submit"}
            />
            <p className="label-text">
              Alredy Have Account ?{" "}
              <Link
                to="/login"
                className="cursor-pointer text-cyan-500 hover:underline"
              >
                Login Now
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              type="button"
              className="btn text-base btn-outline w-full m-auto"
            >
              SignUp With Googel <BsGoogle className="ml-1" size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
