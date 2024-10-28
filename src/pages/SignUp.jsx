import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleResponse = async (e) => {
    e.preventDefault();

    const bodyParmeter = {
      username: username,
      email: email,
      password: password,
    };

    const axiosheader = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      "http://localhost:3000/register",
      bodyParmeter,
      axiosheader
    );
    console.log(response);

    alert("user is register successfully");
  };

  return (
    <>
      <div className="h-[70px] flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo-.png"
            alt="logo"
            className="h-[70px] w-[70px] mt-1 ml-5"
          />
          <Link to={"/"}>
            <h1 className="text-white text-2xl">
              Learn<span className="text-blue-300 text-xl">sphere</span>
            </h1>
          </Link>
        </div>
      </div>

      <div className="h-screen w-full  flex justify-center items-center">
        <div className=" h-[400px] w-[420px] mb-[5%]    text-opacity-75 rounded-lg border  border-blue-200 border-opacity-30">
          <h2 className="text-2xl text-center mt-5 text-white tracking-wide">
            SignUp
          </h2>
          <div className=" w-full mx-5 mt-7">
            <p className="text-lg text-opacity-75 text-blue-200">username</p>
            <input
              className=" h-9 w-[90%]  text-white text-opacity-60  rounded-md border border-blue-700 border-opacity-40  bg-transparent  "
              type="text"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>

          <div className=" w-full mx-5 mt-3">
            <p className="text-lg text-opacity-75 text-blue-200">email </p>
            <input
              className=" h-9 w-[90%]  rounded-md text-white text-opacity-60  border border-blue-700 border-opacity-40  bg-transparent  "
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>

          <div className=" w-full mx-5 mt-3">
            <p className="text-lg text-opacity-75 text-blue-200">password </p>
            <input
              className=" h-9 w-[90%]  rounded-md border text-white text-opacity-60  border-blue-700 border-opacity-40  bg-transparent  "
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>

          <div className=" w-full mx-5 mt-5">
            <button
              className=" h-9 w-[90%]  rounded-full bg-blue-700 bg-opacity-70 text-white border border-blue-700 border-opacity-40    "
              onClick={handleResponse}
            >
              Register
            </button>
            <p className="text-white mt-3 text-opacity-70 text-center mr-7">
              {" "}
              Already have an account?{" "}
              <Link to="/sign-in">
                <span className="text-blue-500">SignIn</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
