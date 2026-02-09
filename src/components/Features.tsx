import { Wind, Waves, Mic } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Wind,
      title: "Aroma Pairing Optimization",
      description:
        "Leveraging the precise data from FlavorDB to predict and harmonize molecular profiles for the maximum perceived scent and flavor harmony (Tanimoto Similarity).",
      color: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: Waves,
      title: "Rheological Texture Mapping",
      description:
        "Prescribing specific ingredient ratios and cooking processes to achieve a target mouthfeel profile (e.g., optimizing for crunch, creaminess, or springiness).",
      color: "bg-blue-50",
      iconColor: "text-blue-700",
    },
    {
      icon: Mic,
      title: "Hands-Free AI Guidance",
      description:
        "Enabling seamless, real-time kitchen execution via camera-based ingredient recognition and voice-activated control.",
      color: "bg-indigo-50",
      iconColor: "text-indigo-700",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Redefining the Sensory Experience with Data.
          </h2>
          <p className="text-gray-600">
            AromaCraft combines cutting-edge molecular science with intuitive AI to transform how you approach cooking. Every ingredient, every technique, optimized for your palate.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#fbbf24]/10 to-[#1e40af]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#1e40af]/5 to-[#fbbf24]/5 px-8 py-4 rounded-full border border-gray-200">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-[#fbbf24] rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-[#1e40af] rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-[#fbbf24] rounded-full border-2 border-white"></div>
            </div>
            <span className="text-gray-700">
              Powered by FlavorDB & RecipeDB molecular databases
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
