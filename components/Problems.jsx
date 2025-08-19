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
      <div className="px-4 sm:px-6 md:px-8 lg:px-0 py-8 sm:py-12 lg:py-16">
        <div className="text-center w-full max-w-[848px] mx-auto pb-8 sm:pb-12 md:pb-16 lg:pb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-grotesque uppercase tracking-tightest">
            You've Seen These Problems. So Have We
          </h2>
          <p className="flex w-full max-w-[636px] text-sm sm:text-base font-normal leading-[140%] text-neutral-400 font-archivo mx-auto">
            Duct-taped data issues, returns, and customer complaints every week.
            We know. We've been under the hood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1280px] gap-6 sm:gap-8 md:gap-12 lg:gap-16 mx-auto pb-8 sm:pb-12 lg:pb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="w-full max-w-[400px] p-4 sm:p-6 border-t border-neutral-800"
            >
              {problem.image && (
                <div className="mb-4 flex justify-center">
                  <Image
                    src={problem.image}
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 object-contain"
                    alt={problem.title}
                    width={72}
                    height={72}
                  />
                </div>
              )}
              {problem.icon && !problem.image && (
                <div className="mb-4 flex justify-center">{problem.icon}</div>
              )}
              <div className="flex flex-col gap-3">
                <h3 className="w-full text-lg sm:text-xl lg:text-[24px] font-medium text-neutral-200 leading-[120%] font-archivo text-center md:text-left">
                  {problem.title}
                </h3>
                <p className="w-full text-sm sm:text-base font-medium text-neutral-400 leading-[120%] font-archivo text-center md:text-left">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[1440px] mx-auto text-center px-4 sm:px-8 md:px-12 lg:px-20 gap-2.5 h-full pb-8 sm:pb-12 lg:pb-16">
          <div className="flex flex-col items-center w-full max-w-[1280px] gap-6 sm:gap-8 rounded-lg bg-teal-gradient py-12 sm:py-16 h-full min-h-[200px] sm:min-h-[250px] lg:min-h-[280px]">
            <h3 className="flex items-center w-full max-w-[848px] mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase font-grotesque px-4 sm:px-0">
              These Were Big Problems. Until They Weren't.
            </h3>
            <div className="flex justify-center w-full px-4 sm:px-0">
              <button className="flex justify-center items-center w-full max-w-[200px] sm:max-w-[228px] h-full min-h-[40px] sm:min-h-[48px] px-4 sm:px-6 py-2 text-sm bg-neutral-50 text-neutral-950 hover:text-neutral-50 hover:bg-neutral-950 ease-in-out duration-500 rounded-md font-archivo">
                Let's talk about yours
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
