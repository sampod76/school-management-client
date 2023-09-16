import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState({
    _id: "dfsdfsdfsdfsdfsd",
    // role:
    //   //   (JSON.parse(localStorage.getItem("role"))) ||
    //   process.env.NEXT_PUBLIC_role,
  });
  const logout = () => {
    setUser((c) => ({ ...c, role: "" }));
    localStorage.removeItem("role");
    router.push("/login");
  };

  const Error_model = ({ message }) => {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message || "কিছু ভুল হয়েছে",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/" || pathname === "/home") {
      localStorage.removeItem("role");
    }
    const role = JSON.parse(localStorage.getItem("role"));
    if (role) {
      setUser((c) => ({ ...c, role: role }));
    } else {
      setUser((c) => ({ ...c, role: null }));
    }
  }, [user.role, pathname]);

  // console.log(loading, user)
  const authInfo = {
    user,
    setUser,
    logout,
    Error_model,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
