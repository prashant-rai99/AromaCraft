import { Database, Brain, Microscope, Waves } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Technology() {
  const techStack = [
    {
      icon: Database,
      name: "FlavorDB",
      description: "10,000+ molecular compound profiles",
      badge: "Primary API",
    },
    {
      icon: Database,
      name: "RecipeDB",
      description: "Process data & rheological parameters",
      badge: "Primary API",
    },
    {
      icon: Brain,
      name: "Computer Vision AI",
      description: "Real-time ingredient recognition",
      badge: "Core Tech",
    },
    {
      icon: Microscope,
      name: "Tanimoto Similarity",
      description: "Molecular pairing algorithm",
      badge: "Algorithm",
    },
  ];

  const metrics = [
    { value: "10K+", label: "Molecular Profiles", color: "text-amber-600" },
    { value: "97%", label: "Pairing Accuracy", color: "text-blue-600" },
    { value: "5K+", label: "Recipe Database", color: "text-violet-600" },
    { value: "Real-time", label: "AI Processing", color: "text-green-600" },
  ];

  return (
    <section id="technology" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#fbbf24]/10 text-[#f59e0b] px-4 py-2 rounded-full mb-4">
            Technology Stack
          </div>
          <h2 className="text-gray-900 mb-4">
            Powered by Leading-Edge Data Science
          </h2>
          <p className="text-gray-600">
            AromaCraft integrates cutting-edge molecular databases, AI algorithms, and rheological science to deliver unprecedented culinary precision.
          </p>
        </div>

        {/* Main Technology Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technology Cards */}
          <div className="space-y-6">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#1e40af] transition-all group"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1e40af] transition-colors">
                    <IconComponent className="w-7 h-7 text-[#1e40af] group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-gray-900">{tech.name}</h3>
                      <span className="px-2 py-1 bg-[#fbbf24]/20 text-[#f59e0b] rounded text-xs">
                        {tech.badge}
                      </span>
                    </div>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Representation */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1710261924580-e513dba07a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2xlY3VsYXIlMjBnYXN0cm9ub215fGVufDF8fHx8MTc2Mzc0MjM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Molecular gastronomy visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e40af]/60 to-transparent"></div>
              
              {/* Floating Tech Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Waves className="w-6 h-6 text-[#1e40af]" />
                    <h4 className="text-gray-900">Rheological Analysis</h4>
                  </div>
                  <p className="text-gray-600">
                    Predicting texture profiles using advanced viscosity and structural modeling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-br from-[#1e40af]/5 to-[#fbbf24]/5 rounded-2xl border border-gray-200">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`text-gray-900 mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* API Attribution */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full border-2 border-gray-200 shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700">Live API Connection</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <span className="text-gray-600">FlavorDB • RecipeDB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
