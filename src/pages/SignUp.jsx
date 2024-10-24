import React from "react";

 export default function SignUp () {
    return(
        <>
       <div className="h-screen w-full  flex justify-center items-center" >
        <div className=" h-[400px] w-[420px] mb-[10%]    text-opacity-75 rounded-lg border  border-blue-200 border-opacity-30" >
            <h2 className="text-2xl text-center mt-5 text-white tracking-wide">SignUp</h2>
            <div className=" w-full mx-5 mt-7">
                <p className="text-lg text-opacity-75 text-blue-200">username</p>
                <input className=" h-9 w-[90%]  rounded-md border border-blue-700 border-opacity-40  bg-transparent  " type="text " />
            </div>

            <div className=" w-full mx-5 mt-3">
                <p className="text-lg text-opacity-75 text-blue-200">email </p>
                <input className=" h-9 w-[90%]  rounded-md border border-blue-700 border-opacity-40  bg-transparent  " type="email " />
            </div>

            <div className=" w-full mx-5 mt-3">
                <p className="text-lg text-opacity-75 text-blue-200">password </p>
                <input className=" h-9 w-[90%]  rounded-md border border-blue-700 border-opacity-40  bg-transparent  " type="password " />
            </div>

            <div className=" w-full mx-5 mt-3">

                <button className=" h-9 w-[90%]  rounded-full bg-white bg-opacity-70 text-blue-300 border border-blue-700 border-opacity-40    ">Register</button>
              
            </div>

        </div>
       </div>
        </>
    )
}