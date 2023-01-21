import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";

function PasswordReset() {
  const { forgatPassword } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // Handle passwodr Password Reset Button
  const onSubmit = async (data) => {
    const email = data.useremail;
    await forgatPassword(email);
    toast.success("Reset Link Sent!");
  };

  return (
    <div>
      <div className="py-6 mb-20">
        <div className="max-w-lg mx-auto p-8 rounded-xl shadow shadow-slate-500">
          <h1 className="text-center pb-8 font-semibold text-3xl">
            Reset Password
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-3.5">
              <label>
                <p className="font-medium text-base text-slate-700 pb-2">
                  Email address
                </p>
                <input
                  {...register("useremail", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.useremail ? "true" : "false"}
                  name="useremail"
                  type="email"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-sm"
                  placeholder="Enter email address"
                />
                {errors.useremail && (
                  <p className="text-red-600" role="alert">
                    {errors.useremail?.message}
                  </p>
                )}
              </label>
              <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <BsBoxArrowInLeft className="font-bold" size={23} />
                <span>Reset Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
