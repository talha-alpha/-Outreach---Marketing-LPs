import Image from "next/image";
export default function Metrics() {
  return (
    <section className="bg-neutral-950">
      <div className="">
        <div className="text-center w-full max-w-[848px] mx-auto pb-60">
          <h2 className="flex justify-center items-center text-5xl font-extrabold text-white font-grotesque uppercase tracking-tightest">
            What this leads to....
          </h2>
        </div>

        <div className="flex flex-col justify-center w-full max-w-[1440px] mx-auto gap-4 pb-custom">
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
                    <span className="text-neutral-400 text-2xl font-semibold leading-[120%] tracking-tightest font-archivo">
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
                    2{" "}
                    <span className="text-neutral-400 text-2xl font-semibold leading-[120%] tracking-tightest font-archivo">
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

        {/* <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2 font-grotesque">99.9%</div>
              <div className="text-lg font-semibold mb-2 font-grotesque">Uptime</div>
              <div className="text-sm text-gray-300 font-archivo">Stable across all client platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2 font-grotesque">48h</div>
              <div className="text-lg font-semibold mb-2 font-grotesque">Onboarding</div>
              <div className="text-sm text-gray-300 font-archivo">Guided experience - empty support tickets</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2 font-grotesque">&lt;2s</div>
              <div className="text-lg font-semibold mb-2 font-grotesque">Response Time</div>
              <div className="text-sm text-gray-300 font-archivo">Live lookup across all systems</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
