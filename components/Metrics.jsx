import Image from "next/image";

export default function Metrics() {
  const metrics = [
    {
      title: "Uptime",
      beforeValue: "91.8%",
      afterValue: "99.9%",
      description: "Stable across xyz client platforms"
    },
    {
      title: "Onboarding",
      beforeValue: "2 months",
      afterValue: "48 hours",
      description: "Guided experience - empty support tickets"
    },
    {
      title: "Infrastructure Expense",
      beforeValue: "100%",
      afterValue: "45%",
      description: "Legacy stack restructured with modular services. Better performance"
    },
    {
      title: "Client Load Times",
      beforeValue: "5+",
      beforeUnit: "Secs",
      afterValue: "<2",
      afterUnit: "Secs",
      description: "Across all product and catalog pages"
    }
  ];

  return (
    <section className="bg-neutral-950">
      <div className="">
        <div className="text-center w-full max-w-[848px] mx-auto pb-8 sm:pb-12 md:pb-16 lg:pb-60 px-4 sm:px-6 lg:px-0">
          <h2 className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-grotesque uppercase tracking-tightest">
            What this leads to....
          </h2>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="flex flex-col justify-center w-full max-w-[1440px] mx-auto gap-4 pb-8 sm:pb-12 md:pb-16 lg:hidden px-4 sm:px-6 md:px-8">
          <div className="flex flex-col justify-center w-full max-w-[1440px] mx-auto gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="flex w-full">
                <div className="flex flex-col justify-center items-center w-full h-full min-h-[250px] sm:min-h-[280px] bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.03)_100%)] gap-8 sm:gap-12 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-neutral-900">
                  <p className="flex justify-center text-lg sm:text-xl font-normal text-neutral-400 font-archivo">
                    {metric.title}
                  </p>
                  <div className="flex justify-center items-center gap-4 sm:gap-6">
                    <p className="text-neutral-400 text-2xl sm:text-3xl font-semibold leading-[120%] tracking-tightest font-archivo">
                      {metric.title === "Onboarding" ? (
                        <>
                          2{" "}
                          <span className="text-neutral-400 text-lg sm:text-xl font-semibold leading-[120%] tracking-tightest font-archivo">
                            months
                          </span>
                        </>
                      ) : metric.title === "Client Load Times" ? (
                        <>
                          {metric.beforeValue}{" "}
                          <span className="text-neutral-400 text-lg sm:text-xl font-semibold leading-[120%] tracking-tightest font-archivo">
                            {metric.beforeUnit}
                          </span>
                        </>
                      ) : (
                        metric.beforeValue
                      )}
                    </p>
                    <div className="w-full max-w-[48px] sm:max-w-[56px] h-full max-h-[24px] sm:max-h-[28px]">
                      <Image
                        src="/vectors/Vector.png"
                        alt="vector"
                        width={64}
                        height={32}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <p className="text-neutral-200 text-2xl sm:text-3xl font-semibold leading-[120%] tracking-tightest font-archivo">
                      {metric.title === "Onboarding" ? (
                        <>
                          48{" "}
                          <span className="text-neutral-200 text-lg sm:text-xl font-semibold leading-[120%] tracking-tightest font-archivo">
                            hours
                          </span>
                        </>
                      ) : metric.title === "Client Load Times" ? (
                        <>
                          {metric.afterValue}{" "}
                          <span className="text-neutral-200 text-lg sm:text-xl font-semibold leading-[120%] tracking-tightest font-archivo">
                            {metric.afterUnit}
                          </span>
                        </>
                      ) : (
                        metric.afterValue
                      )}
                    </p>
                  </div>
                  <p className="flex justify-center text-sm sm:text-base font-normal text-neutral-400 leading-[120%] font-archivo text-center">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Original Styles */}
        <div className="hidden lg:flex flex-col justify-center w-full max-w-[1440px] mx-auto gap-4 pb-custom">
          <div className="flex justify-center w-full max-w-[1440px] mx-auto gap-4">
            <div className="flex w-full max-w-[566px]">
              <div className="flex flex-col w-full max-w-[566px] h-full min-h-[321px] bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.03)_100%)] gap-56 backdrop-blur-sm rounded-lg p-8 border border-neutral-900">
                <p className="flex justify-center text-2xl font-normal text-neutral-400 font-archivo">
                  Uptime
                </p>
                <div className="flex justify-center items-center gap-8">
                  <p className="text-neutral-400 text-54 font-semibold leading-[120%] tracking-tightest font-archivo">
                    91.8%
                  </p>
                  <div className="w-full max-w-[64px] h-full max-h-[32px]">
                    <Image
                      src="/vectors/Vector.png"
                      alt="vector"
                      width={64}
                      height={32}
                    />
                  </div>
                  <p className="text-neutral-200 text-54 font-semibold leading-[120%] tracking-tightest font-archivo">
                    99.9%
                  </p>
                </div>
                <p className="flex justify-center text-base font-normal text-neutral-400 leading-[120%] font-archivo">
                  Stable across xyz client platforms
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-[566px]">
              <div className="flex flex-col w-full max-w-[566px] h-full min-h-[321px] bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.03)_100%)] gap-56 backdrop-blur-sm rounded-lg p-8 border border-neutral-900">
                <p className="flex justify-center text-2xl font-normal text-neutral-400 font-archivo">
                  Onboarding
                </p>
                <div className="flex justify-center items-center gap-8">
                  <p className="text-neutral-400 text-54 font-semibold leading-[120%] tracking-tightest font-archivo">
                    2{" "}
                    <span className="text-neutral-400 text-2xl font-semibold leading-[120%] tracking-tightest font-archivo">
                      months
                    </span>
                  </p>
                  <div className="w-full max-w-[64px] h-full max-h-[32px]">
                    <Image
                      src="/vectors/Vector.png"
                      alt="vector"
                      width={64}
                      height={32}
                    />
                  </div>
                  <p className="text-neutral-200 text-54 font-semibold leading-[120%] tracking-tightest font-archivo">
                    48{" "}
                    <span className="text-neutral-200 text-2xl font-semibold leading-[120%] tracking-tightest font-archivo">
                      hours
                    </span>
                  </p>
                </div>
                <p className="flex justify-center text-base font-normal text-neutral-400 leading-[120%] font-archivo">
                  Guided experience - empty support tickets
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full max-w-[1440px] mx-auto gap-4">
            <div className="flex w-full max-w-[566px]">
              <div className="flex flex-col w-full max-w-[566px] h-full min-h-[321px] bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.03)_100%)] gap-56 backdrop-blur-sm rounded-lg p-8 border border-neutral-900">
                <p className="flex justify-center text-2xl font-normal text-neutral-400 font-archivo">
                  Infrastructure Expense
                </p>
                <div className="flex justify-center items-center gap-8">
                  <p className="text-neutral-400 text-54 font-semibold leading-[120%] tracking-tightest font-archivo">
                    100%
                  </p>
                  <div className="w-full max-w-[64px] h-full max-h-[32px]">
                    <Image
                      src="/vectors/Vector.png"
                      alt="vector"
                      width={64}
                      height={32}
                    />
                  </div>
                  <p className="text-neutral-200 text-54 font-semibold leading-[120%] tracking-tightest font-archivo">
                    45%
                  </p>
                </div>
                <p className="flex justify-center text-base font-normal text-neutral-400 leading-[120%] font-archivo">
                  Legacy stack restructured with modular services. Better
                  performance
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-[566px]">
              <div className="flex flex-col w-full max-w-[566px] h-full min-h-[321px] bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.03)_100%)] gap-56 backdrop-blur-sm rounded-lg p-8 border border-neutral-900">
                <p className="flex justify-center text-2xl font-normal text-neutral-400 font-archivo">
                  Client Load Times
                </p>
                <div className="flex justify-center items-center gap-8">
                  <p className="text-neutral-400 text-54 font-semibold leading-[120%] tracking-tightest font-archivo">
                    5+{" "}
                    <span className="text-neutral-400 text-2xl font-semibold leading-[120%] tracking-tightest font-archivo">
                      Secs
                    </span>
                  </p>
                  <div className="w-full max-w-[64px] h-full max-h-[32px]">
                    <Image
                      src="/vectors/Vector.png"
                      alt="vector"
                      width={64}
                      height={32}
                    />
                  </div>
                  <p className="text-neutral-200 text-54 font-semibold leading-[120%] tracking-tightest font-archivo">
                    {"<2"}{" "}
                    <span className="text-neutral-200 text-2xl font-semibold leading-[120%] tracking-tightest font-archivo">
                      Secs
                    </span>
                  </p>
                </div>
                <p className="flex justify-center text-base font-normal text-neutral-400 leading-[120%] font-archivo">
                  Across all product and catalog pages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
