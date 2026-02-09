# AromaCraft - Project Structure

## 📁 File Organization

```
aromacraft/
├── README.md                          # Main documentation (Tech Stack, Setup, API Guide)
├── SETUP_GUIDE.md                     # Quick start guide
├── PROJECT_STRUCTURE.md               # This file
├── package.json                       # Dependencies
├── vite.config.ts                     # Build configuration
├── tsconfig.json                      # TypeScript config
│
├── .env                               # API keys (CREATE THIS - see SETUP_GUIDE.md)
│   ├── VITE_FLAVORDB_API_KEY         # FlavorDB API key
│   ├── VITE_RECIPEDB_API_KEY         # RecipeDB API key
│   └── VITE_FOODOSCOPE_API_KEY       # Foodoscope API key
│
├── /components/                       # React components
│   ├── Navigation.tsx                 # Main navigation controller
│   ├── Header.tsx                     # Top navigation bar
│   ├── Logo.tsx                       # AromaCraft logo component
│   ├── DemoNav.tsx                    # Bottom demo navigation bar
│   │
│   ├── Hero.tsx                       # Landing page hero section
│   ├── Features.tsx                   # Features showcase
│   ├── HowItWorks.tsx                 # Process explanation
│   ├── Technology.tsx                 # Technology highlights
│   ├── UseCases.tsx                   # Use case examples
│   ├── Footer.tsx                     # Footer section
│   │
│   ├── PantryVision.tsx               # Screen 1: Camera ingredient detection
│   ├── RecipeGeneration.tsx           # Screen 2: AI recipe customization
│   ├── VoiceCooking.tsx               # Screen 3: Voice-guided cooking
│   ├── CreativeImproviser.tsx         # Screen 4: Molecular bridging
│   ├── UserProfile.tsx                # Screen 5: User profile & PSP
│   ├── Login.tsx                      # Screen 6: Login/Sign up
│   ├── TechStack.tsx                  # (Not in navigation - for documentation)
│   │
│   └── /ui/                           # Shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── slider.tsx
│       └── ... (other shadcn components)
│
├── /services/                         # API integration layer
│   └── api-example.ts                 # Example API service (FlavorDB, RecipeDB)
│
├── /styles/                           # Global styles
│   └── globals.css                    # Tailwind CSS + custom styles
│
├── /public/                           # Static assets
│   └── (images, icons, etc.)
│
└── App.tsx                            # Root component
```

---

## 🎯 Component Responsibility Matrix

| Component | Purpose | Data Source | Navigation |
|-----------|---------|-------------|------------|
| **Navigation.tsx** | Main router | State management | Controls all screens |
| **Header.tsx** | Top nav bar | Static | Links to Login |
| **DemoNav.tsx** | Quick navigation | Props | Bottom bar navigation |
| **Landing Page** | Hero + Features | Static content | Entry point |
| **PantryVision** | Ingredient detection | Mock camera data | → Recipe Gen |
| **RecipeGeneration** | Recipe customization | Mock recipes | → Voice Cook |
| **VoiceCooking** | Hands-free cooking | Recipe steps | Standalone |
| **CreativeImproviser** | Ingredient bridging | FlavorDB (mock) | → Recipe Gen |
| **UserProfile** | User preferences | Local state | Standalone |
| **Login** | Authentication | Demo mode | → Dashboard |

---

## 🔄 User Flow Diagram

```
┌─────────────┐
│   Landing   │ ◄─── Entry Point
└──────┬──────┘
       │
       ├──► [Launch AromaCraft] ──► Pantry Vision
       ├──► [Login/Sign Up] ──────► Login Screen
       └──► [Demo Nav Bar] ────────► Any Screen
                                      
Pantry Vision ──► [Detect Ingredients] ──► Recipe Generation
                                             │
                                             ├──► [Customize] ──► Voice Cooking
                                             └──► [Bridge] ─────► Improviser
                                             
User Profile ◄──── [Account Settings]
```

---

## 📊 Data Flow Architecture

### Current (Frontend Only):
```
User Input → React State → UI Update
     ↑                          ↓
     └──────── Mock Data ────────┘
```

### Future (With Backend):
```
User Input → React State → API Call → Backend
                                        ↓
                                     Database
                                        ↓
FlavorDB/RecipeDB ← Backend API ← Response
     ↓
UI Update ← React State ← Parse Response
```

---

## 🎨 Style System

### Colors (defined in globals.css):
```css
--cobalt-blue: #1e40af;     /* Technology/Data */
--saffron-gold: #fbbf24;    /* Culinary Art */
--background: #ffffff;      /* Clean white */
--gray-50 to 900;           /* Neutral palette */
```

