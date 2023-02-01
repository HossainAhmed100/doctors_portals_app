import axios from "../axios";
import { useEffect } from "react";
import { useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      axios.get(`/users/admin?email=${email}`).then((res) => {
        setIsAdmin(res.data.isAdmin);
        setIsAdminLoading(false);
      });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
