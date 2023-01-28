import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";

function AllUsers() {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    const role = { role: "Admin" };
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(role),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successfull");
          refetch();
        }
      });
  };

  const handleRemoveAdmin = (id) => {
    const role = { role: "User" };
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(role),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successfull");
          refetch();
        }
      });
  };

  return (
    <div className="p-10">
      <h3 className="text-3xl mb-5">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
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
                      className="btn gap-2 btn-primary"
                    >
                      <MdOutlineAdminPanelSettings size={25} />
                      Make Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRemoveAdmin(user._id)}
                      className="btn gap-2 btn-primary"
                    >
                      <MdOutlineAdminPanelSettings size={25} />
                      Remove Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn gap-2 btn-error text-white">
                    <BsFillTrashFill size={22} />
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
