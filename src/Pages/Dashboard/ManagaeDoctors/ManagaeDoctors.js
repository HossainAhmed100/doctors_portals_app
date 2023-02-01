import { useQuery } from "@tanstack/react-query";
import axios from "../../../axios";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";

function ManagaeDoctors() {
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axios.get("/doctors");
      return res.data;
    },
  });

  const handleDeleteDoctor = (id) => {
    const url = `/doctors/${id}`;
    axios.delete(url).then((deletedata) => {
      if (deletedata.data.acknowledged) {
        refetch();
        toast.success("Delete Successfully");
      }
    });
  };

  return (
    <div>
      {" "}
      <div className="p-10">
        <h3 className="text-3xl mb-5 text-center">All Users</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Index</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Specialty</th>
                <th>Actuon</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={doctor._id} className="hover cursor-pointer">
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-10 rounded-md"
                      src={doctor.picture}
                      alt=""
                    />
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteDoctor(doctor._id)}
                      className="btn gap-2 btn-error btn-sm text-white"
                    >
                      <BsFillTrashFill size={18} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManagaeDoctors;
