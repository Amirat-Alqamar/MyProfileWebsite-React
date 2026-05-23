import React from "react";

function Contact(props) {
  return (
    <div className="container px-4 mx-auto">
      <section className="py-12 md:py-20" id="contact">
        <h5 className="text-sm font-semibold tracking-wider text-center uppercase text-cyan-600">Contact Me</h5>
        <h2 className="mt-2 mb-10 text-3xl font-bold text-center text-slate-800">Get in Touch with us</h2>

        <div className="flex flex-col items-start justify-center max-w-5xl gap-10 mx-auto md:flex-row md:gap-16">
          
          {/* قسم معلومات الاتصال */}
          <div className="w-full md:w-[35%] space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
            
            <div className="flex flex-row items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-100 text-cyan-600">
                <img
                  className="w-5 h-5"
                  src="src/assets/images/message-svgrepo-com.svg"
                  alt="message"
                />
              </span>
              <p className="text-sm font-medium text-slate-700">Amira@gmail.com</p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-100 text-cyan-600">
                <img
                  className="w-5 h-5"
                  src="src/assets/images/phone-svgrepo-com.svg"
                  alt="phone"
                />
              </span>
              <p className="text-sm font-medium text-slate-700">+ 963 56158867</p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-100 text-cyan-600">
                <img
                  className="w-5 h-5"
                  src="src/assets/images/location-pin-alt-1-svgrepo-com.svg"
                  alt="location"
                />
              </span>
              <p className="text-sm font-medium text-slate-700">Syria - Aleppo</p>
            </div>
            
            <hr className='my-4 border-slate-200' />
            
            {/* أزرار التواصل الاجتماعي */}
            <div className="flex flex-row justify-center gap-3 pt-2 md:justify-start">
              <span className='flex items-center justify-center w-8 h-8 transition-colors duration-300 rounded-full cursor-pointer bg-slate-200 hover:bg-blue-200'>
                <img className="w-4 h-4" src="src/assets/images/linkedin-linked-in-svgrepo-com.svg" alt="LinkedIn" />
              </span>
              <span className='flex items-center justify-center w-8 h-8 transition-colors duration-300 rounded-full cursor-pointer bg-slate-200 hover:bg-pink-200'>
                <img className="w-4 h-4" src="src/assets/images/instagram-svgrepo-com.svg" alt="Instagram" />
              </span>
              <span className='flex items-center justify-center w-8 h-8 transition-colors duration-300 rounded-full cursor-pointer bg-slate-200 hover:bg-green-200'>
                <img className="w-4 h-4" src="src/assets/images/whatsapp-svgrepo-com .svg" alt="WhatsApp" />
              </span>
            </div>
          </div>

          {/* قسم استمارة المراسلة */}
          <div className="w-full md:w-[55%]">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-sm transition-all bg-white border shadow-sm text-slate-800 placeholder-slate-400 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  className="w-full px-4 py-3 text-sm transition-all bg-white border shadow-sm text-slate-800 placeholder-slate-400 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <textarea
                  rows="4"
                  className="w-full p-4 text-sm transition-all bg-white border shadow-sm resize-none text-slate-800 placeholder-slate-400 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Write Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="w-full md:w-fit md:px-8 py-2.5 bg-cyan-500 text-white font-medium font-sans rounded-xl hover:bg-cyan-600 transition-colors duration-300 shadow-md shadow-cyan-500/10 ">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;