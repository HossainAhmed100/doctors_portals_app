import { useQuery } from "@tanstack/react-query";
import axios from "../../../axios";
import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserBarLoder from "../../../Components/UserLoding/UserBarLoder";

function AddDoctor() {
  const navigate = useNavigate();
  const imghostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imghostKey);
  const { data: specialtes = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await axios.get("/appointmentspecialty");
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const name = data.inputName;
    const email = data.inputEmail;
    const specialty = data.specialty;
    const image = data.doctorsimg[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imghostKey}`;

    axios.post(url, formData).then((res) => {
      if (res.data.success) {
        const picture = res.data.data.url;
        const doctors = { name, email, specialty, picture };
        axios
          .post("/doctors", doctors, {
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((res) => {
            if (res.data.acknowledged) {
              toast.success(`${doctors.name} is Added Successfully`);
              navigate("/dashboard/managedoctors");
            }
          });
      }
    });
  };

  if (isLoading) {
    return <UserBarLoder />;
  }

  return (
    <div className="p-10">
      <h2>ADD A Doctor</h2>
      <div>
        <div className="border shadow-md rounded-md max-w-md p-8 m-4">
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
            <label className="label mt-4">
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

            <label className="label mt-4">
              <span className="label-text text-base text-gray-600 font-medium">
                Specialty
              </span>
            </label>
            <select
              {...register("specialty", { required: true })}
              className="select select-bordered w-full"
            >
              {specialtes.map((specialt) => (
                <option key={specialt._id} value={specialt.name}>
                  {specialt.name}
                </option>
              ))}
            </select>
            {errors.specialty && (
              <span className="text-red-500">
                Please Select Doctors Specialty
              </span>
            )}

            <div className="flex mt-8 items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <MdOutlineAddPhotoAlternate
                    className="text-gray-500 mb-2"
                    size={25}
                  />
                  <p className="mb-2 text-sm text-gray-500 items-center dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    Drag & drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  {...register("doctorsimg", { required: true })}
                  id="dropzone-file"
                  type="file"
                />
              </label>
            </div>
            {errors.doctorsimg && (
              <span className="text-red-500">Please a Add A Doctor image</span>
            )}

            <input
              type="submit"
              className="btn w-full text-lg m-auto my-4"
              value={"Submit"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
