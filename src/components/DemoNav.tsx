import { Home, Camera, ChefHat, Mic, Lightbulb, User, LogIn } from "lucide-react";

interface DemoNavProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export function DemoNav({ currentScreen, onNavigate }: DemoNavProps) {
  const screens = [
    { id: "landing", name: "Home", icon: Home },
    { id: "pantry", name: "Pantry Vision", icon: Camera },
    { id: "recipe", name: "Recipe Gen", icon: ChefHat },
    { id: "voice", name: "Voice Cook", icon: Mic },
    { id: "improviser", name: "Improviser", icon: Lightbulb },
    { id: "profile", name: "Profile", icon: User },
    { id: "login", name: "Login", icon: LogIn },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-full shadow-2xl px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="text-xs text-gray-500 px-3 hidden sm:block">Demo Navigation:</div>
          {screens.map((screen) => {
            const IconComponent = screen.icon;
            return (
              <button
                key={screen.id}
                onClick={() => onNavigate(screen.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                  currentScreen === screen.id
                    ? "bg-[#fbbf24] text-gray-900 shadow-md"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                title={screen.name}
              >
                <IconComponent className="w-4 h-4" />
                <span className="text-xs hidden md:inline">{screen.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}