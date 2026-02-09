# AromaCraft - Quick Setup Guide

## ✅ What's Been Fixed

### 1. **Login/Sign Up Now Works**
- Created a functional Login/Sign Up screen at `/components/Login.tsx`
- Click "Login/Sign Up" in the header or use the demo navigation bar
- Currently runs in **demo mode** (authentication is simulated)
- Shows clear messaging that it's a prototype

### 2. **Tech Stack Removed from Website Navigation**
- Tech Stack information is now **only in README.md** (as requested)
- No longer appears as a separate screen in the main website
- All technical documentation is in `/README.md` for judges and developers

### 3. **Comprehensive Documentation Created**
- **`/README.md`**: Complete technical documentation including:
  - Full tech stack breakdown
  - Local setup instructions
  - API integration guide
  - Database schema
  - Security considerations
  
- **`/SETUP_GUIDE.md`**: This file - quick reference
- **`/services/api-example.ts`**: Code examples for API integration

---

## 🚀 Quick Start - Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to `http://localhost:5173`

**That's it!** The app runs as a complete frontend demo with simulated data.

---

## 🔑 API Keys - Where to Add Them

### Current Status: **NOT REQUIRED YET**

The application currently works **without any API keys** because:
- All data is simulated/mocked
- Frontend-only prototype
- No backend connected yet

### When You Need API Keys (Production):

Create a `.env` file in the root directory:

```env
# FlavorDB API
VITE_FLAVORDB_API_KEY=your_actual_api_key_here
VITE_FLAVORDB_BASE_URL=https://cosylab.iiitd.edu.in/flavordb/

# RecipeDB API  
VITE_RECIPEDB_API_KEY=your_actual_api_key_here
VITE_RECIPEDB_BASE_URL=https://cosylab.iiitd.edu.in/recipedb/

# IIIT Delhi Foodoscope API (if required)
VITE_FOODOSCOPE_API_KEY=your_actual_api_key_here
```

### Where to Get API Keys:

1. **FlavorDB**: Contact IIIT Delhi or visit the FlavorDB documentation
2. **RecipeDB**: Contact IIIT Delhi or visit the RecipeDB documentation
3. **Foodoscope API**: Provided by challenge organizers

---

## 🔌 How to Connect Real APIs

### Option 1: Use the Example Service (Recommended)

The file `/services/api-example.ts` contains ready-to-use functions:

```typescript
import { getMolecularProfile, searchRecipes } from './services/api-example';

// Get molecular data
const profile = await getMolecularProfile("tomato");

// Search recipes
const recipes = await searchRecipes(["tomato", "basil"]);
```

### Option 2: Update Components Directly

In components like `PantryVision.tsx`, `RecipeGeneration.tsx`, etc., replace mock data with API calls:

**Before (Current - Mock Data):**
```typescript
const detectedIngredients = [
  { name: "Tomato", confidence: 95, molecular: "FlavorDB #1234" }
];
```

**After (With Real API):**
```typescript
import { getMolecularProfile } from '../services/api-example';

const fetchIngredients = async () => {
  const data = await getMolecularProfile("tomato");
  setIngredients(data);
};
```

### Step-by-Step Integration:

1. ✅ Add API keys to `.env` file
2. ✅ Test API connection using `/services/api-example.ts`
3. ✅ Update component files to use real API calls
4. ✅ Handle loading states and errors
5. ✅ Deploy with environment variables configured

---

## 📱 Application Structure

### Current Screens (All Working):
1. **Landing Page** - Homepage with features
2. **Pantry Vision** - Camera-based ingredient detection (simulated)
3. **Recipe Generation** - AI-powered recipe customization
4. **Voice Cooking** - Hands-free cooking interface
5. **Creative Improviser** - Molecular ingredient bridging
6. **User Profile** - Personalized Sensory Profile (PSP)
7. **Login/Sign Up** - User authentication (demo mode)

### Navigation:
- **Demo Nav Bar**: Fixed at bottom of screen - click any icon to navigate
- **Header**: Click "Login/Sign Up" or "Launch AromaCraft"
- **In-app Links**: Various CTAs throughout the app

---

## 🗄️ Database Setup (Future)

### No Database Required for Demo

The current version stores nothing - it's all in-memory.

### For Production:

1. Install PostgreSQL:
```bash
# macOS
brew install postgresql

# Ubuntu
sudo apt-get install postgresql
```

2. Create database:
```sql
CREATE DATABASE aromacraft;
```

3. Run migrations (schema in `/README.md`)

4. Update backend API to connect to database

---

## 🔧 Tech Stack Summary

### Frontend (Currently Implemented):
- React + TypeScript
- Tailwind CSS v4.0
- Shadcn/ui Components
- Vite Build Tool

### Backend (To Be Implemented):
- Python/Django OR Node.js/Express
- PostgreSQL Database
- JWT Authentication

### AI/ML (Planned):
- YOLOv8 for Computer Vision
- NLP/ASR for Voice
- Custom Rheology Models
- Tanimoto Similarity Algorithm

### External APIs (Documented):
- FlavorDB API
- RecipeDB API
- IIIT Delhi Foodoscope API

---

## ❓ Common Questions

### Q: Do I need API keys to run the demo?
**A:** No! It works perfectly with mock data.

### Q: Where is the tech stack information?
**A:** In `/README.md` - removed from the website as requested.

### Q: Is login/sign up working?
**A:** Yes! It's in demo mode. Click "Login/Sign Up" in header.

### Q: How do I add real APIs?
**A:** See `/services/api-example.ts` and `/README.md` API Integration Guide.

### Q: Can I deploy this?
**A:** Yes! Run `npm run build` and deploy the `dist/` folder to any static host.

---

## 📞 Need Help?

1. Check `/README.md` for detailed documentation
2. Review `/services/api-example.ts` for API examples
3. All components have inline comments
4. Create an issue in the repository

---

## ✨ What Makes This Special

- ✅ Complete UI/UX for all 7 screens
- ✅ Beautiful, scientific design (Deep Cobalt + Saffron)
- ✅ Fully responsive and interactive
- ✅ Ready for API integration
- ✅ Comprehensive documentation
- ✅ Production-ready code structure
- ✅ IIIT Delhi Foodoscope Challenge 2025 compliant

---

**Good luck with your submission! 🎉**
