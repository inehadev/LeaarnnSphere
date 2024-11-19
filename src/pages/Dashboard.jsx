import React, { useState } from "react";
import axios from "axios";
import { Link, useSubmit } from "react-router-dom";
import { Loader } from 'lucide-react';

const Dashboard = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [loader , setloader]=useState(false);

  const handleResponse = async () => {
    setloader(true);
    try {
      const { data } = await axios.post("http://localhost:3000/aiResponse", {
        userTask: text,
      });
      const updatedHtml = modifyHtml(data.message);
      setResponse(updatedHtml);
      console.log(data)
    } catch (error) {
      console.log("Error in AI response", error);
    }finally{
      setloader(false);
    }
  };


  const handleenter=(e)=>{
    if(e.key ==='Enter'){
        handleResponse();
    }

  };

  const modifyHtml = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const table = doc.querySelector("table");
    if (table) {
      table.style.border = "2px solid #444";
      table.style.borderradius = "15px";
      table.style.minHeight = "100vh";
      table.style.backgroundColor = "transparent";
      table.style.borderRadius = "8px";
      table.style.width = "100%";
      table.style.borderCollapse = "collapse";
    }

    const cells = doc.querySelectorAll("td, th");
    cells.forEach((cell) => {
      cell.style.border = "2px solid #444";
      cell.style.padding = "20px";
      cell.style.color = "white";
      cell.style.backgroundColor = "transparent";
    });

    return doc.body.innerHTML;
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

      <div className="min-h-vh flex flex-col justify-evenly gap-[300px] items-center">
        <div className="overflow-y-scroll w-full max-h-[72vh] p-4 bg-transparent "
        style={{
            scrollbarWidth:"none",
            msOverflowStyle:"none",
            WebkitOverflowScrolling:"touch"
        }}>
          {response ? (
            <div
              dangerouslySetInnerHTML={{ __html: response }}
              style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "20px",
                borderRadius: "8px",
              }}
            />
          ) : (
            <div className="flex justify-center items-center">
              <p className="text-white text-4xl mt-[15%]">
              
                Welcome to LearnSphere!
              </p>
            </div>
          )}
        </div>
        <div className=" sticky bottom-4 flex rounded-full border border-white  w-[60%] mt-5">
          <input
            type="text"
            placeholder="type here...."
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleenter}
            value={text}
            className="h-10 w-full text-white bg-transparent px-5 border-none focus:outline-none placeholder:px-2 placeholder:text-lg"
          />

          <button
            className="h-9 text-white text-opacity-55 mr-2 m-1 text-lg bg-blue-500 rounded-full px-4"
            onClick={handleResponse}
          >
           {loader ? (
            <Loader className="animate-spin text-white "/>
           ):(
            "Submit"
           ) }
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
