import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-full min-h-[841px] bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_#0f3b34_30%,_#000_50%)] z-0">
        <div class="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
        <div class="relative z-20">
          <div className="flex justify-between w-full px-20 py-10">
            <div className="flex justify-start">
              <svg
                width="46"
                height="40"
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
                  d="M23 11.8306L888.432 -489.196L23 -1984.07L-842.432 -489.196L23 11.8306ZM10.0303 34.2334L-855.401 -466.793L-1724.4 1034.23H10.0303V34.2334ZM16.9712 34.2334L885.23 530.345L1740.09 -965.767H16.9712V34.2334ZM13.6763 40V1040H594.02L881.935 536.111L13.6763 40ZM0 40L-866.906 -458.471L-1728.53 1040H0V40ZM22.7723 0.39604L889.679 498.867L889.679 498.866L22.7723 0.39604ZM23 0L889.907 -498.47L23 -2006.14L-843.907 -498.47L23 0ZM23.2277 0.39604L-843.679 498.866L-843.679 498.867L23.2277 0.39604ZM46 40V1040H1774.53L912.906 -458.471L46 40ZM32.3237 40L-835.935 536.111L-548.02 1040H32.3237V40ZM29.0288 34.2334V-965.767H-1694.09L-839.23 530.345L29.0288 34.2334ZM35.9697 34.2334V1034.23H1770.4L901.401 -466.793L35.9697 34.2334ZM23 11.8306L-842.432 -489.196L-855.401 -466.793L10.0303 34.2334L875.462 535.26L888.432 512.857L23 11.8306ZM10.0303 34.2334V1034.23H16.9712V34.2334V-965.767H10.0303V34.2334ZM16.9712 34.2334L-851.288 -461.878L-854.583 -456.111L13.6763 40L881.935 536.111L885.23 530.345L16.9712 34.2334ZM13.6763 40V-960H0V40V1040H13.6763V40ZM0 40L866.906 538.471L889.679 498.867L22.7723 0.39604L-844.134 -498.075L-866.906 -458.471L0 40ZM22.7723 0.39604L889.679 498.866L889.907 498.47L23 0L-843.907 -498.47L-844.135 -498.074L22.7723 0.39604ZM23 0L-843.907 498.47L-843.679 498.866L23.2277 0.39604L890.135 -498.074L889.907 -498.47L23 0ZM23.2277 0.39604L-843.679 498.867L-820.906 538.471L46 40L912.906 -458.471L890.134 -498.075L23.2277 0.39604ZM46 40V-960H32.3237V40V1040H46V40ZM32.3237 40L900.583 -456.111L897.288 -461.878L29.0288 34.2334L-839.23 530.345L-835.935 536.111L32.3237 40ZM29.0288 34.2334V1034.23H35.9697V34.2334V-965.767H29.0288V34.2334ZM35.9697 34.2334L901.401 -466.793L888.432 -489.196L23 11.8306L-842.432 512.857L-829.462 535.26L35.9697 34.2334Z"
                  fill="white"
                  mask="url(#path-1-inside-1_139_793)"
                />
              </svg>
            </div>
            <div className="flex justify-end">
              <button className="bg-neutral-950 text-white py-2 px-4 rounded-lg uppercase">
                Get in Touch
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full px-20 py-10">
            <div className="flex flex-col gap-3 justify-start w-full max-w-[40%]">
              <h1 className="text-[56px] font-extrabold leading-[100%] uppercase font-grotesque">
                Automotive eCommerce Needs More Than a Storefront
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-[140%] font-grotesque">
                We design the infrastructure that powers parts platforms,
                aftermarket catalogs, inventory networks, and everything in
                between. This isn't Shopify. This is war.
              </p>

              <div className="flex gap-4 justify-start items-center">
                <button className="bg-white text-neutral-950 text-sm leadling-[140%] font-medium rounded-lg px-8 py-4 uppercase">
                  Get in touch
                </button>
                <button className="bg-neutral-800 text-neutral-50 text-sm leadling-[140%] font-medium rounded-lg px-8 py-4 uppercase">
                  Only Proof. no pitch
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-end w-full max-w-[40%]">
              <div className="flex gap-3">
                <div className="flex flex-col p-5 gap-3 w-full max-w-[224px] h-full min-h-[173px] rounded-[22px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.4)_0%,_#0a0a0a_65%)] border-[2.35px] border-solid border-transparent [border-image-source:linear-gradient(113.54deg,_rgba(255,255,255,0.2)_0%,_rgba(255,255,255,0.08)_8.07%)]">
                  <div className="flex flex-col">
                    <p className="font-normal text-gray-300 leading-[130%] text-xl">
                      Annual Processed Revenue
                    </p>
                    <p className="font-normal text-gray-300 leading-[130%] text-sm">
                      $78,450,000
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/images/AnnualRevenue.png"
                      alt="Annual Revenue"
                      width={150}
                      height={150}
                      className="object-cover w-full max-w-[250px] h-full max-h-[250px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-end p-5 w-full max-w-[192px] h-full max-h-[136px] rounded-[22px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.4)_0%,_#0a0a0a_65%)] border-[2.35px] border-solid border-transparent [border-image-source:linear-gradient(113.54deg,_rgba(255,255,255,0.2)_0%,_rgba(255,255,255,0.08)_8.07%)]">
                  <p className="flex font-normal text-gray-300 leading-[130%] text-xl">
                    Sync Speed
                  </p>
                  <p className="flex font-normal text-gray-300 leading-[130%] text-2xl">
                    1.2s
                  </p>
                  <p className="flex font-normal text-gray-300 leading-[130%] text-sm">
                    for live inventory updates
                  </p>
                </div>
              </div>
              <div className="flex justify-center flex-col mt-4 w-full rounded-[22px] p-5 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.4)_0%,_#0a0a0a_65%)] border-[2.35px] border-solid border-transparent [border-image-source:linear-gradient(113.54deg,_rgba(255,255,255,0.2)_0%,_rgba(255,255,255,0.08)_8.07%)]">
                <p className="text-neutral-50 text-lg font-medium">Peak Load Capacity</p>
                <div className="mt-2 relative w-full h-[260px] rounded-lg">
                  <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-400">
                    <span>200k</span>
                    <span>150k</span>
                    <span>100k</span>
                    <span>0</span>
                  </div>
                  <div className="absolute left-10 right-0 top-0 bottom-6 border border-white/10 rounded-md">
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100%_52px,48px_100%] rounded-md"></div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polyline fill="none" stroke="#22d3ee" strokeWidth="2" points="0,80 12,72 22,68 32,70 42,66 52,60 62,64 72,61 82,67 92,58 100,55" />
                    </svg>
                    <div className="absolute right-[18%] top-[35%] bg-teal-500 text-black text-[10px] px-2 py-0.5 rounded-full">150k</div>
                  </div>
                  <div className="absolute left-10 right-0 bottom-0 flex justify-between text-xs text-gray-400 pt-2">
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <span>05</span>
                    <span>06</span>
                    <span>07</span>
                    <span>08</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-gray-400">Zero downtime, global distribution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
