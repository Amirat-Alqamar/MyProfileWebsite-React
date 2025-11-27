import React from "react";

function Contact(props) {
  return (
    <section className="mt-10 " id="contact">
      <h1 className="text-center text-slate-400">Contact Me</h1>
      <h1 className="my-5 text-2xl font-bold text-center">Get in Touch with us</h1>

      <div className="flex flex-col-reverse px-5 md:flex-row">
        <div className=" md:w-[30%] m-7 px-4 mx-10 ">
          <p></p>

          <div className="flex flex-row gap-2 my-2 ">
            <span>
              <img
                className="w-5"
                src="src/assets/images/message-svgrepo-com.svg"
                alt="message"
              />
            </span>
            <p>Amira@gmail.com</p>
          </div>

          <div className="flex flex-row gap-2 my-2">
            <span>
              <img
                className="w-5"
                src="src/assets/images/phone-svgrepo-com.svg"
                alt="phone"
              />
            </span>
            <p>+ 963 56158867</p>
          </div>

          <div className="flex flex-row gap-2 my-2">
            <span>
              <img
                className="w-5"
                src="src/assets/images/location-pin-alt-1-svgrepo-com.svg"
                alt="location"
              />
            </span>
            <p>Syria - Aleppo</p>
          </div>
            <hr className='my-3' />
          <div class="flex flex-row gap-3">
                            <span className='flex justify-center w-8 h-8 rounded-full cursor-pointer bg-slate-200'><img className="w-5 " src="src/assets/images/linkedin-linked-in-svgrepo-com.svg" alt="icons" /></span>
                            <span className='flex justify-center w-8 h-8 rounded-full cursor-pointer bg-slate-200'><img className="w-5 " src="src/assets/images/instagram-svgrepo-com.svg" alt="icons" /></span>
                           <span className='flex justify-center w-8 h-8 rounded-full cursor-pointer bg-slate-200'><img className="w-5 " src="src/assets/images/whatsapp-svgrepo-com .svg" alt="icons" /></span>
                           
                        </div>
        </div>
        <div className="md:w-[50%] m-10">
          <form class=" flex flex-col justify-center items-align gap-5">
           
            <div >
              <input
                type="text"
                id="input-group-1"
                class="rounded-md block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                placeholder="Your Name"
              />
            </div>

            <div >
              <input
                type="text"
                id="input-group-1"
                class="rounded-md block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                placeholder="Your Email"
              />
            </div>

            <div>
              <textarea
                id="message"
                rows="4"
                class="rounded-md bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
                placeholder="Write Your message here..."
              ></textarea>
            </div>

            <button className="md:w-[20%] bg-cyan-500 rounded-3xl px-3 py-1 font-medium font-sans hover:text-white mx-auto">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
