import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { Checkbox, Spin } from "antd";
import Link from "next/link";
import { AuthContext } from "@/components/Auth/AuthProvider";
import { useRouter } from "next/router";
import { useLoginUserMutation } from "@/redux/features/user/userApi";
import { Success_model } from "@/utils/modalHook";
import { AiFillEyeInvisible } from "react-icons/ai";
import { ENUM_USER_ROLE } from "@/const/userConstant";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, Error_model } = useContext(AuthContext);
  const router = useRouter();
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userId = e.target.userId.value;
    const password = e.target.password.value;
    setTimeout(() => {
      Success_model({ message: "login successfull" });
      setUser((c) => ({ ...c, role: ENUM_USER_ROLE.SUPER_ADMIN }));
      localStorage.setItem("role", JSON.stringify(ENUM_USER_ROLE.SUPER_ADMIN));
      router.push("/supper-admin/dashboard");
    }, 1000);
    /*    //! real login 
 // rtk-query method by bayajid
    loginUser({ userId, password })
      .then((result) => {
        // Handle success, update UI, etc.
        if (result.error) {
          Error_model({ message: result.error.data.message });
        } else {
          Success_model({ message: result.data.message });
          setUser((c) => ({ ...c, role: result?.data?.data?.role }));
          localStorage.setItem(
            "role",
            JSON.stringify(result?.data?.data?.role)
          );
          router.push("/supper-admin/dashboard");
        }
        console.log("Post created:", result);
      })
      .catch((err) => {
        // Handle error
        Error_model({ message: err.message });
        console.error("Error creating post:", err);
      }); */
  };

  if (error) {
    console.log(error);
    Error_model({ message: error.message });
    // return console.log(isError)
  }

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      <div className="w-full mx-auto bg-white p-12 my-8 rounded-xl max-w-md space-y-8 border-2">
        <div>
          <h1 className="text-3xl text-center font-bold">লগ ইন</h1>
          <p className="mt-2 text-center font-semibold text-gray-600">
            "স্বাগতম আবার, আপনার অ্যাকাউন্টে লগইন করুন"
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
          <div>
            <div className="relative">
              <input
                id="userId"
                type="text"
                placeholder="আপনার ব্যবহারকারী আইডি দিন"
                className="w-full px-4 py-3 pl-10 rounded-full shadow-xl"
                required
              />
              <span className="absolute top-3 left-3">
                <FaUser size={20} className="text-gray-400" />
              </span>
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="আপনার পাসওয়ার্ড দিন"
                className="w-full px-4 py-3 pl-10 rounded-full shadow-xl"
                required
              />
              <span className="absolute top-3 left-3">
                <FaLock size={20} className="text-gray-400" />
              </span>

              <div
                className="absolute top-3 right-5"
                onClick={() => setShowPassword((c) => !c)}
              >
                {showPassword ? (
                  <span>
                    <AiFillEyeInvisible size={25} className="text-gray-400" />
                  </span>
                ) : (
                  <span>
                    <FaEye size={25} className="text-gray-400" />
                  </span>
                )}
              </div>
              {/* ... (Eye icons and password visibility toggle logic) */}
            </div>
          </div>

          <div className="flex justify-between">
            <Checkbox
              name="remember"
              style={{
                border: "orange",
              }}
              onChange={onChange}
            >
              <span className="font-semibold text-orange-500">মনে রাখুন</span>
            </Checkbox>
            <Link href="/">
              <span className="font-semibold text-orange-500">
                পাসওয়ার্ড ভুলে গেছেন?
              </span>
            </Link>
          </div>

          <div>
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Spin />
              </div>
            ) : (
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600"
              >
                লগ ইন
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

// main code
// import Header from "@/components/HomePage/Header/Header";
// import { Checkbox } from "antd";
// import Link from "next/link";
// import { useState } from "react";

// import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";

// const onChange = (e) => {
//   console.log(`checked = ${e.target.checked}`);
// };
// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <>
//       <div className="w-full mx-auto bg-white p-12 my-8 rounded-xl max-w-md space-y-8">
//         <div>
//           <h1 className="text-3xl text-center font-bold">লগ ইন</h1>
//           <p className="mt-2 text-center font-semibold text-gray-600">
//             "স্বাগতম আবার, আপনার অ্যাকাউন্টে লগইন করুন"
//           </p>
//         </div>
//         <form className="mt-8 space-y-6">
//           <div>
//             <div className="relative">
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="আপনার ইমেইল দিন"
//                 className="w-full px-4 py-3 pl-10 rounded-full shadow-xl"
//                 required
//               />
//               <span className="absolute top-3 left-3">
//                 <FaUser size={20} className="text-gray-400" />
//               </span>
//             </div>
//           </div>
//           <div>
//             <div className="relative">
//               <input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="আপনার পাসওয়ার্ড দিন"
//                 className="w-full px-4 py-3 pl-10 rounded-full shadow-xl"
//                 required
//               />
//               <span className="absolute top-3 left-3">
//                 <FaLock size={20} className="text-gray-400" />
//               </span>
//               <span className="absolute top-3 right-3">
//                 {showPassword ? (
//                   <FaEye
//                     size={20}
//                     className="text-gray-400 cursor-pointer"
//                     onClick={() => setShowPassword(false)}
//                   />
//                 ) : (
//                   <FaEyeSlash
//                     size={20}
//                     className="text-gray-400 cursor-pointer"
//                     onClick={() => setShowPassword(true)}
//                   />
//                 )}
//               </span>
//             </div>
//           </div>

//           <div className="flex justify-between">
//             <Checkbox
//               style={{
//                 border: "orange",
//               }}
//               onChange={onChange}
//             >
//               <span className="font-semibold text-orange-500">মনে রাখুন</span>
//             </Checkbox>
//             <Link href="/">
//               <span className="font-semibold text-orange-500">
//                 পাসওয়ার্ড ভুলে গেছেন?
//               </span>
//             </Link>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full px-4 py-3 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600  "
//             >
//               লগ ইন
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;
