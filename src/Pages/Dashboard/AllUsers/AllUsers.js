import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "../../../axios";

function AllUsers() {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (id) => {
    const role = { role: "Admin" };
    axios
      .put(`/users/admin/${id}`, role, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Make Admin Successfull");
          refetch();
        }
      });
  };

  const handleRemoveAdmin = (id) => {
    const role = { role: "User" };
    axios
      .put(`/users/admin/${id}`, role, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Make Admin Successfull");
          refetch();
        }
      });
  };

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `/users/${id}`;
        axios
          .delete(url, {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((deletedata) => {
            if (deletedata.data.acknowledged) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="p-10">
      <h3 className="text-3xl mb-5 text-center">All Users</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                Index <div className="badge ml-1">{users.length}</div>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actuon</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover cursor-pointer">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "Admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn gap-2 btn-sm btn-primary"
                    >
                      <MdOutlineAdminPanelSettings size={20} />
                      Make Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRemoveAdmin(user._id)}
                      className="btn gap-2 btn-sm btn-primary"
                    >
                      <MdOutlineAdminPanelSettings size={20} />
                      Remove Admin
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn gap-2 btn-sm btn-error text-white"
                  >
                    <BsFillTrashFill size={20} />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
