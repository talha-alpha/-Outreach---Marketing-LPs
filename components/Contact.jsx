"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    challenge: "",
  });

  const [focusedField, setFocusedField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (fieldId) => {
    setFocusedField(fieldId);
  };

  const handleBlur = (fieldName) => {
    if (!formData[fieldName]) {
      setFocusedField("");
    }
  };

  return (
    <section id="contact" className="flex justify-center items-center w-full h-full min-h-[700px] bg-neutral-950 mx-auto px-4 md:px-8 lg:px-20 bg-[url('/backgrounds/holographic-background.png')] bg-cover bg-center">
      {/* Mobile/Tablet Layout */}
      <div className="flex flex-col w-full max-w-[1440px] gap-8 sm:gap-10 lg:hidden mx-auto text-center items-center">
        <div className="w-full max-w-[610px] gap-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-56 font-extrabold text-white font-grotesque uppercase leading-[110%] tracking-tightest">
            Ready to Outpace Your Competition?
          </h2>
          <p className="text-sm sm:text-base font-normal text-neutral-400 leading-[140%] font-archivo">
            Bring us the challenge. We'll bring the firepower to solve it.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-[610px] bg-neutral-950 p-6 sm:p-8 lg:p-10 gap-8 sm:gap-10"
        >
          <div className="flex flex-col gap-6 bg-neutral-950">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
                className="w-full px-3 sm:px-4 py-2 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer text-sm sm:text-base"
                required
              />
              <p className={`absolute top-0 left-0 text-sm sm:text-base text-normal leading-[120%] font-archivo transition-all duration-300 ${
                focusedField === "name" || formData.name ? 'opacity-0 pointer-events-none' : 'text-white'
              }`}>
                Name
              </p>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
                className="w-full px-3 sm:px-4 py-2 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer text-sm sm:text-base"
                required
              />
              <p className={`absolute top-0 left-0 text-sm sm:text-base text-normal leading-[120%] font-archivo transition-all duration-300 ${
                focusedField === "email" || formData.email ? 'opacity-0 pointer-events-none' : 'text-neutral-200'
              }`}>
                Email
              </p>
            </div>
            <div className="relative">
              <textarea
                id="challenge"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                onFocus={() => handleFocus("challenge")}
                onBlur={() => handleBlur("challenge")}
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer text-sm sm:text-base"
                required
              />

              <p className={`absolute top-0 left-0 text-sm sm:text-base text-normal leading-[120%] font-archivo transition-all duration-300 ${
                focusedField === "challenge" || formData.challenge ? 'opacity-0 pointer-events-none' : 'text-neutral-200'
              }`}>
                What's Bugging You...
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto sm:max-w-[102px] items-center bg-neutral-50 text-neutral-950 text-sm font-medium leading-[140%] uppercase px-6 py-2 rounded-lg font-archivo cursor-pointer self-center"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Desktop Layout - Original Styles */}
      <div className="hidden lg:flex justify-between w-full max-w-[1440px] px-20 mx-auto">
        <div className="w-full max-w-[610px] gap-4">
          <h2 className="text-56 font-extrabold text-white font-grotesque uppercase leading-[110%] tracking-tightest">
            Ready to Outpace Your Competition?
          </h2>
          <p className="flex text-base font-normal text-neutral-400 leading-[140%] font-archivo">
            Bring us the challenge. We'll bring the firepower to solve it.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-[610px] bg-neutral-950 p-10 gap-10"
        >
          <div className="flex flex-col gap-6 bg-neutral-950">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
                className="w-full px-4 py-2 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer"
                required
              />
              <p className={`absolute top-0 left-0 text-base text-normal leading-[120%] font-archivo transition-all duration-300 ${
                focusedField === "name" || formData.name ? 'opacity-0 pointer-events-none' : 'text-white'
              }`}>
                Name
              </p>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
                className="w-full px-4 py-2 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer"
                required
              />
              <p className={`absolute top-0 left-0 text-base text-normal leading-[120%] font-archivo transition-all duration-300 ${
                focusedField === "email" || formData.email ? 'opacity-0 pointer-events-none' : 'text-neutral-200'
              }`}>
                Email
              </p>
            </div>
            <div className="relative">
              <textarea
                id="challenge"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                onFocus={() => handleFocus("challenge")}
                onBlur={() => handleBlur("challenge")}
                rows={4}
                className="w-full px-4 py-3 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer"
                required
              />

              <p className={`absolute top-0 left-0 text-base text-normal leading-[120%] font-archivo transition-all duration-300 ${
                focusedField === "challenge" || formData.challenge ? 'opacity-0 pointer-events-none' : 'text-neutral-200'
              }`}>
                What's Bugging You...
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full max-w-[102px] items-center bg-neutral-50 text-neutral-950 text-sm font-medium leading-[140%] uppercase px-6 py-2 rounded-lg font-archivo cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
