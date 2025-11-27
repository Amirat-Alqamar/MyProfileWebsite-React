import React from "react";

function Footer(props) {
  return (
   
      

<footer class="bg-black text-white ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            
            <ul class="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-body sm:mb-0 mx-auto">
                <li>
                    <a href="#home" class="hover:underline hover:text-cyan-500 me-4 md:me-6 ">Home</a>
                </li>
                <li>
                    <a href="#about" class="hover:underline hover:text-cyan-500 me-4 md:me-6">About Me</a>
                </li>
                <li>
                    <a href="#projects" class="hover:underline hover:text-cyan-500 me-4 md:me-6">Projects</a>
                </li>
                <li>
                    <a href="#contact" class="hover:underline hover:text-cyan-500">Contact Me</a>
                </li>
            </ul>
        </div>
        <hr class="md:w-[50%] my-6 border-default sm:mx-auto lg:my-8" />
        <span class="block text-sm text-body sm:text-center">© 2025  All rights reserved to the website designer </span>
    </div>
</footer>


  );
}

export default Footer;
