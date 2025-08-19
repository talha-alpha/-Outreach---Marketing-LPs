import Image from "next/image";

export default function Problems() {
  const problems = [
    {
      title: 'Inventory Said "In Stock." It Wasn\'t.',
      description:
        "Your system shows available parts that don't exist. Dealers get burned. Returns spike.",
      image: "/images/ProblemSectionImgs/Cart.png",
    },
    {
      title: "Why Is the SEMA Integration Still Broken?",
      description:
        "Failed imports. Missing images. Category chaos. Customers blame you.",
      image: "/images/ProblemSectionImgs/Close.png",
    },
    {
      title: "Returns: A Human-Powered Nightmare.",
      description: "Manual returns. Wasted hours. Angry customers.",
      image: "/images/ProblemSectionImgs/Back.png",
    },
    {
      title: "New Clients Take Weeks to Onboard.",
      description:
        "By the time setup's done, they've mentally checked out. And rightly so.",
      image: "/images/ProblemSectionImgs/Profile.png",
    },
    {
      title: "Your Platform Can't Grow With Your Users.",
      description:
        'As soon as your customers scale, they leave. Your "affordable" solution becomes a ceiling.',
      image: "/images/ProblemSectionImgs/Graph.png",
    },
    {
      title: "Cloud Migration Is Still a Dirty Word.",
      description:
        "Legacy clients fear change. Cost, downtime, losing customizations.",
      image: "/images/ProblemSectionImgs/Cloud.png",
    },
  ];

  return (
    <section className="bg-neutral-950">
      <div className="">
        <div className="text-center w-full max-w-[848px] mx-auto pb-60">
          <h2 className="text-5xl font-extrabold text-white mb-4 font-grotesque uppercase tracking-tightest">
            You've Seen These Problems. So Have We
          </h2>
          <p className="flex w-full max-w-[636px] text-base font-normal leading-[140%] text-neutral-400 font-archivo mx-auto">
            Duct-taped data issues, returns, and customer complaints every week.
            We know. We've been under the hood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1280px] gap-72 mx-auto pb-custom">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="w-full max-w-[400px] p-6 border-t border-neutral-800"
            >
              {problem.image && (
                <Image
                  src={problem.image}
                  className="mb-4 object-contain"
                  alt="Annual Revenue"
                  width={72}
                  height={72}
                />
              )}
              {problem.icon && !problem.image && (
                <div className="mb-4">{problem.icon}</div>
              )}
              <div className="flex flex-col gap-3">
                <h3 className="w-full text-[24px] font-medium text-neutral-200 leading-[120%] font-archivo">
                  {problem.title}
                </h3>
                <p className="w-full text-base font-medium text-neutral-400 leading-[140%] font-archivo">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[1440px] mx-auto text-center px-20 gap-2.5 h-full pb-custom">
          <div className="flex flex-col items-center w-full max-w-[1280px] gap-8 rounded-lg bg-teal-gradient py-16 h-full min-h-[314px]">
            <h3 className="flex items-center w-full max-w-[848px] mx-auto text-5xl font-extrabold text-white uppercase font-grotesque">
              These Were Big Problems. Until They Weren't.
            </h3>
            <div className="flex justify-center w-full">
              <button className="flex justify-center items-center w-full max-w-[228px] h-full min-h-[48px] px-6 py-2 text-sm bg-neutral-50 text-neutral-950 hover:text-neutral-50 hover:bg-neutral-950 ease-in-out duration-500 rounded-md font-archivo">
                Let's talk about yours
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