### Typography:
- Default browser fonts (system fonts)
- Custom font size/weight hierarchy in globals.css
- Never override with Tailwind classes unless user requests

### Spacing:
- Tailwind's default spacing scale (0.25rem increments)
- Consistent padding: p-6, p-8 for sections
- Gap utilities: gap-4, gap-6, gap-8

---

## 🔐 Environment Variables

### Required for Production:

| Variable | Purpose | Where to Get |
|----------|---------|--------------|
| `VITE_FLAVORDB_API_KEY` | FlavorDB access | IIIT Delhi / FlavorDB docs |
| `VITE_RECIPEDB_API_KEY` | RecipeDB access | IIIT Delhi / RecipeDB docs |
| `VITE_FOODOSCOPE_API_KEY` | Challenge API | Foodoscope organizers |

### How to Add:
1. Create `.env` file in root directory
2. Add variables (see `.env.example` or SETUP_GUIDE.md)
3. Restart dev server: `npm run dev`
4. Access via: `import.meta.env.VITE_*`

---

## 🧪 Key Features by Component

### PantryVision.tsx
- ✅ Simulated camera feed
- ✅ AI bounding boxes
- ✅ Freshness indicators
- ✅ Molecular data tooltips
- ⏳ Real camera integration (future)
- ⏳ YOLOv8 model integration (future)

### RecipeGeneration.tsx
- ✅ Sensory sliders (Crunchiness, Viscosity, Aroma)
- ✅ Dynamic recipe output
- ✅ Molecular bridge visualization
- ✅ OAV calculations (simulated)
- ⏳ FlavorDB API integration (future)
- ⏳ RecipeDB API integration (future)

### VoiceCooking.tsx
- ✅ Voice command buttons
- ✅ Step-by-step instructions
- ✅ Real-time AI alerts
- ✅ Camera quality check overlay
- ⏳ Actual voice recognition (future)
- ⏳ Real-time texture analysis (future)

### UserProfile.tsx
- ✅ Personalized Sensory Profile (PSP)
- ✅ 8 preference sliders
- ✅ Radar chart visualization
- ✅ Cooking history display
- ⏳ Database persistence (future)

---

## 📦 Dependencies

### Core:
- `react` - UI framework
- `typescript` - Type safety
- `vite` - Build tool

### UI/Styling:
- `tailwindcss` - CSS framework
- `lucide-react` - Icons
- `recharts` - Data visualization

### Utilities:
- (All dependencies in `package.json`)

---

## 🚀 Build & Deploy

### Development:
```bash
npm run dev
```
Runs on: `http://localhost:5173`

### Production Build:
```bash
npm run build
```
Output: `dist/` folder

### Deploy Options:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag `dist/` folder
- **GitHub Pages**: Push `dist/` to gh-pages branch
- **Any Static Host**: Upload `dist/` folder

---

## 📝 Naming Conventions

### Files:
- Components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- Services: `kebab-case.ts` (e.g., `api-example.ts`)
- Styles: `kebab-case.css` (e.g., `globals.css`)

### Variables:
- React State: `camelCase` (e.g., `currentScreen`)
- Components: `PascalCase` (e.g., `UserProfile`)
- Functions: `camelCase` (e.g., `handleNavigation`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `FLAVORDB_API_KEY`)

---

## 🔍 Finding Things

### Need to change...
- **Colors**: `/styles/globals.css`
- **API calls**: `/services/api-example.ts`
- **Navigation**: `/components/Navigation.tsx`
- **Landing page**: `/components/Hero.tsx`, `/components/Features.tsx`, etc.
- **Logo**: `/components/Logo.tsx`
- **Specific screen**: `/components/[ScreenName].tsx`

### Want to add...
- **New screen**: Create component, add to `Navigation.tsx`, add to `DemoNav.tsx`
- **New API**: Add to `/services/api-example.ts`
- **New feature**: Create component in `/components/`

---

## 📚 Documentation Files

| File | Purpose | Audience |
|------|---------|----------|
| **README.md** | Complete technical docs | Judges, Developers |
| **SETUP_GUIDE.md** | Quick start guide | Developers |
| **PROJECT_STRUCTURE.md** | This file - architecture | Developers |
| **api-example.ts** | API integration code | Developers |

---

## ✅ Checklist for Deployment

- [ ] Add `.env` file with API keys
- [ ] Test all screens work
- [ ] Test navigation flows
- [ ] Run `npm run build` successfully
- [ ] Test production build locally
- [ ] Update README with your team info
- [ ] Add screenshots to `docs/screenshots/`
- [ ] Deploy to hosting platform
- [ ] Share link with judges

---

**Everything is organized and ready to go!** 🚀
