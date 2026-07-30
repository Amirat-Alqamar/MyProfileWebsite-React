import React, { useState } from "react";
import messageIcon from "../assets/images/message-svgrepo-com.svg";
import phoneIcon from "../assets/images/phone-svgrepo-com.svg";
import locationIcon from "../assets/images/location-pin-alt-1-svgrepo-com.svg";
import instagramIcon from "../assets/images/instagram-svgrepo-com.svg";
import LinkeinIcon from "../assets/images/linkedin-linked-in-svgrepo-com.svg";
import whatsappIcon from "../assets/images/whatsapp-svgrepo-com.svg";

function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(e.target);
    
    // تم إضافة الـ Access Key الخاص بك هنا
    formData.append("access_key", "213b7e88-6095-4f13-b6e4-bc7b6380245c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! ✅");
        e.target.reset(); // تفريغ الخانات بعد الإرسال
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-4 mx-auto">
      <section className="py-12 md:py-20" id="contact">
        <h5 className="text-2xl font-bold tracking-wider text-center uppercase text-cyan-600">Let's Work Together</h5>
        <h2 className="mt-2 mb-10 text-3xl font-bold text-center text-slate-800">Get in Touch with me</h2>

        <div className="flex flex-col items-start justify-center max-w-5xl gap-10 mx-auto md:flex-row md:gap-16">
          
          {/* معلومات الاتصال */}
          <div className="w-full md:w-[35%] space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
            <a href="mailto:hmamyamiratalqamar@gmail.com" className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-100 text-cyan-600">
                <img className="w-5 h-5" src={messageIcon} alt="message" />
              </span>
              <p className="text-xs font-medium break-all sm:text-sm text-slate-700">hmamyamiratalqamar@gmail.com</p>
            </a>

            <a href="tel:+96356158867" className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-100 text-cyan-600">
                <img className="w-5 h-5" src={phoneIcon} alt="phone" />
              </span>
              <p className="text-sm font-medium text-slate-700">+ 963 56158867</p>
            </a>

            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-100 text-cyan-600">
                <img className="w-5 h-5" src={locationIcon} alt="location" />
              </span>
              <p className="text-sm font-medium text-slate-700">Syria - Aleppo</p>
            </div>
            
            <hr className="my-4 border-slate-200" />
            
            {/* أزرار السوشيال ميديا */}
            <div className="flex justify-center gap-3 pt-2 md:justify-start">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-slate-200 hover:bg-blue-200">
                <img className="w-4 h-4" src={LinkeinIcon} alt="LinkedIn" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-slate-200 hover:bg-pink-200">
                <img className="w-4 h-4" src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://wa.me/96356158867" target="_blank" rel="noreferrer" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-slate-200 hover:bg-green-200">
                <img className="w-4 h-4" src={whatsappIcon} alt="WhatsApp" />
              </a>
            </div>
          </div>

          {/* استمارة الإرسال */}
          <div className="w-full md:w-[55%]">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 text-sm bg-white border shadow-sm text-slate-800 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 text-sm bg-white border shadow-sm text-slate-800 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write Your message here..."
                className="w-full p-4 text-sm bg-white border shadow-sm resize-none text-slate-800 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-fit md:px-8 py-2.5 bg-cyan-500 text-white font-medium rounded-xl hover:bg-cyan-600 transition-colors shadow-md shadow-cyan-500/10 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* رسالة للتأكيد للزائر بأن الإرسال نجح */}
              {result && (
                <p className={`text-sm font-semibold mt-2 ${result.includes("Successfully") ? "text-emerald-600" : "text-slate-500"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;