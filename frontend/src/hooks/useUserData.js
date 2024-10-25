import { useState, useEffect } from 'react';
import axios from "axios";

export function useUserData() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        (async () => {
          const res = await axios.get("/api/auth", {
            headers: { token },
          });

          setUser(res.data.user);
        })();
      } catch (e) {
        alert(e.response?.data ?? "Something went wrong");
      }
    }
  }, []);

  return { user };
}
