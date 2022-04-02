import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://json-faker.onrender.com/users");

        setUser(res.data.users);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { user, loading };
};

export default useUsers;
