import { useState } from "react";
import { Camera, Plus, Clock, AtomIcon, AlertCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  freshness: "optimal" | "use-soon" | "urgent";
  freshnessText: string;
  daysRemaining: number;
  hasDataLink: boolean;
}

export function PantryVision() {
  const [isScanning, setIsScanning] = useState(false);
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    {
      id: "1",
      name: "Heirloom Tomato",
      quantity: "4 units",
      freshness: "optimal",
      freshnessText: "Optimal: Expires in 5+ days",
      daysRemaining: 7,
      hasDataLink: true,
    },
    {
      id: "2",
      name: "Fresh Basil",
      quantity: "approx 50g",
      freshness: "use-soon",
      freshnessText: "Use Soon: Slight wilting detected",
      daysRemaining: 3,
      hasDataLink: true,
    },
    {
      id: "3",
      name: "Chicken Breast",
      quantity: "approx 500g",
      freshness: "optimal",
      freshnessText: "Optimal: Expires in 5 days",
      daysRemaining: 5,
      hasDataLink: true,
    },
    {
      id: "4",
      name: "Red Onion",
      quantity: "2 units",
      freshness: "urgent",
      freshnessText: "ATTENTION: Browning detected",
      daysRemaining: 1,
      hasDataLink: true,
    },
  ]);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 2000);
  };

  const getFreshnessColor = (freshness: string) => {
    switch (freshness) {
      case "optimal":
        return "text-green-600";
      case "use-soon":
        return "text-yellow-600";
      case "urgent":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getFreshnessProgress = (freshness: string) => {
    switch (freshness) {
      case "optimal":
        return 100;
      case "use-soon":
        return 60;
      case "urgent":
        return 20;
      default:
        return 0;
    }
  };

  const urgentCount = ingredients.filter((i) => i.freshness === "urgent" || i.freshness === "use-soon").length;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">
            Pantry Vision: Scan Your Kitchen Inventory
          </h1>
          <p className="text-gray-600">
            Use AI-powered recognition to identify ingredients and assess freshness in real-time
          </p>
        </div>

        {/* Main Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Input */}
          <div className="space-y-6">
            {/* Camera Feed Simulation */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
              <div className="relative aspect-[4/3] bg-gray-900">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646775813724-12939ff7407d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcGFudHJ5JTIwaW5ncmVkaWVudHN8ZW58MXx8fHwxNzYzNzQyMzg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Kitchen pantry view"
                  className="w-full h-full object-cover opacity-80"
                />

                {/* Scanning Overlay */}
                {isScanning && (
                  <div className="absolute inset-0 bg-[#1e40af]/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white">
                        <Camera className="w-16 h-16 animate-pulse mx-auto mb-4" />
                        <p className="text-center">Analyzing ingredients...</p>
                      </div>
                    </div>
                    {/* Scanning Line Effect */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#fbbf24] animate-pulse"></div>
                  </div>
                )}

                {/* Bounding Boxes when not scanning */}
                {!isScanning && (
                  <>
                    {/* Ready State */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center bg-black/40 backdrop-blur-sm px-8 py-4 rounded-xl">
                        <Camera className="w-12 h-12 mx-auto mb-3 opacity-60" />
                        <p className="opacity-80">Ready to Scan...</p>
                      </div>
                    </div>

                    {/* Detection Boxes (simulated) */}
                    <div className="absolute top-[20%] left-[15%] border-2 border-[#fbbf24] rounded px-2 py-1 bg-black/60">
                      <span className="text-[#fbbf24] text-xs">Tomato</span>
                    </div>
                    <div className="absolute top-[45%] right-[20%] border-2 border-[#fbbf24] rounded px-2 py-1 bg-black/60">
                      <span className="text-[#fbbf24] text-xs">Basil</span>
                    </div>
                    <div className="absolute bottom-[25%] left-[25%] border-2 border-[#fbbf24] rounded px-2 py-1 bg-black/60">
                      <span className="text-[#fbbf24] text-xs">Chicken</span>
                    </div>
                  </>
                )}

                {/* Camera Controls Overlay */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] disabled:bg-gray-300 text-gray-900 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <Camera className="w-5 h-5" />
                <span>{isScanning ? "Scanning..." : "Snap Inventory Scan"}</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 hover:border-[#1e40af] text-gray-700 rounded-xl transition-all">
                  <Plus className="w-4 h-4" />
                  <span>Manual Entry</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 hover:border-[#1e40af] text-gray-700 rounded-xl transition-all">
                  <Clock className="w-4 h-4" />
                  <span>Load Last Scan</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Analysis Output */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <h2 className="text-gray-900">
                Analyzed Ingredients & Status
              </h2>
              <p className="text-gray-600 mt-1">
                Real-time freshness analysis powered by computer vision
              </p>
            </div>

            {/* Ingredients List */}
            <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
              {ingredients.map((ingredient) => (
                <div key={ingredient.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-gray-900">{ingredient.name}</h3>
                        {ingredient.hasDataLink && (
                          <button
                            className="group relative"
                            title="Linked to FlavorDB & RecipeDB"
                          >
                            <AtomIcon className="w-4 h-4 text-[#1e40af] hover:text-[#fbbf24] transition-colors" />
                            <div className="absolute left-0 top-6 w-64 bg-gray-900 text-white text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10 shadow-xl">
                              Linked to FlavorDB & RecipeDB: Click for Molecular Profile
                            </div>
                          </button>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{ingredient.quantity}</p>

                      {/* Freshness Indicator */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${
                                ingredient.freshness === "optimal"
                                  ? "bg-green-500"
                                  : ingredient.freshness === "use-soon"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                              style={{ width: `${getFreshnessProgress(ingredient.freshness)}%` }}
                            ></div>
                          </div>
                          <span className={`text-sm ${getFreshnessColor(ingredient.freshness)}`}>
                            {ingredient.daysRemaining}d
                          </span>
                        </div>
                        <p className={`text-sm ${getFreshnessColor(ingredient.freshness)}`}>
                          {ingredient.freshnessText}
                        </p>
                      </div>
                    </div>

                    {/* Freshness Badge */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
                        ingredient.freshness === "optimal"
                          ? "bg-green-50"
                          : ingredient.freshness === "use-soon"
                          ? "bg-yellow-50"
                          : "bg-red-50"
                      }`}
                    >
                      {ingredient.freshness === "urgent" && (
                        <AlertCircle className="w-8 h-8 text-red-600" />
                      )}
                      {ingredient.freshness === "use-soon" && (
                        <Clock className="w-8 h-8 text-yellow-600" />
                      )}
                      {ingredient.freshness === "optimal" && (
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1e40af]/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1e40af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900">
                  {ingredients.length} main ingredients detected
                </p>
                <p className="text-gray-600">
                  {urgentCount} {urgentCount === 1 ? "item requires" : "items require"} immediate use to prevent waste
                </p>
              </div>
            </div>

            <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
              Generate Sensory Recipes Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
