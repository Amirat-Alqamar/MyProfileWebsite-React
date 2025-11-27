import React from 'react';

function Home() {
    return (
        <div>
            {/* section Hero */}
            <section className="flex flex-col my-5 md:flex-row lg:flex-row gap-15" id='home'>
                <div className="w-[80%] md:w-[45%] mx-10 ">
                   <h1 className="font-sans text-3xl font-bold text-black">Hi, I’m <span className='text-cyan-500'>A</span>MIRA</h1> 
                   <h3 className='my-2 font-semibold text-cyan-600'>Web Developer</h3>
                   <p className='py-2 text-sm'>I am passionate about creating innovative digital experiences that combine high performance with elegant design. 
                    I have experience in user interface development and working with modern technologies to build effective websites and web applications. </p>
                    <div className='flex flex-row mb-3 gap-7'>
                    <div className='flex flex-row'>
                        <span><img className='w-5' src="src/assets/images/location-pin-alt-1-svgrepo-com.svg" alt="" /></span>
                        <p className='font-normal text-slate-500'> Syria</p>
                    </div>

                    <div className='flex flex-row'>
                        <span><img className='w-5' src="src/assets/images/bag-svgrepo-com.svg" alt="" /></span>
                        <p className='font-normal text-slate-500'>Available Now</p>
                    </div>

                    </div>
                    <button Download className='flex flex-row gap-1 px-3 py-1 font-sans font-medium transition duration-300 ease-in-out delay-150 bg-cyan-500 rounded-3xl hover:text-white hover:-translate-y-1 hover:scale-110'>
                        <img className='w-4' src="src/assets/images/download-svgrepo-com (1).svg" alt="download" />
                       <p className='text-sm'> Download CV</p>
                    </button>
                    <hr className='my-2' />
                    <div className="flex flex-row gap-3 ">
                        <p className='font-medium'>Follow me:</p>
                        <div class="flex flex-row gap-3">
                          <span className='flex justify-center transition duration-300 ease-in-out delay-150 rounded-full hover:bg-violet-200 w-7 hover:-translate-y-1 hover:scale-110'> <img className="w-5 " src="src/assets/images/github-svgrepo-com.svg" alt="icons" /></span> 
                            <span className='flex justify-center transition duration-300 ease-in-out delay-150 rounded-full hover:bg-blue-200 w-7 hover:-translate-y-1 hover:scale-110'><img className="w-5 " src="src/assets/images/linkedin-linked-in-svgrepo-com.svg" alt="icons" /></span>
                            <span className='flex justify-center transition duration-300 ease-in-out delay-150 rounded-full hover:bg-pink-200 w-7 hover:-translate-y-1 hover:scale-110'><img className="w-5 " src="src/assets/images/instagram-svgrepo-com.svg" alt="icons" /></span>
                           <span className='flex justify-center transition duration-300 ease-in-out delay-150 rounded-full hover:bg-green-200 w-7 hover:-translate-y-1 hover:scale-110'><img className="w-5 " src="src/assets/images/whatsapp-svgrepo-com .svg" alt="icons" /></span>
                           
                        </div>
                    </div>
                
                </div>
                <div className="md:w-[35%] ml-10">
                     <img src="src/assets/images/profilephoto1.png" alt="Home" />
                </div>
               
            </section>
        </div>
    );
}

export default Home;