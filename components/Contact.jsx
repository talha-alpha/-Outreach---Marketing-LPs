"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    challenge: "",
  });

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

  return (
    <section className="flex justify-center items-center w-full h-full min-h-[700px] bg-neutral-950 mx-auto px-20 bg-[url('/backgrounds/holographic-background.png')] bg-cover bg-center">
      <div className="flex justify-between w-full max-w-[1440px] px-20 mx-auto">
        <div className="w-full max-w-[610px] gap-4">
          <h2 className="text-56 font-extrabold text-white font-grotesque uppercase leading-[110%] tracking-tightest">
            Ready to Outpace Your Competition?
          </h2>
          <p className="flex text-base font-normal text-neutral-400 leading-[140%] font-archivo">
            Bring us the challenge. We’ll bring the firepower to solve it.
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
                className="w-full px-4 py-2 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer"
                required
              />
              <p className="absolute top-0 left-0 text-white text-base text-normal leading-[120%] font-archivo">
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
                className="w-full px-4 py-2 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer"
                required
              />
              <p className="absolute top-0 left-0 text-neutral-200 text-base text-normal leading-[120%] font-archivo">
                Email
              </p>
            </div>
            <div className="relative">
              <textarea
                id="challenge"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 font-archivo text-neutral-200 bg-neutral-950 border-b border-neutral-800 focus-visible:outline-none focus-visible:ring-0 cursor-pointer"
                required
              />

              <p className="absolute top-0 left-0 text-neutral-200 text-base text-normal leading-[120%] font-archivo">
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
