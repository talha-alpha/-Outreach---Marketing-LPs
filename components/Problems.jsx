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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            You've Seen These Problems. So Have We
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Duct-taped data issues, returns, and customer complaints every week. 
            We know. We've been under the hood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-dark-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-6">
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
