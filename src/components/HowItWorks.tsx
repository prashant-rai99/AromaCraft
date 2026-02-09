import { Camera, Cpu, ChefHat, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Camera,
      title: "Scan Your Pantry",
      description:
        "Use our AI-powered camera recognition to instantly identify ingredients, assess freshness, and build your digital kitchen inventory.",
      color: "from-amber-500 to-orange-500",
    },
    {
      number: "02",
      icon: Cpu,
      title: "Molecular Analysis",
      description:
        "Our algorithms tap into FlavorDB and RecipeDB to analyze molecular profiles, calculate Tanimoto similarity scores, and predict flavor harmonies.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      number: "03",
      icon: ChefHat,
      title: "Optimize & Customize",
      description:
        "Fine-tune your dish with precision controls for aroma, texture, and viscosity. Adjust sliders to match your exact sensory preferences.",
      color: "from-violet-600 to-purple-600",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Voice-Guided Cooking",
      description:
        "Follow hands-free, real-time AI guidance with voice commands and camera verification for perfect execution every time.",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-[#1e40af]/10 text-[#1e40af] px-4 py-2 rounded-full mb-4">
            The Process
          </div>
          <h2 className="text-gray-900 mb-4">
            How AromaCraft Works
          </h2>
          <p className="text-gray-600">
            From pantry to plate, powered by molecular science and artificial intelligence
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-6 mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-[#1e40af]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-300">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
            See It In Action
          </button>
        </div>
      </div>
    </section>
  );
}
