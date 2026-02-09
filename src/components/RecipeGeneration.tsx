import { useState } from "react";
import { Sliders, RefreshCw, AtomIcon, Activity } from "lucide-react";

export function RecipeGeneration() {
  const [crunchiness, setCrunchiness] = useState(7);
  const [viscosity, setViscosity] = useState(8);
  const [aromaProfile, setAromaProfile] = useState("Earthy");
  const [selectedRecipe, setSelectedRecipe] = useState("basil-tomato-soup");

  const recipes = [
    { id: "basil-tomato-soup", name: "Viscosity-Optimized Basil Tomato Soup" },
    { id: "crispy-chicken", name: "Texture-Enhanced Crispy Chicken" },
    { id: "creamy-pasta", name: "Rheological Cream Pasta" },
  ];

  const aromaOptions = ["Earthy", "Floral", "Fruity", "Spicy", "Herbal", "Woody"];

  const ingredients = [
    { name: "Heirloom Tomato", amount: "400g", adjustment: "Base Ingredient" },
    { name: "Fresh Basil", amount: "14g", adjustment: "OAV Adjusted", highlight: true },
    { name: "Chicken Stock", amount: "500ml", adjustment: "Base Liquid" },
    { name: "Flour", amount: "120g", adjustment: "Viscosity Adjusted", highlight: true },
    { name: "Olive Oil", amount: "30ml", adjustment: "Aroma Enhanced", highlight: true },
  ];

  const instructions = [
    {
      step: 1,
      text: "Dice tomatoes into 2cm cubes for optimal surface area exposure.",
    },
    {
      step: 2,
      text: "To reach 8/10 Viscosity, simmer the sauce for an additional 5 minutes at low heat, maintaining a potato-to-liquid ratio of 1:3.",
      highlighted: true,
    },
    {
      step: 3,
      text: "Add basil at 14g (OAV-optimized) during the final 2 minutes to maximize volatile compound retention.",
      highlighted: true,
    },
    {
      step: 4,
      text: "Blend until smooth, then strain through fine mesh for enhanced mouthfeel.",
    },
  ];

  const molecularPairs = [
    { from: "Tomato", to: "Basil", similarity: 0.87, compounds: "Herbal" },
    { from: "Basil", to: "Olive Oil", similarity: 0.76, compounds: "Herbal" },
    { from: "Tomato", to: "Olive Oil", similarity: 0.65, compounds: "Fruity" },
  ];

  const textureMetrics = [
    { name: "Hardness", value: 3 },
    { name: "Cohesiveness", value: 7 },
    { name: "Viscosity", value: 8 },
    { name: "Springiness", value: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">
            Dynamic Recipe Generation & Customization
          </h1>
          <p className="text-gray-600">
            Optimize recipes using molecular science and rheological data
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Column 1: Input & Controls */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Sliders className="w-5 h-5 text-[#1e40af]" />
                <h2 className="text-gray-900">Sensory Customizer</h2>
              </div>

              {/* Recipe Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Recipe Selection
                </label>
                <select
                  value={selectedRecipe}
                  onChange={(e) => setSelectedRecipe(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e40af] focus:outline-none transition-colors"
                >
                  {recipes.map((recipe) => (
                    <option key={recipe.id} value={recipe.id}>
                      {recipe.name}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-2">
                  Recipe data powered by RecipeDB API
                </p>
              </div>

              {/* Crunchiness Slider */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Target Crunchiness
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={crunchiness}
                  onChange={(e) => setCrunchiness(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#fbbf24]"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>Soft</span>
                  <span className="text-[#1e40af]">{crunchiness}/10</span>
                  <span>Crispy</span>
                </div>
              </div>

              {/* Viscosity Slider */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Target Viscosity (Creaminess)
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={viscosity}
                  onChange={(e) => setViscosity(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#fbbf24]"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>Thin</span>
                  <span className="text-[#1e40af]">{viscosity}/10</span>
                  <span>Thick</span>
                </div>
              </div>

              {/* Aroma Profile */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Desired Aroma Profile
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {aromaOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setAromaProfile(option)}
                      className={`px-3 py-2 rounded-lg border-2 transition-all ${
                        aromaProfile === option
                          ? "border-[#1e40af] bg-[#1e40af]/10 text-[#1e40af]"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recalculation Button */}
              <button className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4" />
                <span>Recalculate Dish & Prescriptions</span>
              </button>
            </div>
          </div>

          {/* Column 2: Recipe Output */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-br from-[#1e40af]/5 to-[#fbbf24]/5">
                <h2 className="text-gray-900 mb-1">
                  The AromaCraft Recipe
                </h2>
                <p className="text-gray-600">Dynamic Output</p>
              </div>

              <div className="p-6">
                {/* Recipe Title */}
                <h3 className="text-gray-900 mb-6">
                  Viscosity-Optimized Basil Tomato Soup
                </h3>

                {/* Ingredients List */}
                <div className="mb-8">
                  <h4 className="text-gray-900 mb-4 flex items-center gap-2">
                    <span>Ingredients</span>
                    <span className="text-xs text-gray-500">(Dynamically Adjusted)</span>
                  </h4>
                  <div className="space-y-3">
                    {ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className={`flex items-start justify-between p-3 rounded-lg border ${
                          ingredient.highlight
                            ? "border-[#fbbf24] bg-[#fbbf24]/5"
                            : "border-gray-200"
                        }`}
                      >
                        <div>
                          <p className="text-gray-900">{ingredient.name}</p>
                          <p className="text-sm text-gray-600">
                            {ingredient.amount}
                          </p>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            ingredient.highlight
                              ? "bg-[#fbbf24] text-gray-900"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {ingredient.adjustment}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instructions */}
                <div>
                  <h4 className="text-gray-900 mb-4 flex items-center gap-2">
                    <span>The Prescribed Process</span>
                  </h4>
                  <div className="space-y-4">
                    {instructions.map((instruction) => (
                      <div
                        key={instruction.step}
                        className={`flex gap-4 p-4 rounded-lg ${
                          instruction.highlighted
                            ? "bg-[#1e40af]/5 border border-[#1e40af]/20"
                            : "bg-gray-50"
                        }`}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-[#1e40af] text-white rounded-full flex items-center justify-center">
                          {instruction.step}
                        </div>
                        <p className="text-gray-700 pt-1">{instruction.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Visualizations */}
          <div className="lg:col-span-4 space-y-6">
            {/* Molecular Bridge Visualization */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <AtomIcon className="w-5 h-5 text-[#1e40af]" />
                <h3 className="text-gray-900">Molecular Bridge</h3>
              </div>
              <p className="text-xs text-gray-500 mb-6">
                Aroma insights derived from FlavorDB API
              </p>

              {/* Node-Link Graph Visualization */}
              <div className="relative h-64 bg-gray-50 rounded-xl p-4">
                <svg className="w-full h-full" viewBox="0 0 300 200">
                  {/* Links */}
                  {molecularPairs.map((pair, index) => {
                    const positions = [
                      { from: [50, 100], to: [150, 50] },
                      { from: [150, 50], to: [250, 100] },
                      { from: [50, 100], to: [250, 100] },
                    ];
                    const pos = positions[index];
                    const color = pair.compounds === "Herbal" ? "#10b981" : "#fbbf24";
                    return (
                      <g key={index}>
                        <line
                          x1={pos.from[0]}
                          y1={pos.from[1]}
                          x2={pos.to[0]}
                          y2={pos.to[1]}
                          stroke={color}
                          strokeWidth="3"
                          opacity="0.6"
                        />
                        {/* Similarity Label */}
                        <text
                          x={(pos.from[0] + pos.to[0]) / 2}
                          y={(pos.from[1] + pos.to[1]) / 2}
                          fill="#374151"
                          fontSize="10"
                          textAnchor="middle"
                          className="font-mono"
                        >
                          {pair.similarity}
                        </text>
                      </g>
                    );
                  })}

                  {/* Nodes */}
                  <g>
                    <circle cx="50" cy="100" r="25" fill="#1e40af" />
                    <text x="50" y="105" fill="white" fontSize="12" textAnchor="middle">
                      Tomato
                    </text>
                  </g>
                  <g>
                    <circle cx="150" cy="50" r="25" fill="#10b981" />
                    <text x="150" y="55" fill="white" fontSize="12" textAnchor="middle">
                      Basil
                    </text>
                  </g>
                  <g>
                    <circle cx="250" cy="100" r="25" fill="#fbbf24" />
                    <text x="250" y="105" fill="#374151" fontSize="11" textAnchor="middle">
                      Olive Oil
                    </text>
                  </g>
                </svg>
              </div>

              {/* Legend */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Herbal Compounds</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-[#fbbf24] rounded-full"></div>
                  <span className="text-gray-600">Fruity Compounds</span>
                </div>
              </div>

              {/* Pairings List */}
              <div className="mt-6 space-y-2">
                {molecularPairs.map((pair, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                  >
                    <span className="text-sm text-gray-700">
                      {pair.from} ↔ {pair.to}
                    </span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                      {pair.similarity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Texture Profile Visualization */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-5 h-5 text-[#1e40af]" />
                <h3 className="text-gray-900">Texture Profile</h3>
              </div>
              <p className="text-xs text-gray-500 mb-6">
                Texture predictions powered by RecipeDB process data
              </p>

              {/* Radar/Bar Chart */}
              <div className="space-y-4">
                {textureMetrics.map((metric) => (
                  <div key={metric.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-700">{metric.name}</span>
                      <span className="text-sm text-[#1e40af]">
                        {metric.value}/10
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#1e40af] to-[#fbbf24] transition-all duration-500"
                        style={{ width: `${metric.value * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Predicted Result */}
              <div className="mt-6 p-4 bg-gradient-to-br from-[#1e40af]/5 to-[#fbbf24]/5 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-700 mb-2">
                  Predicted Final Texture:
                </p>
                <p className="text-gray-900">
                  Smooth, creamy with high cohesiveness
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900">
                  Recipe optimized with {molecularPairs.length} molecular pairings
                </p>
                <p className="text-gray-600">
                  Predicted flavor harmony: 87% Tanimoto similarity
                </p>
              </div>
            </div>

            <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
              Start Voice-Guided Cooking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
