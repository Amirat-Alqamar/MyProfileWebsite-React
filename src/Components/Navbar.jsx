import React from "react";
import HomeIcon from "../assets/images/home-svgrepo-com.svg";
import IdIcon from "../assets/images/id-card-svgrepo-com.svg";
import folderIcon from "../assets/images/folder-svgrepo-com.svg";
import messageIcon from "../assets/images/message-svgrepo-com.svg";

function Navbar() {
  return (
   
    <>
       <div className="flex flex-col items-center justify-center p-3 ">
      {/* Navbar */}
      <nav className="flex w-[100%] md:w-[50%]  bg-gray-50 shadow-xl mb-30 rounded-3xl   ">
        <div className="flex max-w-5xl p-4 mx-auto ">
          
          <ul className="flex mx-auto font-normal text-gray-600 text-md md:gap-2 md:font-medium lg:font-medium md:text-base">
            <div className="flex flex-row items-center justify-center transition duration-300 ease-in-out delay-150 cursor-pointer md:px-2 hover:text-cyan-500 rounded-3xl hover:-translate-y-1 hover:scale-110">
             <img className="w-4" src={HomeIcon} alt="home-svgrepo-com.svg" />
            <a href="#home"> <li className="mx-1 ">Home</li></a> 
            </div>
           
           <div className="flex flex-row px-2 transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-500 rounded-3xl hover:-translate-y-1 hover:scale-110">
             <img className="w-5 " src={IdIcon} alt="id-card-svgrepo-com.svg" />
            <a href="#about"><li className="mx-1">About</li></a> 
            </div>

            <div className="flex flex-row px-2 transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-500 rounded-3xl hover:-translate-y-1 hover:scale-110">
             <img className="w-5 " src={folderIcon} alt="folder-svgrepo-com.svg" />
            <a href="#projects"><li className="mx-1">Projects</li></a> 
            </div>

            <div className="flex flex-row px-2 transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-500 rounded-3xl hover:-translate-y-1 hover:scale-110">
             <img className="w-5 " src={messageIcon} alt="message-svgrepo-com.svg" />
            <a href="#contact"><li className="mx-1">Contact</li></a> 
            </div>
            {/* <li className="cursor-pointer hover:text-blue-600"></li>
            <li className="cursor-pointer hover:text-blue-600"></li>
            <li className="cursor-pointer hover:text-blue-600"></li> */}
          </ul>

        </div>
      </nav>
      </div>
    </>
 
  );
}

export default Navbar;
