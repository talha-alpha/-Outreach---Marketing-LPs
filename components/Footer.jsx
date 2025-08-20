import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-white py-8 sm:py-10 lg:py-10 lg:pt-custom">
      {/* Mobile/Tablet Layout */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:hidden mx-auto gap-4 sm:gap-0">
        <div className="flex justify-start">
          <a
            href="#hero"
            className="hover:opacity-80 ease-in-out duration-300 flex items-center gap-2 group"
            aria-label="Return to top of page"
            title="Return to top"
          >
            <svg
              width="36"
              height="32"
              className="w-9 h-8 sm:w-10 sm:h-9"
              viewBox="0 0 46 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 11.8306L10.0303 34.2334H16.9712L13.6763 40H0L22.7723 0.39604L23 0L23.2277 0.39604L46 40H32.3237L29.0288 34.2334H35.9697L23 11.8306Z"
                fill="white"
              />
            </svg>
            <span className="text-sm font-medium text-white group-hover:text-neutral-300 transition-colors duration-300">
              Back to Top
            </span>
          </a>
        </div>
        <div className="flex justify-center sm:justify-end">
          <p className="flex items-center text-white text-sm font-normal font-archivo text-center sm:text-left">
            Copyright © 2025 Alpha Squad
          </p>
        </div>
      </div>

      {/* Desktop Layout - Original Styles */}
      <div className="hidden lg:flex lg:items-center justify-between w-full max-w-[1440px] px-20 mx-auto">
        <div className="flex justify-start">
          <a
            href="#hero"
            className="hover:opacity-80 ease-in-out duration-300 flex items-center gap-3 group"
            aria-label="Return to top of page"
            title="Return to top"
          >
            <svg
              width="46"
              height="40"
              viewBox="0 0 46 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 11.8306L10.0303 34.2334H16.9712L13.6763 40H0L22.7723 0.39604L23 0L23.2277 0.39604L46 40H32.3237L29.0288 34.2334H35.9697L23 11.8306Z"
                fill="white"
              />
            </svg>
            <span className="text-base font-medium text-white group-hover:text-neutral-300 transition-colors duration-300">
              Back to Top
            </span>
          </a>
        </div>
        <div className="flex justify-end">
          <p className="flex items-center text-white text-sm font-normal font-archivo">
            Copyright © 2025 Alpha Squad
          </p>
        </div>
      </div>
    </footer>
  );
}
