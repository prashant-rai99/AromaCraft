import { useState } from "react";
import { User, Shield, Activity, Star } from "lucide-react";

export function UserProfile() {
  const [sweetPref, setSweetPref] = useState(6);
  const [sourPref, setSourPref] = useState(4);
  const [saltyPref, setSaltyPref] = useState(7);
  const [bitterPref, setBitterPref] = useState(3);
  const [umamiPref, setUmamiPref] = useState(8);
  const [crunchyPref, setCrunchyPref] = useState(7);
  const [creamyPref, setCreamyPref] = useState(8);
  const [chewyPref, setChewyPref] = useState(5);

  const cookingHistory = [
    { id: 1, name: "Viscosity-Optimized Basil Tomato Soup", date: "Nov 18, 2025", rating: 5 },
    { id: 2, name: "Texture-Enhanced Crispy Chicken", date: "Nov 15, 2025", rating: 4 },
    { id: 3, name: "Rheological Cream Pasta", date: "Nov 12, 2025", rating: 5 },
    { id: 4, name: "Molecular-Paired Salmon", date: "Nov 10, 2025", rating: 4 },
    { id: 5, name: "Aroma-Optimized Stir Fry", date: "Nov 8, 2025", rating: 5 },
  ];

  const SliderInput = ({ label, value, onChange, color = "bg-[#1e40af]" }: any) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <label className="text-gray-700">{label}</label>
        <span className="text-[#1e40af]">{value}/10</span>
      </div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#fbbf24]`}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">
            Your AromaCraft Profile
          </h1>
          <p className="text-gray-600">
            Manage your preferences and personalized sensory profile
          </p>
        </div>

        {/* Two Panel Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Standard Profile */}
          <div className="space-y-6">
            {/* Account Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-[#1e40af]" />
                <h2 className="text-gray-900">Account & Dietary Preferences</h2>
              </div>

              {/* User Information */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Sarah Chen"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e40af] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="sarah.chen@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e40af] focus:outline-none"
                  />
                </div>
              </div>

              {/* Cooking Level */}
              <div className="mb-8">
                <label className="block text-gray-700 mb-2">Cooking Experience Level</label>
                <select defaultValue="Home Cook" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e40af] focus:outline-none">
                  <option>Novice</option>
                  <option>Home Cook</option>
                  <option>Expert</option>
                  <option>Professional Chef</option>
                </select>
              </div>

              {/* Dietary Restrictions */}
              <div className="mb-8">
                <label className="block text-gray-700 mb-3">Dietary Restrictions</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Gluten-Free", "Dairy-Free", "Vegan", "Vegetarian", "Keto", "Paleo"].map((restriction) => (
                    <label key={restriction} className="flex items-center gap-2 p-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-colors">
                      <input type="checkbox" className="w-4 h-4 accent-[#fbbf24]" />
                      <span className="text-gray-700">{restriction}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Allergies */}
              <div>
                <label className="block text-gray-700 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-red-500" />
                  <span>Allergies & Critical Restrictions</span>
                </label>
                <textarea
                  placeholder="e.g., Severe peanut allergy, shellfish intolerance..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e40af] focus:outline-none resize-none"
                  rows={3}
                />
                <p className="text-xs text-gray-500 mt-2">
                  This information is critical for safety. AromaCraft will exclude these ingredients from all recommendations.
                </p>
              </div>
            </div>

            {/* Recipe History */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-5 h-5 text-[#1e40af]" />
                <h2 className="text-gray-900">Cooking History & Feedback</h2>
              </div>

              <div className="space-y-3">
                {cookingHistory.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1">{recipe.name}</h4>
                      <p className="text-sm text-gray-600">{recipe.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= recipe.rating
                              ? "fill-[#fbbf24] text-[#fbbf24]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 text-[#1e40af] hover:text-[#1e3a8a] py-2 rounded-xl border-2 border-gray-200 hover:border-[#1e40af] transition-all">
                View Full History
              </button>
            </div>
          </div>

          {/* Right Panel - Personalized Sensory Profile */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1e40af]/5 to-[#fbbf24]/5 rounded-2xl border-2 border-[#1e40af]/20 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#fbbf24] rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5 text-gray-900" />
                </div>
                <h2 className="text-gray-900">Personalized Sensory Profile (PSP)</h2>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Adjust these dials to fine-tune the AromaCraft AI. Your PSP weights all future recipe and pairing suggestions to match your unique palate.
              </p>

              {/* Taste Preferences */}
              <div className="mb-8">
                <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                  <span>Taste Preferences</span>
                </h3>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <SliderInput label="Sweet Preference" value={sweetPref} onChange={setSweetPref} />
                  <SliderInput label="Sour Preference" value={sourPref} onChange={setSourPref} />
                  <SliderInput label="Salty Preference" value={saltyPref} onChange={setSaltyPref} />
                  <SliderInput label="Bitter Preference" value={bitterPref} onChange={setBitterPref} />
                  <SliderInput label="Umami Preference" value={umamiPref} onChange={setUmamiPref} />
                </div>
              </div>

              {/* Texture Preferences */}
              <div className="mb-8">
                <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                  <span>Texture Preferences</span>
                </h3>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <SliderInput label="Crunchy Preference" value={crunchyPref} onChange={setCrunchyPref} />
                  <SliderInput label="Creamy/Viscous Preference" value={creamyPref} onChange={setCreamyPref} />
                  <SliderInput label="Chewy/Springy Preference" value={chewyPref} onChange={setChewyPref} />
                </div>
              </div>

              {/* AI Data Feedback Summary */}
              <div className="bg-[#1e40af] rounded-xl p-6 mb-6">
                <h4 className="text-white mb-3">Your Profile Summary</h4>
                <p className="text-white/90 leading-relaxed">
                  Based on your input, your PSP prioritizes recipes with <span className="text-[#fbbf24]">high-Umami</span> (8/10), <span className="text-[#fbbf24]">high-Salty</span> (7/10), <span className="text-[#fbbf24]">low-Bitter</span> (3/10) profiles, and targets a texture score of <span className="text-[#fbbf24]">8+</span> for Creaminess and <span className="text-[#fbbf24]">7+</span> for Crunchiness.
                </p>
              </div>

              {/* Visual Radar Chart Representation */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                <h4 className="text-gray-900 mb-4">Taste Profile Visualization</h4>
                <div className="relative w-full aspect-square max-w-sm mx-auto">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Background Pentagon */}
                    <polygon
                      points="100,20 180,70 160,150 40,150 20,70"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                    <polygon
                      points="100,50 150,80 140,130 60,130 50,80"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />

                    {/* User Profile Pentagon */}
                    <polygon
                      points={`100,${20 + (10 - sweetPref) * 7} ${20 + sourPref * 16},${70 + (10 - sourPref) * 8} ${40 + saltyPref * 12},150 ${40 + (10 - bitterPref) * 12},150 ${20 + (10 - umamiPref) * 16},${70 + umamiPref * 8}`}
                      fill="#fbbf24"
                      fillOpacity="0.3"
                      stroke="#fbbf24"
                      strokeWidth="2"
                    />

                    {/* Axis Lines */}
                    <line x1="100" y1="100" x2="100" y2="20" stroke="#d1d5db" strokeWidth="1" />
                    <line x1="100" y1="100" x2="180" y2="70" stroke="#d1d5db" strokeWidth="1" />
                    <line x1="100" y1="100" x2="160" y2="150" stroke="#d1d5db" strokeWidth="1" />
                    <line x1="100" y1="100" x2="40" y2="150" stroke="#d1d5db" strokeWidth="1" />
                    <line x1="100" y1="100" x2="20" y2="70" stroke="#d1d5db" strokeWidth="1" />

                    {/* Labels */}
                    <text x="100" y="15" textAnchor="middle" className="fill-gray-700 text-xs">Sweet</text>
                    <text x="185" y="75" textAnchor="start" className="fill-gray-700 text-xs">Sour</text>
                    <text x="165" y="165" textAnchor="middle" className="fill-gray-700 text-xs">Salty</text>
                    <text x="35" y="165" textAnchor="middle" className="fill-gray-700 text-xs">Bitter</text>
                    <text x="10" y="75" textAnchor="end" className="fill-gray-700 text-xs">Umami</text>
                  </svg>
                </div>
              </div>

              {/* Save Button */}
              <button className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                Save and Update AI Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}