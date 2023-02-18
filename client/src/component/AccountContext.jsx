import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AccountContext = createContext();

const UserContext = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ loggedIn: null });

  useEffect(() => {
    fetch("http://localhost:3001/auth/login", {
      credentials: "include",
    })
      .then((res) => {
        if (!res || !res.ok || res.status >= 400) {
          return setUser({ loggedIn: false });
        }
        return res.json();
      })
      .then((data) => {
        if (!data) {
          return setUser({ loggedIn: false });
        }
        navigate("/");
        setUser({ loggedIn: true });
      })
      .catch((err) => {
        return setUser({ loggedIn: false });
      });
  }, []);

  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};

export default UserContext;
