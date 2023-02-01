import axios from "../axios";
import { useEffect } from "react";
import { useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      axios.get(`/jwt?email=${email}`).then((res) => {
        const data = res.data;
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          setToken(data.accessToken);
        }
      });
    }
  }, [email]);

  return [token];
};

export default useToken;
