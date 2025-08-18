export default function Problems() {
  const problems = [
    {
      title: "Inventory Said \"In Stock.\" It Wasn't.",
      description: "Your system shows available parts that don't exist. Dealers get burned. Returns spike.",
      icon: "📦"
    },
    {
      title: "Why Is the SEMA Integration Still Broken?",
      description: "Failed imports. Missing images. Category chaos. Customers blame you.",
      icon: "🔧"
    },
    {
      title: "Returns: A Human-Powered Nightmare.",
      description: "Manual returns. Wasted hours. Angry customers.",
      icon: "⚠️"
    },
    {
      title: "New Clients Take Weeks to Onboard.",
      description: "By the time setup's done, they've mentally checked out. And rightly so.",
      icon: "⏰"
    },
    {
      title: "Your Platform Can't Grow With Your Users.",
      description: "As soon as your customers scale, they leave. Your \"affordable\" solution becomes a ceiling.",
      icon: "📈"
    },
    {
      title: "Cloud Migration Is Still a Dirty Word.",
      description: "Legacy clients fear change. Cost, downtime, losing customizations.",
      icon: "☁️"
    }
  ]

  return (
    <section className="section-padding bg-neutral-950">
      <div className="">
        <div className="text-center mb-16 w-full max-w-[848px] mx-auto">
          <h2 className="text-5xl font-extrabold text-white mb-6 font-grotesque uppercase">
            You've Seen These Problems. So Have We
          </h2>
          <p className="text-lg font-normal leading-[140%] text-neutral-400 max-w-3xl font-grotesque mx-auto">
            Duct-taped data issues, returns, and customer complaints every week. 
            We know. We've been under the hood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="p-6 border-t border-neutral-800"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-[24px] font-medium text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 px-20">
          <h3 className="w-full max-w-[848px] mx-auto text-5xl font-extrabold text-white mb-6 uppercase font-grotesque">
            These Were Big Problems. Until They Weren't.
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Let's talk about yours
          </p>
        </div>
      </div>
    </section>
  )
}
