import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

 export default function SignIn () {

    const [email , setemail]=useState('');
    const[password , setpassword]=useState('')

    const handleResponse = async(e)=>{
        e.preventDefault();
        
        const bodyParmeter = {
            
            email: email,
            password : password

        }

        const axiosheader = {
            headers:{
               "Accept": "application/json",
              "Content-Type": "application/json"
            }
        }

        const response = await axios.post("http://localhost:3000/login" ,  bodyParmeter , axiosheader );
        console.log(response);

        alert("user is login successfully")
    }

    return(
        <>
       <div className="h-screen w-full  flex justify-center items-center" >
        <div className=" h-[350px] w-[420px] mb-[5%]    text-opacity-75 rounded-lg border  border-blue-200 border-opacity-30" >
            <h2 className="text-2xl text-center mt-5 text-white tracking-wide">SignIn</h2>
          
            <div className=" w-full mx-5 mt-3">
                <p className="text-lg text-opacity-75 text-blue-200">email </p>
                <input className=" h-9 w-[90%]  rounded-md text-white text-opacity-60  border border-blue-700 border-opacity-40  bg-transparent  " type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            </div>

            <div className=" w-full mx-5 mt-3">
                <p className="text-lg text-opacity-75 text-blue-200">password </p>
                <input className=" h-9 w-[90%]  rounded-md border text-white text-opacity-60  border-blue-700 border-opacity-40  bg-transparent  " type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>

            <div className=" w-full mx-5 mt-5">

                <button className=" h-9 w-[90%]  rounded-full bg-blue-700 bg-opacity-70 text-white border border-blue-700 border-opacity-40    " onClick={handleResponse}>Login</button>
                <p className="text-white mt-3 text-opacity-70 text-center mr-7">Don't have an account? <Link to="/sign-up"><span className="text-blue-500">SignUp</span></Link></p>
              
            </div>

        </div>
       </div>
        </>
    )
}