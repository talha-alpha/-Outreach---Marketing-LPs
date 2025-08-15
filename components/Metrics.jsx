export default function Metrics() {
  const metrics = [
    {
      category: "Infrastructure Expense",
      improvement: "100%",
      description: "Legacy stack restructured with modular services. Better performance"
    },
    {
      category: "Client Load Times", 
      improvement: "45%",
      description: "Across all product and catalog pages"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-dark-900 to-dark-800 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Infrastructure That Scales With You
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Legacy systems restructured for modern performance and scalability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl md:text-6xl font-bold text-primary-400 mb-4">
                  {metric.improvement}
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  {metric.category}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Uptime</div>
              <div className="text-sm text-gray-300">Stable across all client platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">48h</div>
              <div className="text-lg font-semibold mb-2">Onboarding</div>
              <div className="text-sm text-gray-300">Guided experience - empty support tickets</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">&lt;2s</div>
              <div className="text-lg font-semibold mb-2">Response Time</div>
              <div className="text-sm text-gray-300">Live lookup across all systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
