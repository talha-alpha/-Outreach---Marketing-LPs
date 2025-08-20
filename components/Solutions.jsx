import Image from "next/image";

export default function Solutions() {
  const solutions = [
    {
      title: "Find the Real Problem.",
      description:
        "Your roadmap's not the issue. The roadblocks are. We take them apart piece by piece.",
      image:
        "/images/SolutionSectionImgs/Container1-ezgif.com-png-to-webp-converter.webp",
      width: 564,
      height: 312,
      maxWidth: "564px",
    },
    {
      title: "Follow the Friction.",
      description:
        "Features are nice. Eliminating the pain points that stall revenue? Better.",
      image:
        "/images/SolutionSectionImgs/Container2-ezgif.com-png-to-webp-converter.webp",
      width: 700,
      height: 334,
      maxWidth: "700px",
    },
    {
      title: "Maximize Impact, Minimize Motion.",
      description:
        "We hunt the smallest lever that flips the biggest outcomes.",
      image:
        "/images/SolutionSectionImgs/Container3-ezgif.com-png-to-webp-converter.webp",
      width: 700,
      height: 334,
      maxWidth: "700px",
    },
    {
      title: "Plug Directly into Your Workflow..",
      description:
        "We move at your team’s speed, using your language, and blending seamlessly into your processes.",
      image:
        "/images/SolutionSectionImgs/Container4-ezgif.com-png-to-webp-converter.webp",
      width: 564,
      height: 312,
      maxWidth: "564px",
    },
  ];

  return (
    <section className="bg-neutral-950">
      <div className="pb-8 sm:pb-12 md:pb-16 lg:pb-custom px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Heading */}
        <div className="text-center w-full max-w-[848px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-grotesque pb-8 sm:pb-12 md:pb-16 lg:pb-20 uppercase tracking-tightest">
            The Alpha Way. Something you're not used to.
          </h2>
        </div>

        {/* Rows */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[1280px] mx-auto">
          {/* First row */}
          <div className="flex flex-col lg:flex-row justify-center gap-6 w-full">
            {solutions.slice(0, 2).map((solution, index) => (
              <div
                key={index}
                style={{ maxWidth: solution.maxWidth, width: "100%" }}
                className="flex flex-col bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.03)_100%)] border border-neutral-900 rounded-2xl"
              >
                <div className="flex flex-col gap-4 p-6 sm:p-8 lg:p-10">
                  <p className="text-neutral-50 text-lg sm:text-xl lg:text-2xl font-semibold leading-[100%] font-archivo">
                    {solution.title}
                  </p>
                  <p className="text-neutral-300 text-sm sm:text-base font-normal leading-[140%] font-archivo">
                    {solution.description}
                  </p>
                </div>
                <Image
                  src={solution.image}
                  alt="Solution Image"
                  width={solution.width}
                  height={solution.height}
                  className="w-full h-auto object-cover rounded-b-2xl"
                />
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="flex flex-col lg:flex-row justify-center gap-6 w-full">
            {solutions.slice(2, 4).map((solution, index) => (
              <div
                key={index}
                style={{ maxWidth: solution.maxWidth, width: "100%" }}
                className="flex flex-col bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.03)_100%)] border border-neutral-900 rounded-2xl"
              >
                <div className="flex flex-col gap-4 p-6 sm:p-8 lg:p-10">
                  <p className="text-neutral-50 text-lg sm:text-xl lg:text-2xl font-semibold leading-[100%] font-archivo">
                    {solution.title}
                  </p>
                  <p className="text-neutral-300 text-sm sm:text-base font-normal leading-[140%] font-archivo">
                    {solution.description}
                  </p>
                </div>
                <Image
                  src={solution.image}
                  alt="Solution Image"
                  width={solution.width}
                  height={solution.height}
                  className="w-full h-auto object-cover rounded-b-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
