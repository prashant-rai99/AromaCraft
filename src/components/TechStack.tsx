import { Database, Brain, Code, Cpu, Network, Layers, ArrowRight } from "lucide-react";

export function TechStack() {
  const dataLayer = [
    {
      name: "FlavorDB API",
      icon: Database,
      description: "Molecular Profiles & Aroma Compounds",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "RecipeDB API",
      icon: Database,
      description: "Ingredient/Process Data & Initial Recipe Pool",
      color: "from-green-500 to-green-600",
    },
    {
      name: "PostgreSQL",
      icon: Layers,
      description: "User PSP, Texture Profiles, and OAV Compensation Data",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const aiModels = [
    {
      name: "YOLOv8 / EfficientDet",
      type: "Computer Vision Model",
      purpose: "Pantry/Food Detection & Real-time Quality Check",
      icon: Cpu,
    },
    {
      name: "NLP/ASR Engine",
      type: "Voice Processing",
      purpose: "Voice Command Processing & Hands-Free Control",
      icon: Brain,
    },
    {
      name: "Rheology Prediction Model",
      type: "Texture Analysis",
      purpose: "Texture Mapping & Process Modification",
      icon: Network,
    },
    {
      name: "Tanimoto Similarity Calculator",
      type: "Molecular Algorithm",
      purpose: "Molecular Bridging & Flavor Pairing",
      icon: Code,
    },
  ];

  const appStack = [
    { name: "React / Next.js", category: "Front-End", icon: Code },
    { name: "Python / Django", category: "Back-End API", icon: Code },
    { name: "IIIT Delhi Foodoscope API", category: "Challenge Integration", icon: Database },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title & Executive Summary */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white px-6 py-2 rounded-full mb-6">
            Technical Documentation
          </div>
          <h1 className="text-gray-900 mb-4">
            AromaCraft: Technical Architecture & System Overview
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A Full-Stack Computational Gastronomy Solution Powered by Real-Time AI and Molecular Data
          </p>
        </div>

        {/* Three Pillars Layout */}
        <div className="space-y-16">
          {/* Pillar 1: Data Layer */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-gray-900">Pillar 1: Data Layer & APIs</h2>
                <p className="text-gray-600">The Foundation</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {dataLayer.map((data, index) => {
                const IconComponent = data.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#1e40af] transition-all hover:shadow-lg"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${data.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{data.name}</h3>
                    <p className="text-gray-600">{data.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pillar 2: AI/ML Models */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#fbbf24] rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h2 className="text-gray-900">Pillar 2: AI/ML Models</h2>
                <p className="text-gray-600">The Core Logic</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {aiModels.map((model, index) => {
                const IconComponent = model.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#fbbf24] transition-all hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[#fbbf24]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-[#f59e0b]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-gray-900">{model.name}</h3>
                        </div>
                        <div className="text-xs text-[#1e40af] mb-2 px-2 py-1 bg-[#1e40af]/10 rounded inline-block">
                          {model.type}
                        </div>
                        <p className="text-gray-600 mt-2">{model.purpose}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Algorithms Box */}
            <div className="mt-6 bg-[#1e40af]/5 border-2 border-[#1e40af]/20 rounded-2xl p-6">
              <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-[#1e40af]" />
                <span>Key Algorithms</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-[#1e40af] mb-1">Tanimoto Similarity</div>
                  <code className="text-xs text-gray-600 font-mono">
                    T(A,B) = |A ∩ B| / |A ∪ B|
                  </code>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-[#1e40af] mb-1">OAV Compensation</div>
                  <code className="text-xs text-gray-600 font-mono">
                    OAV = Concentration / Threshold
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Application Stack */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-gray-900">Pillar 3: Application Stack</h2>
                <p className="text-gray-600">Full-Stack Implementation</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {appStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-green-600 transition-all hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-xs text-green-600 mb-2 px-2 py-1 bg-green-50 rounded inline-block">
                      {tech.category}
                    </div>
                    <h3 className="text-gray-900">{tech.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* System Data Flow Diagram */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-gray-900">System Data Flow</h2>
                <p className="text-gray-600">End-to-End Architecture</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Input Layer */}
                <div className="flex-1">
                  <div className="bg-[#1e40af] text-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-white mb-4 text-center">Input Layer</h3>
                    <div className="space-y-2">
                      <div className="bg-white/20 rounded-lg p-3 text-sm">Camera Feed</div>
                      <div className="bg-white/20 rounded-lg p-3 text-sm">Voice Commands</div>
                      <div className="bg-white/20 rounded-lg p-3 text-sm">User PSP</div>
                    </div>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0 rotate-90 md:rotate-0" />

                {/* AI/ML Core */}
                <div className="flex-1">
                  <div className="bg-[#fbbf24] text-gray-900 rounded-xl p-6 shadow-lg">
                    <h3 className="text-gray-900 mb-4 text-center">AI/ML Core</h3>
                    <div className="space-y-2">
                      <div className="bg-white/40 rounded-lg p-3 text-sm">Computer Vision</div>
                      <div className="bg-white/40 rounded-lg p-3 text-sm">Molecular Analysis</div>
                      <div className="bg-white/40 rounded-lg p-3 text-sm">Rheology Prediction</div>
                    </div>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0 rotate-90 md:rotate-0" />

                {/* Output Layer */}
                <div className="flex-1">
                  <div className="bg-green-600 text-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-white mb-4 text-center">Output Layer</h3>
                    <div className="space-y-2">
                      <div className="bg-white/20 rounded-lg p-3 text-sm">Dynamic Recipe</div>
                      <div className="bg-white/20 rounded-lg p-3 text-sm">Voice Guidance</div>
                      <div className="bg-white/20 rounded-lg p-3 text-sm">Visualizations</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mt-8 grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <div className="text-[#1e40af] mb-1">Response Time</div>
                  <div className="text-gray-700">&lt; 200ms</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <div className="text-[#1e40af] mb-1">Accuracy</div>
                  <div className="text-gray-700">97%+</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <div className="text-[#1e40af] mb-1">Molecular DB</div>
                  <div className="text-gray-700">10,000+</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <div className="text-[#1e40af] mb-1">Recipes</div>
                  <div className="text-gray-700">5,000+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hackathon Attribution */}
          <div className="bg-gradient-to-br from-[#1e40af]/10 to-[#fbbf24]/10 border-2 border-[#1e40af]/20 rounded-2xl p-8 text-center">
            <h3 className="text-gray-900 mb-4">Project Information</h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-700 mb-6 leading-relaxed">
                AromaCraft represents the convergence of artificial intelligence, molecular gastronomy, and user-centric design. Built for the IIIT Delhi Foodoscope Challenge 2025, this platform demonstrates how computational science can revolutionize the culinary experience.
              </p>
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border-2 border-[#1e40af]">
                <span className="text-gray-700">Proudly Developed for the</span>
                <span className="text-[#1e40af]">IIIT Delhi Foodoscope Challenge 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}