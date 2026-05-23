import React from 'react';
import profilePhoto from "../assets/images/profilephoto1.png";
import githubIcon from "../assets/images/github-svgrepo-com.svg";
import instagramIcon from "../assets/images/instagram-svgrepo-com.svg";
import LinkeinIcon from "../assets/images/linkedin-linked-in-svgrepo-com.svg";
import whatsappIcon from "../assets/images/whatsapp-svgrepo-com.svg";
import locationIcon from "../assets/images/location-pin-alt-1-svgrepo-com.svg";
import bagIcon from "../assets/images/bag-svgrepo-com.svg";
import downloadIcon from "../assets/images/download-svgrepo-com (1).svg";


function Home() {
    return (
        <div className="container px-4 mx-auto">
            {/* section Hero */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[80vh] gap-10 md:gap-15 py-10" id='home'>
                
                {/* النصوص والمعلومات */}
                <div className="w-full md:w-[50%] flex flex-col justify-center px-4 md:px-0">
                   <h1 className="font-sans text-4xl font-bold tracking-wide text-black md:text-5xl">
                        Hi, I’m <span className='text-cyan-500'>A</span>MIRA
                   </h1> 
                   <h3 className='my-3 text-xl font-semibold text-cyan-600'>Web Developer</h3>
                   <p className='max-w-xl py-2 text-sm leading-relaxed text-gray-700 md:text-base'>
                        I am passionate about creating innovative digital experiences that combine high performance with elegant design. 
                        I have experience in user interface development and working with modern technologies to build effective websites and web applications. 
                   </p>
                   
                   {/* الموقع والحالة */}
                   <div className='flex flex-row flex-wrap gap-6 my-4'>
                        <div className='flex flex-row items-center gap-1'>
                            <img className='w-5 h-5' src={locationIcon} alt="Location" />
                            <p className='font-normal text-slate-500'>Syria</p>
                        </div>

                        <div className='flex flex-row items-center gap-1'>
                            <img className='w-5 h-5' src={bagIcon} alt="Availability" />
                            <p className='font-normal text-slate-500'>Available Now</p>
                        </div>
                   </div>

                   {/* زر تحميل السيرة الذاتية */}
                   <button className='flex flex-row items-center gap-2 px-4 py-2 font-sans font-medium text-white transition duration-300 ease-in-out rounded-lg shadow-md w-fit bg-cyan-500 hover:bg-cyan-600 hover:-translate-y-1 hover:scale-105'>
                        <img className='w-4 h-4 brightness-0 invert' src={downloadIcon} alt="download" />
                        <span className='text-sm'>Download CV</span>
                   </button>

                   <hr className='my-6 border-slate-200' />
                   
                   {/* شبكات التواصل الاجتماعي */}
                   <div className="flex flex-row items-center gap-4">
                        <p className='font-medium text-slate-700'>Follow me:</p>
                        <div className="flex flex-row gap-3">
                            <span className='flex items-center justify-center p-1 transition duration-300 ease-in-out rounded-full cursor-pointer hover:bg-violet-200 hover:-translate-y-1 hover:scale-110'> 
                                <img className="w-6 h-6" src={githubIcon} alt="Github" />
                            </span> 
                            <span className='flex items-center justify-center p-1 transition duration-300 ease-in-out rounded-full cursor-pointer hover:bg-blue-200 hover:-translate-y-1 hover:scale-110'>
                                <img className="w-6 h-6" src={LinkeinIcon} alt="LinkedIn" />
                            </span>
                            <span className='flex items-center justify-center p-1 transition duration-300 ease-in-out rounded-full cursor-pointer hover:bg-pink-200 hover:-translate-y-1 hover:scale-110'>
                                <img className="w-6 h-6" src={instagramIcon} alt="Instagram" />
                            </span>
                            <span className='flex items-center justify-center p-1 transition duration-300 ease-in-out rounded-full cursor-pointer hover:bg-green-200 hover:-translate-y-1 hover:scale-110'>
                                <img className="w-6 h-6" src={whatsappIcon} alt="WhatsApp" />
                            </span>
                        </div>
                   </div>
                
                </div>

                {/* الصورة الشخصية */}
                <div className="w-[70%] md:w-[40%] flex justify-center items-center">
                     <img className="object-contain w-full h-auto max-w-sm" src={profilePhoto} alt="Amira Illustration" />
                </div>
               
            </section>
        </div>
    );
}

export default Home;