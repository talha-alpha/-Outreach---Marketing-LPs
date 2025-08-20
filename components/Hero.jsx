import Image from "next/image";

export default function Hero() {
  const actionButtons = [
    {
      text: "Get in touch",
      href: "#contact",
      className:
        "flex justify-center items-center w-full min-w-[147px] h-full max-h-[48px] bg-white text-neutral-950 hover:text-neutral-50 hover:bg-neutral-800 ease-in-out duration-500 text-sm leadling-[140%] font-medium rounded-lg py-4 uppercase font-archivo",
    },
    {
      text: "Only Proof. no pitch",
      type: "button",
      className:
        "flex justify-center items-center w-full min-w-[209px] h-full max-h-[48px] bg-neutral-800 text-neutral-50 hover:bg-neutral-700 ease-in-out duration-500 text-sm leadling-[140%] font-medium rounded-lg py-4 uppercase font-archivo",
    },
  ];

  return (
    <section
      id="hero"
      className="relative h-auto min-h-[950px] sm:min-h-[950px] lg:min-h-[741px] bg-neutral-950 text-white bg-[url('/backgrounds/HeroGrid.png')] bg-cover bg-center py-8 sm:py-12 lg:py-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_#0f3b34_30%,_#000_50%)] z-0">
        <div className="absolute inset-0 z-10 pointer-events-none bg-cover bg-center bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
        <div className="absolute inset-0 z-10 pointer-events-none bg-[url('/backgrounds/HeroGrid.png')] bg-cover bg-center"></div>
        <div className="relative z-20">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="flex justify-between w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-8 lg:py-10">
              <div className="flex justify-start">
                <svg
                  width="36"
                  height="32"
                  className="sm:w-[40px] sm:h-[36px] lg:w-[46px] lg:h-[40px]"
                  viewBox="0 0 46 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_139_793" fill="white">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23 11.8306L10.0303 34.2334H16.9712L13.6763 40H0L22.7723 0.39604L23 0L23.2277 0.39604L46 40H32.3237L29.0288 34.2334H35.9697L23 11.8306Z"
                    />
                  </mask>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23 11.8306L10.0303 34.2334H16.9712L13.6763 40H0L22.7723 0.39604L23 0L23.2277 0.39604L46 40H32.3237L29.0288 34.2334H35.9697L23 11.8306Z"
                    fill="white"
                  />
                  <path
                    d="M23 11.8306L888.432 -489.196L23 -1984.07L-842.432 -489.196L23 11.8306ZM10.0303 34.2334L-855.401 -466.793L-1724.4 1034.23H10.0303V34.2334ZM16.9712 34.2334L885.23 530.345L1740.09 -965.767H16.9712V34.2334ZM13.6763 40V1040H594.02L881.935 536.111L13.6763 40ZM0 40L-866.906 -458.471L-1728.53 1040H0V40ZM22.7723 0.39604L889.679 498.867L889.679 498.866L22.7723 0.39604ZM23 0L889.907 -498.47L23 -2006.14L-843.907 -498.47L23 0ZM23.2277 0.39604L-843.679 498.866L-843.679 498.867L23.2277 0.39604ZM46 40V1040H1774.53L912.906 -458.471L46 40ZM32.3237 40L-835.935 536.111L-548.02 1040H32.3237V40ZM29.0288 34.2334V-965.767H-1694.09L-839.23 530.345L29.0288 34.2334ZM35.9697 34.2334V1034.23H1770.4L901.401 -466.793L35.9697 34.2334ZM23 11.8306L-842.432 -489.196L-855.401 -466.793L10.0303 34.2334L875.462 535.26L888.432 512.857L23 11.8306ZM10.0303 34.2334V1034.23H16.9712V34.2334V-965.767H10.0303V34.2334ZM16.9712 34.2334L-851.288 -461.878L-854.583 -456.111L13.6763 40L881.935 536.111L885.23 530.345L16.9712 34.2334ZM13.6763 40V-960H0V40V1040H13.6763V40ZM0 40L866.906 538.471L889.679 498.867L22.7723 0.39604L-844.134 -498.075L-866.906 -458.471L0 40ZM22.7723 0.39604L889.679 498.866L889.907 498.47L23 0L-843.907 -498.47L-844.135 -498.074L22.7723 0.39604ZM23 0L-843.907 498.47L-843.679 498.866L23.2277 0.39604L890.135 -498.074L889.907 -498.47L23 0ZM23.2277 0.39604L-843.679 498.867L-820.906 538.471L46 40L912.906 -458.471L890.134 -498.075L23.2277 0.39604ZM46 40V-960H32.3237V40V1040H46V40ZM32.3237 40L900.583 -456.111L897.288 -461.878L29.0288 34.2334L-839.23 530.345L-835.935 536.111L32.3237V40ZM29.0288 34.2334V1034.23H35.9697V34.2334V-965.767H29.0288V34.2334ZM35.9697 34.2334L901.401 -466.793L888.432 -489.196L23 11.8306L-842.432 512.857L-829.462 535.26L35.9697 34.2334Z"
                    fill="white"
                    mask="url(#path-1-inside-1_139_793)"
                  />
                </svg>
              </div>
              <div className="flex justify-end">
                <a
                  href="#contact"
                  className="flex justify-center items-center w-full max-w-[117px] h-full max-h-[32px] sm:max-h-[35px] lg:max-h-[37px] text-xs bg-neutral-950 text-white hover:text-neutral-950 hover:bg-neutral-50 ease-in-out duration-500 py-2 px-3 sm:px-4 rounded-lg uppercase font-archivo"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex w-full max-w-[1280px] mx-auto mt-[32px] sm:mt-[40px] lg:mt-[52px] px-4 sm:px-6 lg:px-10 xl:px-5">
            <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-0">
              <div className="flex flex-col gap-3 my-auto items-center w-full lg:max-w-[632px] h-full lg:max-h-[364px] text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] font-extrabold leading-[100%] uppercase font-grotesque tracking-tightest">
                  Automotive eCommerce Needs More Than a Storefront
                </h1>

                <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-7 lg:mb-8 max-w-3xl leading-[140%] font-archivo mx-auto lg:mx-0">
                  We design the infrastructure that powers parts platforms,
                  aftermarket catalogs, inventory networks, and everything in
                  between. This isn't Shopify. This is war.
                </p>

                <div className="flex flex-col w-full sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
                  {actionButtons.map((button, index) =>
                    button.href ? (
                      <a
                        key={index}
                        href={button.href}
                        className={`${button.className} w-full sm:w-fit`}
                      >
                        {button.text}
                      </a>
                    ) : (
                      <button
                        key={index}
                        type={button.type}
                        className={`${button.className} w-full sm:w-fit`}
                      >
                        {button.text}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4 justify-center lg:justify-end w-full lg:max-w-[432px]">
                <div className="flex gap-3 sm:gap-4 justify-center lg:justify-end">
                  <div className="w-1/2 sm:w-auto max-w-[200px] sm:max-w-[224px]">
                    <Image
                      src="/images/HeroSectionImgs/annualRevenue.png"
                      alt="Annual Revenue"
                      width={224}
                      height={173}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="flex items-end w-1/2 sm:w-auto max-w-[180px] sm:max-w-[192px]">
                    <Image
                      src="/images/HeroSectionImgs/syncSpeed.png"
                      alt="Sync Speed"
                      width={192}
                      height={136}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src="/images/HeroSectionImgs/peakLoad.png"
                    alt="Peak Load"
                    width={384}
                    height={266}
                    className="w-full h-auto max-w-[300px] sm:max-w-[350px] lg:max-w-[384px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
