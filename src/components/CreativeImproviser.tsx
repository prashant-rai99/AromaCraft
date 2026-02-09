import { useState } from "react";
import { Sparkles, AtomIcon, ArrowRight, Lightbulb } from "lucide-react";

export function CreativeImproviser() {
  const [goal, setGoal] = useState("");
  const [showBridge, setShowBridge] = useState(false);

  const availableIngredients = [
    { id: 1, name: "Heirloom Tomato", icon: "🍅" },
    { id: 2, name: "Fresh Basil", icon: "🌿" },
    { id: 3, name: "Chicken Breast", icon: "🍗" },
    { id: 4, name: "Red Onion", icon: "🧅" },
    { id: 5, name: "Garlic", icon: "🧄" },
    { id: 6, name: "Olive Oil", icon: "🫒" },
  ];

  const bridgeSuggestion = {
    name: "Pine Nuts",
    icon: "🌰",
    molecular_families: ["Terpenes", "Aldehydes"],
    shared_compounds: "Terpenes (Earthy)",
    introduces_compounds: "Aldehydes (Nutty, Resinous)",
    tanimoto_avg: 0.74,
    rationale:
      "Bridges available ingredients by sharing Terpenes with Basil and Olive Oil (Earthy notes) and introduces Aldehydes required for your 'Rich, Nutty' goal. Creates harmonic flavor arc from herbaceous to nutty complexity.",
  };

  const handleFindBridge = () => {
    setShowBridge(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1e40af]/10 to-[#fbbf24]/10 px-6 py-3 rounded-full mb-4">
            <Lightbulb className="w-5 h-5 text-[#fbbf24]" />
            <span className="text-gray-700">Creative Discovery Mode</span>
          </div>
          <h1 className="text-gray-900 mb-4">
            Creative Improviser: Find Your Missing Flavor
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use molecular science to discover the perfect bridge ingredient that harmonizes your pantry into a novel, extraordinary dish
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Input Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <h2 className="text-gray-900 mb-6 flex items-center gap-3">
                <span>The Starting Point</span>
              </h2>

              {/* Available Ingredients */}
              <div className="mb-8">
                <label className="block text-gray-700 mb-4">
                  Available Ingredients (from your pantry)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {availableIngredients.map((ingredient) => (
                    <div
                      key={ingredient.id}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200"
                    >
                      <span className="text-2xl">{ingredient.icon}</span>
                      <span className="text-gray-700">{ingredient.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Goal Input */}
              <div className="mb-8">
                <label className="block text-gray-700 mb-3">
                  What are you trying to achieve?
                </label>
                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g., 'A rich, nutty appetizer with earthy undertones' or 'A creamy dinner with bold aroma'"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e40af] focus:outline-none resize-none"
                  rows={4}
                />
                <p className="text-xs text-gray-500 mt-2">
                  Describe your desired flavor profile, texture, or dish theme
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleFindBridge}
                className="w-full bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] hover:from-[#1e3a8a] hover:to-[#1e40af] text-white py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <AtomIcon className="w-5 h-5" />
                <span>Find the Bridge Molecule</span>
                <Sparkles className="w-5 h-5" />
              </button>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-[#fbbf24]/10 to-[#f59e0b]/10 border-2 border-[#fbbf24]/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <AtomIcon className="w-8 h-8 text-[#f59e0b] flex-shrink-0" />
                <div>
                  <h3 className="text-gray-900 mb-2">How It Works</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our algorithm analyzes the molecular profiles of your available ingredients using FlavorDB data, then identifies a single "bridge" ingredient that maximizes Tanimoto similarity while introducing the specific compound families needed for your culinary goal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div>
            {!showBridge ? (
              <div className="h-full bg-white rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center p-12">
                <div className="text-center text-gray-400">
                  <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-40" />
                  <p>Your bridge ingredient will appear here</p>
                  <p className="text-sm mt-2">Fill in your goal and click "Find the Bridge Molecule"</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Discovery Card */}
                <div className="bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-2xl p-8 shadow-2xl border-4 border-[#fbbf24] relative overflow-hidden">
                  {/* Sparkle Effect */}
                  <div className="absolute top-4 right-4">
                    <Sparkles className="w-8 h-8 text-white/40 animate-pulse" />
                  </div>
                  
                  <div className="text-white mb-3">THE BRIDGE INGREDIENT</div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl">{bridgeSuggestion.icon}</span>
                    <h2 className="text-white">{bridgeSuggestion.name}</h2>
                  </div>

                  {/* Scientific Rationale */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                    <div className="text-white/90 mb-3">Scientific Rationale</div>
                    <p className="text-white leading-relaxed mb-4">
                      {bridgeSuggestion.rationale}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-white/80 text-xs mb-1">Shares</div>
                        <div className="text-white">{bridgeSuggestion.shared_compounds}</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-white/80 text-xs mb-1">Introduces</div>
                        <div className="text-white">Aldehydes (Nutty)</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-white/70 mt-4">
                    Bridging calculated using molecular data from FlavorDB API
                  </p>
                </div>

                {/* Molecular Harmony Visualization */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                  <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                    <AtomIcon className="w-5 h-5 text-[#1e40af]" />
                    <span>Molecular Harmony Visualization</span>
                  </h3>

                  {/* Network Graph */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-4">
                    <svg className="w-full h-80" viewBox="0 0 400 300">
                      {/* Existing Ingredients Nodes (arranged in circle) */}
                      <g>
                        <circle cx="100" cy="150" r="30" fill="#1e40af" opacity="0.8" />
                        <text x="100" y="155" fill="white" fontSize="11" textAnchor="middle">Tomato</text>
                      </g>
                      <g>
                        <circle cx="200" cy="80" r="30" fill="#1e40af" opacity="0.8" />
                        <text x="200" y="85" fill="white" fontSize="11" textAnchor="middle">Basil</text>
                      </g>
                      <g>
                        <circle cx="300" cy="150" r="30" fill="#1e40af" opacity="0.8" />
                        <text x="300" y="155" fill="white" fontSize="11" textAnchor="middle">Olive Oil</text>
                      </g>
                      <g>
                        <circle cx="200" cy="220" r="30" fill="#1e40af" opacity="0.8" />
                        <text x="200" y="225" fill="white" fontSize="11" textAnchor="middle">Garlic</text>
                      </g>

                      {/* Bridge Ingredient (Center, highlighted) */}
                      <g>
                        {/* Glow effect */}
                        <circle cx="200" cy="150" r="45" fill="#fbbf24" opacity="0.2" />
                        <circle cx="200" cy="150" r="35" fill="#fbbf24" />
                        <text x="200" y="152" fill="#374151" fontSize="12" textAnchor="middle">Pine</text>
                        <text x="200" y="165" fill="#374151" fontSize="12" textAnchor="middle">Nuts</text>
                      </g>

                      {/* Connection Lines with Tanimoto values */}
                      <line x1="200" y1="150" x2="100" y2="150" stroke="#10b981" strokeWidth="3" opacity="0.6" />
                      <text x="150" y="140" fill="#374151" fontSize="10" textAnchor="middle">0.68</text>

                      <line x1="200" y1="150" x2="200" y2="80" stroke="#10b981" strokeWidth="4" opacity="0.8" />
                      <text x="210" y="115" fill="#374151" fontSize="10" textAnchor="middle">0.87</text>

                      <line x1="200" y1="150" x2="300" y2="150" stroke="#10b981" strokeWidth="4" opacity="0.8" />
                      <text x="250" y="140" fill="#374151" fontSize="10" textAnchor="middle">0.82</text>

                      <line x1="200" y1="150" x2="200" y2="220" stroke="#10b981" strokeWidth="3" opacity="0.6" />
                      <text x="210" y="185" fill="#374151" fontSize="10" textAnchor="middle">0.71</text>
                    </svg>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-1 bg-green-500"></div>
                      <span className="text-gray-600">Line thickness = Tanimoto similarity strength</span>
                    </div>
                    <div className="text-gray-600">Avg: {bridgeSuggestion.tanimoto_avg}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3">
                    <span>Generate New Recipe with Bridge Ingredient</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="w-full bg-white border-2 border-gray-200 hover:border-[#1e40af] text-gray-700 py-4 rounded-xl transition-all flex items-center justify-center gap-3">
                    <span>View Alternative Bridges</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
