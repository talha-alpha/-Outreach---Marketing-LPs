import Image from "next/image";

export default function Solutions() {
  return (
    <section className="bg-neutral-950">
      <div className=" pb-custom">
        <div className="text-center w-full max-w-[848px] mx-auto">
          <h2 className="flex items-center text-5xl font-extrabold text-white font-grotesque pb-60 uppercase tracking-tightest">
            The Alpha Way. Something you're not used to.
          </h2>
        </div>

        <div className="flex flex-col w-full max-w-[1280px] gap-4 mx-auto">
          <div className="flex gap-4">
            <div className="flex flex-col w-full max-w-[564px] bg-neutral-900 rounded-2xl">
              <div className="flex flex-col gap-4 p-10">
                <p className="flex text-neutral-50 text-2xl font-semibold leading[100%] font-archivo">
                  Find the Real Problem.
                </p>
                <p className="flex text-neutral-300 text-base font-normal leading[140%] font-archivo">
                  Your roadmap’s not the issue. The roadblocks are. We take them
                  apart piece by piece.
                </p>
              </div>
              <div>
                <Image
                  src="/images/SolutionSectionImgs/Container.png"
                  alt="Peak Load"
                  width={564}
                  height={312}
                />
              </div>
            </div>

            <div className="flex flex-col w-full max-w-[700px] bg-neutral-900 rounded-2xl">
              <div className="flex flex-col gap-4 p-10">
                <p className="flex text-neutral-50 text-2xl font-semibold leading[100%] font-archivo">
                  Follow the Friction.
                </p>
                <p className="flex text-neutral-300 text-base font-normal leading[140%] font-archivo">
                  Features are nice. Eliminating the pain points that stall
                  revenue? Better.
                </p>
              </div>
              <div>
                <Image
                  src="/images/SolutionSectionImgs/Container (1).png"
                  alt="Peak Load"
                  width={700}
                  height={334}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col w-full max-w-[700px] bg-neutral-900 rounded-2xl">
              <div className="flex flex-col gap-4 p-10">
                <p className="flex text-neutral-50 text-2xl font-semibold leading[100%] font-archivo">
                  Maximize Impact, Minimize Motion.
                </p>
                <p className="flex text-neutral-300 text-base font-normal leading[140%] font-archivo">
                  We hunt the smallest lever that flips the biggest outcomes.
                </p>
              </div>
              <div>
                <Image
                  src="/images/SolutionSectionImgs/Container (2).png"
                  alt="Peak Load"
                  width={700}
                  height={334}
                />
              </div>
            </div>

            <div className="flex flex-col w-full max-w-[564px] bg-neutral-900 rounded-2xl">
              <div className="flex flex-col gap-4 p-10">
                <p className="flex text-neutral-50 text-2xl font-semibold leading[100%] font-archivo">
                  Follow the Friction.
                </p>
                <p className="flex text-neutral-300 text-base font-normal leading[140%] font-archivo">
                  Features are nice. Eliminating the pain points that stall
                  revenue? Better.
                </p>
              </div>
              <div>
                <Image
                  src="/images/SolutionSectionImgs/Container (3).png"
                  alt="Peak Load"
                  width={564}
                  height={312}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
