import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { HowItWorks } from "./HowItWorks";
import { Technology } from "./Technology";
import { UseCases } from "./UseCases";
import { Footer } from "./Footer";
import { PantryVision } from "./PantryVision";
import { RecipeGeneration } from "./RecipeGeneration";
import { VoiceCooking } from "./VoiceCooking";
import { CreativeImproviser } from "./CreativeImproviser";
import { UserProfile } from "./UserProfile";
import { DemoNav } from "./DemoNav";
import { Login } from "./Login";

type Screen = "landing" | "pantry" | "recipe" | "voice" | "improviser" | "profile" | "login";

export function Navigation() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");

  // Intercept button clicks to navigate between screens
  const handleNavigation = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Listen for custom navigation events (from Header)
  useState(() => {
    const handleCustomNav = (e: Event) => {
      const customEvent = e as CustomEvent;
      handleNavigation(customEvent.detail);
    };
    window.addEventListener('navigate', handleCustomNav);
    return () => window.removeEventListener('navigate', handleCustomNav);
  });

  if (currentScreen === "pantry") {
    return (
      <div onClick={(e) => {
        const target = e.target as HTMLElement;
        // Navigate to recipe generation when clicking the CTA button
        if (target.textContent?.includes("Generate Sensory Recipes")) {
          handleNavigation("recipe");
        }
        // Navigate back to landing
        if (target.textContent?.includes("AromaCraft") && target.closest("header")) {
          handleNavigation("landing");
        }
      }}>
        <Header />
        <PantryVision />
        <DemoNav currentScreen={currentScreen} onNavigate={(s) => handleNavigation(s as Screen)} />
      </div>
    );
  }

  if (currentScreen === "recipe") {
    return (
      <div onClick={(e) => {
        const target = e.target as HTMLElement;
        // Navigate to voice cooking
        if (target.textContent?.includes("Start Voice-Guided Cooking")) {
          handleNavigation("voice");
        }
        // Navigate back to landing
        if (target.textContent?.includes("AromaCraft") && target.closest("header")) {
          handleNavigation("landing");
        }
      }}>
        <Header />
        <RecipeGeneration />
        <DemoNav currentScreen={currentScreen} onNavigate={(s) => handleNavigation(s as Screen)} />
      </div>
    );
  }

  if (currentScreen === "voice") {
    return (
      <>
        <VoiceCooking />
        <DemoNav currentScreen={currentScreen} onNavigate={(s) => handleNavigation(s as Screen)} />
      </>
    );
  }

  if (currentScreen === "improviser") {
    return (
      <div onClick={(e) => {
        const target = e.target as HTMLElement;
        // Navigate to recipe generation
        if (target.textContent?.includes("Generate New Recipe with Bridge")) {
          handleNavigation("recipe");
        }
        // Navigate back to landing
        if (target.textContent?.includes("AromaCraft") && target.closest("header")) {
          handleNavigation("landing");
        }
      }}>
        <Header />
        <CreativeImproviser />
        <DemoNav currentScreen={currentScreen} onNavigate={(s) => handleNavigation(s as Screen)} />
      </div>
    );
  }

  if (currentScreen === "profile") {
    return (
      <div onClick={(e) => {
        const target = e.target as HTMLElement;
        // Navigate back to landing
        if (target.textContent?.includes("AromaCraft") && target.closest("header")) {
          handleNavigation("landing");
        }
      }}>
        <Header />
        <UserProfile />
        <DemoNav currentScreen={currentScreen} onNavigate={(s) => handleNavigation(s as Screen)} />
      </div>
    );
  }

  if (currentScreen === "login") {
    return (
      <div onClick={(e) => {
        const target = e.target as HTMLElement;
        // Navigate back to landing
        if (target.textContent?.includes("AromaCraft") && target.closest("header")) {
          handleNavigation("landing");
        }
      }}>
        <Header />
        <Login />
        <DemoNav currentScreen={currentScreen} onNavigate={(s) => handleNavigation(s as Screen)} />
      </div>
    );
  }

  // Landing page
  return (
    <div onClick={(e) => {
      const target = e.target as HTMLElement;
      // Navigate to pantry vision when clicking relevant CTAs
      if (
        target.textContent?.includes("Launch AromaCraft") ||
        target.textContent?.includes("Start Cooking with AI") ||
        target.textContent?.includes("See It In Action")
      ) {
        handleNavigation("pantry");
      }
      // Navigate to tech stack when clicking Technology Stack link
      if (target.textContent?.includes("Technology Stack") && target.closest("nav")) {
        handleNavigation("techstack");
      }
    }}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Technology />
          <UseCases />
        </main>
        <Footer />
        <DemoNav currentScreen={currentScreen} onNavigate={(s) => handleNavigation(s as Screen)} />
      </div>
    </div>
  );
}