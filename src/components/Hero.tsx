import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-gray-900 leading-tight">
              Unlock the Science of Flavor: Aroma, Texture, Craft.
            </h1>
            
            <p className="text-gray-600 max-w-xl">
              The AI-powered culinary assistant that uses molecular data from FlavorDB and RecipeDB to optimize every sensory detail of your dish, providing a truly multisensory cooking experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
                Start Cooking with AI
              </button>
              <button className="border-2 border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white px-8 py-4 rounded-lg transition-all">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Live AI Engine</span>
              </div>
              <div className="text-gray-400">|</div>
              <span className="text-gray-600">10,000+ Molecular Profiles</span>
            </div>
          </div>

          {/* Right Column - Hero Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586882783936-6db7c84d88bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2xlY3VsYXIlMjBjb29raW5nJTIwc2NpZW5jZSUyMHN0ZWFtfGVufDF8fHx8MTc2Mzc0MjIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Molecular cooking science visualization"
                className="w-full h-auto"
              />
              
              {/* Overlay Molecular Network Graphics */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e40af]/20 to-transparent"></div>
              
              {/* Floating Molecular Nodes */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connection Lines */}
                <line
                  x1="20%"
                  y1="30%"
                  x2="40%"
                  y2="50%"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  opacity="0.6"
                />
                <line
                  x1="40%"
                  y1="50%"
                  x2="60%"
                  y2="40%"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  opacity="0.6"
                />
                <line
                  x1="60%"
                  y1="40%"
                  x2="80%"
                  y2="60%"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  opacity="0.6"
                />
                
                {/* Molecular Nodes */}
                <circle cx="20%" cy="30%" r="8" fill="#fbbf24" opacity="0.8" />
                <circle cx="40%" cy="50%" r="10" fill="#fbbf24" opacity="0.9" />
                <circle cx="60%" cy="40%" r="8" fill="#fbbf24" opacity="0.8" />
                <circle cx="80%" cy="60%" r="8" fill="#fbbf24" opacity="0.8" />
              </svg>
            </div>

            {/* Floating Data Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#1e40af]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900">97% Match</div>
                  <div className="text-gray-500">Flavor Harmony</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#fbbf24]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1e40af]/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
