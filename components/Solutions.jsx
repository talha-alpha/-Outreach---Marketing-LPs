export default function Solutions() {
  const solutions = [
    {
      title: "Find the Real Problem.",
      description: "Your roadmap's not the issue. The roadblocks are. We take them apart piece by piece.",
      icon: "🎯"
    },
    {
      title: "Follow the Friction.",
      description: "Features are nice. Eliminating the pain points that stall revenue? Better.",
      icon: "🛤️"
    },
    {
      title: "Maximize Impact, Minimize Motion.",
      description: "We hunt the smallest lever that flips the biggest outcomes.",
      icon: "⚡"
    },
    {
      title: "Plug Directly into Your Workflow.",
      description: "We move at your team's speed, using your language, and blending seamlessly into your processes.",
      icon: "🔌"
    }
  ]

  const painPoints = [
    "Outdated inventory",
    "Disjointed systems", 
    "Fixing issue...",
    "Fragmented product data",
    "Long response times",
    "Slow part search times"
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            The Alpha Way. Something you're not used to.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-dark-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-6 text-center">
              What this leads to....
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-semibold text-dark-700">System Performance</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">5s → 3s</div>
                  <div className="text-sm text-gray-500">live lookup</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-semibold text-dark-700">Uptime</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">91.8% → 99.9%</div>
                  <div className="text-sm text-gray-500">Stable across xyz client platforms</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-semibold text-dark-700">Onboarding</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">2 months → 48 hours</div>
                  <div className="text-sm text-gray-500">Guided experience - empty support tickets</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-semibold text-dark-700">Client Load Times</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">5+ Secs → &lt;2 Secs</div>
                  <div className="text-sm text-gray-500">Across all product and catalog pages</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-6">
            Ready to Outpace Your Competition?
          </h3>
        </div>
      </div>
    </section>
  )
}
