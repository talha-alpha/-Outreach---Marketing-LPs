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
    <section
      id="contact"
      className="flex justify-center items-center w-full h-full min-h-[700px] bg-neutral-950 mx-auto px-4 md:px-8 lg:px-20 bg-[url('/backgrounds/holographic-background.png')] bg-cover bg-center"
    >
      {/* Mobile/Tablet Layout */}
      <div className="flex flex-col w-full max-w-[1440px] gap-8 sm:gap-10 lg:hidden mx-auto text-center items-center">
        <div className="w-full max-w-[810px] gap-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-56 font-extrabold text-white font-grotesque uppercase leading-[110%] tracking-tightest">
            Ready to Outpace Your Competition?
          </h2>
          <p className="text-sm sm:text-base font-normal text-neutral-400 leading-[140%] font-archivo">
            Bring us the challenge. We'll bring the firepower to solve it.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full xl:max-w-[610px] max-w-[350px] bg-neutral-950 p-10 gap-10"
        >
          <div class="w-full">
            <div class="relative">
              <input
                type="text"
                id="name"
                class="peer w-full px-4 py-2 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer placeholder-transparent"
                placeholder="Name"
              />
              <label
                for="name"
                class="pointer-events-none absolute left-0 -top-3.5 text-neutral-300 text-base transition-all font-archivo
             peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-300 peer-placeholder-shown:top-2 
             peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white"
              >
                Name
              </label>
            </div>
          </div>
          <div class="w-full">
            <div class="relative">
              <input
                type="email"
                id="email"
                class="peer w-full px-4 py-2 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer placeholder-transparent"
                placeholder="Email Address"
              />
              <label
                for="email"
                class="pointer-events-none absolute left-0 -top-3.5 text-neutral-300 text-base transition-all font-archivo
             peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-300 peer-placeholder-shown:top-2 
             peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white"
              >
                Email Address
              </label>
            </div>
          </div>
          <div class="w-full">
            <div class="relative">
              <textarea
                id="message"
                rows="4"
                class="peer w-full px-4 py-2 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer placeholder-transparent"
                placeholder="What’s Bugging You..."
              ></textarea>
              <label
                for="message"
                class="pointer-events-none absolute left-0 -top-3.5 text-neutral-300 text-base transition-all font-archivo
             peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-300 peer-placeholder-shown:top-2 
             peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white"
              >
                What’s Bugging You...
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full max-w-[102px] items-center bg-neutral-50 hover:bg-neutral-800 hover:text-white text-neutral-950 text-sm font-medium leading-[140%] uppercase px-6 py-2 rounded-lg font-archivo cursor-pointer transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Desktop Layout - Original Styles */}
      <div className="hidden lg:flex justify-between w-full max-w-[1440px] gap-3 2xl:gap-0 xl:px-20 mx-auto">
        <div className="flex flex-col w-full xl:max-w-[610px] max-w-[350px] gap-4">
          <h2 className="xl:text-56 text-4xl font-extrabold text-white font-grotesque uppercase leading-[110%] tracking-tightest">
            Ready to Outpace Your Competition?
          </h2>
          <p className="flex text-base font-normal text-neutral-400 leading-[140%] font-archivo">
            Bring us the challenge. We'll bring the firepower to solve it.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full xl:max-w-[610px] max-w-[350px] bg-neutral-950 p-10 gap-10"
        >
          <div class="w-full">
            <div class="relative">
              <input
                type="text"
                id="name"
                class="peer w-full px-4 py-2 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer placeholder-transparent"
                placeholder="Name"
              />
              <label
                for="name"
                class="pointer-events-none absolute left-0 -top-3.5 text-neutral-300 text-base transition-all font-archivo
             peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-300 peer-placeholder-shown:top-2 
             peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white"
              >
                Name
              </label>
            </div>
          </div>
          <div class="w-full">
            <div class="relative">
              <input
                type="email"
                id="email"
                class="peer w-full px-4 py-2 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer placeholder-transparent"
                placeholder="Email Address"
              />
              <label
                for="email"
                class="pointer-events-none absolute left-0 -top-3.5 text-neutral-300 text-base transition-all font-archivo
             peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-300 peer-placeholder-shown:top-2 
             peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white"
              >
                Email Address
              </label>
            </div>
          </div>
          <div class="w-full">
            <div class="relative">
              <textarea
                id="message"
                rows="4"
                class="peer w-full px-4 py-2 resize-none font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer placeholder-transparent"
                placeholder="What’s Bugging You..."
              ></textarea>
              <label
                for="message"
                class="pointer-events-none absolute left-0 -top-3.5 text-neutral-300 text-base transition-all font-archivo
             peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-300 peer-placeholder-shown:top-2 
             peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-white"
              >
                What’s Bugging You...
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full max-w-[102px] items-center bg-neutral-50 hover:bg-neutral-800 hover:text-white text-neutral-950 text-sm font-medium leading-[140%] uppercase px-6 py-2 rounded-lg font-archivo cursor-pointer transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
