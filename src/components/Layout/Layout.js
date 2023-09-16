import { useContext } from "react";
import AuthProvider, { AuthContext } from "../Auth/AuthProvider";
import SupperAdminLayout from "./SupperAdmin";
import StudentLayout from "./studentLayout";
import RootLayout from "./RootLayout";
import {  Noto_Sans_Bengali } from "next/font/google";
const bengali = Noto_Sans_Bengali({ subsets: ["bengali"], weight: "500" });

export default function Layout({ children }) {
  const { user, setUser, logOut, errorHook } = useContext(AuthContext);

  return (
    <main className={bengali.className} style={{ minHeight: "100vh" }}>
      {user?.role === "super-admin" ? (
        <SupperAdminLayout>{children}</SupperAdminLayout>
      ) : user?.role === "student" ? (
        <StudentLayout>{children}</StudentLayout>
      ) : (
        <RootLayout>{children}</RootLayout>
      )}
    </main>
  );
}
