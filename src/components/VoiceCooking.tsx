import { useState, useEffect } from "react";
import { ArrowRight, RotateCcw, Clock, Camera, Volume2 } from "lucide-react";
import { Logo } from "./Logo";

export function VoiceCooking() {
  const [currentStep, setCurrentStep] = useState(4);
  const [timeRemaining, setTimeRemaining] = useState(225); // 3:45 in seconds
  const [isListening, setIsListening] = useState(false);
  const [aiAlert, setAiAlert] = useState("");
  const [showCameraCheck, setShowCameraCheck] = useState(false);

  const totalSteps = 12;

  const steps = [
    "Dice tomatoes into 2cm cubes for optimal surface area exposure.",
    "Heat olive oil in a large pot over medium heat.",
    "Add diced onions and sauté until translucent, approximately 4 minutes.",
    "Bring the stock to a rolling boil. Add the Basil and simmer gently for 5 minutes to achieve your target 8/10 Viscosity.",
    "Add flour gradually while whisking continuously to prevent clumping.",
    "Reduce heat to low and maintain simmer for 8 minutes.",
    "Monitor texture consistency - target viscosity should be reached.",
    "Add tomatoes and increase heat to medium-high.",
    "Stir occasionally to prevent sticking.",
    "Once mixture reaches desired consistency, remove from heat.",
    "Blend until smooth using immersion blender.",
    "Strain through fine mesh and serve immediately.",
  ];

  // Timer countdown
  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeRemaining]);

  // Simulate AI alerts
  useEffect(() => {
    const alerts = [
      "AI ALERT: Estimated steam loss is high. Increase heat by 1 level to maintain required volatility for Linalool OAV.",
      "Voice command heard: 'Hey Aroma, what's next?'",
      "AI OBSERVATION: Simmer rate is optimal for viscosity target.",
    ];
    const interval = setInterval(() => {
      setAiAlert(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      setTimeRemaining(225);
    }
  };

  const handleRepeat = () => {
    // Simulate voice repeating instruction
    const utterance = new SpeechSynthesisUtterance(steps[currentStep - 1]);
    window.speechSynthesis.speak(utterance);
  };

  const simulateListening = () => {
    setIsListening(true);
    setTimeout(() => setIsListening(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#1e40af] text-white flex flex-col">
      {/* Status Bar */}
      <div className="bg-[#1e3a8a] border-b-2 border-[#fbbf24] px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Progress Indicator */}
          <div>
            <div className="text-[#fbbf24] mb-2">COOKING IN PROGRESS</div>
            <div className="text-white">
              STEP {currentStep} of {totalSteps}
            </div>
          </div>

          {/* Timer Display */}
          <div className="text-center">
            <div className="text-gray-300 mb-2">Simmering</div>
            <div className="text-white">{formatTime(timeRemaining)} remaining</div>
            {/* Progress Bar */}
            <div className="w-48 h-2 bg-[#1e3a8a] rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-[#fbbf24] transition-all duration-1000"
                style={{ width: `${((225 - timeRemaining) / 225) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* AI/Voice Status */}
          <div className="relative">
            <div
              className={`transition-all duration-300 ${
                isListening ? "scale-110" : "scale-100"
              }`}
            >
              <Logo />
              {isListening && (
                <div className="absolute inset-0 bg-[#fbbf24] rounded-full animate-ping opacity-75"></div>
              )}
            </div>
            <div className="text-xs text-gray-300 text-center mt-2">
              {isListening ? "Listening..." : "AI Ready"}
            </div>
          </div>
        </div>
      </div>

      {/* Main Display Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <div className="max-w-5xl w-full">
          {/* Current Instruction */}
          <div className="text-center mb-12">
            <div className="text-[#fbbf24] mb-6">CURRENT INSTRUCTION</div>
            <h1 className="text-white leading-relaxed">
              STEP {currentStep}: {steps[currentStep - 1]}
            </h1>
          </div>

          {/* Voice Feedback and Adjustment Zone */}
          {aiAlert && (
            <div
              className={`mx-auto max-w-4xl p-6 rounded-2xl border-2 mb-8 ${
                aiAlert.includes("ALERT")
                  ? "bg-[#fbbf24]/20 border-[#fbbf24]"
                  : "bg-white/10 border-white/30"
              }`}
            >
              <div className="flex items-start gap-4">
                <Volume2
                  className={`w-6 h-6 flex-shrink-0 ${
                    aiAlert.includes("ALERT") ? "text-[#fbbf24]" : "text-white"
                  }`}
                />
                <p
                  className={`${
                    aiAlert.includes("ALERT") ? "text-[#fbbf24]" : "text-white"
                  }`}
                >
                  {aiAlert}
                </p>
              </div>
            </div>
          )}

          {/* Hands-Free Controls */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <button
              onClick={() => {
                simulateListening();
                handleNextStep();
              }}
              className="bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 p-8 rounded-2xl transition-all hover:scale-105 shadow-2xl flex flex-col items-center gap-4"
            >
              <ArrowRight className="w-12 h-12" />
              <div className="text-center">
                <div className="mb-1">Next Step</div>
                <div className="text-xs opacity-75">Hey Aroma, Next</div>
              </div>
            </button>

            <button
              onClick={() => {
                simulateListening();
                handleRepeat();
              }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-8 rounded-2xl transition-all hover:scale-105 border-2 border-white/30 flex flex-col items-center gap-4"
            >
              <RotateCcw className="w-12 h-12" />
              <div className="text-center">
                <div className="mb-1">Repeat</div>
                <div className="text-xs opacity-75">Hey Aroma, Repeat</div>
              </div>
            </button>

            <button
              onClick={simulateListening}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-8 rounded-2xl transition-all hover:scale-105 border-2 border-white/30 flex flex-col items-center gap-4"
            >
              <Clock className="w-12 h-12" />
              <div className="text-center">
                <div className="mb-1">Set Timer</div>
                <div className="text-xs opacity-75">Hey Aroma, Timer</div>
              </div>
            </button>

            <button
              onClick={() => setShowCameraCheck(!showCameraCheck)}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-8 rounded-2xl transition-all hover:scale-105 border-2 border-white/30 flex flex-col items-center gap-4"
            >
              <Camera className="w-12 h-12" />
              <div className="text-center">
                <div className="mb-1">Check Quality</div>
                <div className="text-xs opacity-75">Vision Analysis</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Camera Texture Check Overlay */}
      {showCameraCheck && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-8">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
            <div className="bg-[#1e40af] text-white p-6 flex items-center justify-between">
              <h2 className="text-white">Process Quality Check</h2>
              <button
                onClick={() => setShowCameraCheck(false)}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Camera Feed Simulation */}
            <div className="relative aspect-video bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white/40" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <div className="text-[#fbbf24] mb-2">ANALYZING TEXTURE...</div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#fbbf24] w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assessment */}
            <div className="p-6 space-y-4">
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4">
                <div className="text-gray-900 mb-2">Detection:</div>
                <p className="text-gray-700">
                  Batter Viscosity estimated at <span className="text-yellow-600">4/10</span> (Too Runny)
                </p>
              </div>

              <div className="bg-[#1e40af]/10 border-2 border-[#1e40af] rounded-xl p-4">
                <div className="text-gray-900 mb-2">Prescription:</div>
                <p className="text-gray-700">
                  Whisk for 30 more seconds or add 1 tablespoon of prescribed thickening agent.
                </p>
              </div>

              <button
                onClick={() => setShowCameraCheck(false)}
                className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 py-4 rounded-xl transition-colors"
              >
                Continue Cooking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Progress */}
      <div className="bg-[#1e3a8a] px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-gray-300">Overall Progress</div>
            <div className="text-[#fbbf24]">
              {Math.round((currentStep / totalSteps) * 100)}%
            </div>
          </div>
          <div className="w-full h-3 bg-[#1e40af] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#fbbf24] transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
