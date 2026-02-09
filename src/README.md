# AromaCraft - AI-Powered Culinary Assistant

**Submission for IIIT Delhi Foodoscope Challenge 2025**

AromaCraft is a next-generation web application that combines molecular data science with culinary art to optimize aroma, texture, and cooking processes. Using FlavorDB and RecipeDB APIs, it provides hands-free AI guidance via camera-based ingredient recognition and voice control.

---

## 🎯 Project Overview

AromaCraft transforms cooking through:
- **Molecular Pairing Engine**: Uses FlavorDB's molecular compound data to suggest scientifically-backed flavor combinations
- **Rheological Texture Mapping**: Predicts and optimizes food texture using viscosity, elasticity, and structural metrics
- **Computer Vision Pantry Management**: Real-time ingredient detection and freshness assessment
- **Voice-Guided Cooking**: Hands-free operation with dynamic AI adjustments during cooking
- **Personalized Sensory Profiles**: AI learns user preferences for customized recipe recommendations

---

## 🏗️ Technical Stack

### **Frontend**
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS v4.0
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React
- **Charts**: Recharts for molecular visualizations
- **Build Tool**: Vite (for local development)

### **Backend (Planned Integration)**
- **Framework**: Python/Django or Node.js/Express
- **Database**: PostgreSQL for user profiles, PSP data, and OAV compensation data
- **API Gateway**: RESTful API for FlavorDB and RecipeDB integration

### **AI/ML Models**
1. **Computer Vision**: YOLOv8 / EfficientDet for ingredient detection
2. **NLP/ASR**: Voice command processing for hands-free control
3. **Rheology Prediction Model**: Texture analysis and process modification
4. **Tanimoto Similarity Calculator**: Molecular bridging algorithm for flavor pairing

### **External APIs**
- **FlavorDB API**: Molecular profiles and aroma compounds database
- **RecipeDB API**: Ingredient and recipe data
- **IIIT Delhi Foodoscope API**: Challenge-specific integration

### **Key Algorithms**
- **Tanimoto Coefficient**: `T(A,B) = |A ∩ B| / |A ∪ B|` for molecular similarity
- **OAV (Odor Activity Value)**: `OAV = Concentration / Threshold` for aroma optimization

---

## 🚀 How to Run Locally

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### **Installation Steps**

1. **Clone the Repository**
```bash
git clone <repository-url>
cd aromacraft
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure API Keys**

Create a `.env` file in the root directory:

```env
# FlavorDB API Configuration
VITE_FLAVORDB_API_KEY=your_flavordb_api_key_here
VITE_FLAVORDB_BASE_URL=https://cosylab.iiitd.edu.in/flavordb/

# RecipeDB API Configuration
VITE_RECIPEDB_API_KEY=your_recipedb_api_key_here
VITE_RECIPEDB_BASE_URL=https://cosylab.iiitd.edu.in/recipedb/

# IIIT Delhi Foodoscope API (if required)
VITE_FOODOSCOPE_API_KEY=your_foodoscope_api_key_here
```

**Note**: Currently, the application runs as a **frontend-only demo** with simulated data. The API integrations are designed but not yet connected to live endpoints.

4. **Start Development Server**
```bash
npm run dev
# or
yarn dev
```

5. **Open in Browser**
Navigate to `http://localhost:5173` (or the port shown in terminal)

### **Build for Production**
```bash
npm run build
# or
yarn build
```

The production build will be in the `dist/` folder.

---

## 📱 Application Screens

### **1. Landing Page**
- Hero section with dual CTAs
- Features showcase (Aroma Pairing, Texture Mapping, AI Guidance)
- How It Works (4-step process)
- Technology highlights
- Use cases for different user types

### **2. Pantry Vision**
- Live camera feed simulation
- AI-powered ingredient detection with bounding boxes
- Freshness indicators (green/yellow/red)
- Molecular data tooltips
- Waste prevention alerts

### **3. Recipe Generation & Customization**
- Interactive sensory controls (Crunchiness, Viscosity, Aroma)
- Dynamic recipe output with OAV and rheological adjustments
- Molecular bridge visualization
- Texture profile predictions
- FlavorDB/RecipeDB integration callouts

### **4. Voice-Guided Cooking Interface**
- Full-screen, high-contrast design for hands-free operation
- Large, bold instructions with step-by-step progression
- Voice-activated controls (Next, Repeat, Timer, Quality Check)
- Real-time AI alerts for process optimization
- Camera texture check with prescriptive feedback

### **5. Creative Improviser**
- Bridge ingredient discovery using molecular science
- Interactive molecular network visualization
- Tanimoto similarity calculations
- Scientific rationale for ingredient pairings

### **6. User Profile & Personalized Sensory Profile (PSP)**
- Account and dietary preference management
- Interactive taste preference sliders (Sweet, Sour, Salty, Bitter, Umami)
- Texture preference controls (Crunchy, Creamy, Chewy)
- Radar chart visualization
- Cooking history with rating feedback

---

## 🔑 API Integration Guide

### **Current Status**
The application is currently a **frontend prototype** with:
- ✅ Complete UI/UX implementation
- ✅ Interactive components and state management
- ✅ Simulated data and mock API responses
- ⏳ Backend API integration (pending)

### **How to Integrate Real APIs**

#### **1. FlavorDB API Integration**

Create a new file `/src/services/flavordb.ts`:

```typescript
const FLAVORDB_BASE_URL = import.meta.env.VITE_FLAVORDB_BASE_URL;
const FLAVORDB_API_KEY = import.meta.env.VITE_FLAVORDB_API_KEY;

export async function getMolecularProfile(ingredient: string) {
  const response = await fetch(
    `${FLAVORDB_BASE_URL}/entities?name=${encodeURIComponent(ingredient)}`,
    {
      headers: {
        'Authorization': `Bearer ${FLAVORDB_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
}

export async function getFlavorCompounds(moleculeId: string) {
  const response = await fetch(
    `${FLAVORDB_BASE_URL}/molecules/${moleculeId}`,
    {
      headers: {
        'Authorization': `Bearer ${FLAVORDB_API_KEY}`,
      },
    }
  );
  return response.json();
}

export async function calculateTanimotoSimilarity(
  ingredient1: string,
  ingredient2: string
) {
  // Implementation based on FlavorDB API documentation
  const profile1 = await getMolecularProfile(ingredient1);
  const profile2 = await getMolecularProfile(ingredient2);
  
  // Calculate Tanimoto coefficient
  // T(A,B) = |A ∩ B| / |A ∪ B|
  // Implementation here...
}
```

#### **2. RecipeDB API Integration**

Create a new file `/src/services/recipedb.ts`:

```typescript
const RECIPEDB_BASE_URL = import.meta.env.VITE_RECIPEDB_BASE_URL;
const RECIPEDB_API_KEY = import.meta.env.VITE_RECIPEDB_API_KEY;

export async function searchRecipes(ingredients: string[]) {
  const response = await fetch(
    `${RECIPEDB_BASE_URL}/recipes/search`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RECIPEDB_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients }),
    }
  );
  return response.json();
}

export async function getRecipeDetails(recipeId: string) {
  const response = await fetch(
    `${RECIPEDB_BASE_URL}/recipes/${recipeId}`,
    {
      headers: {
        'Authorization': `Bearer ${RECIPEDB_API_KEY}`,
      },
    }
  );
  return response.json();
}
```

#### **3. Update Components to Use Real APIs**

In `/components/PantryVision.tsx`, replace mock data:

```typescript
import { getMolecularProfile } from '../services/flavordb';

// Replace simulated detection with real API calls
const fetchIngredientData = async (ingredientName: string) => {
  const molecularData = await getMolecularProfile(ingredientName);
  // Update state with real data
};
```

---

## 🎨 Design System

### **Color Palette**
- **Deep Cobalt Blue** (`#1e40af`): Technology and data representation
- **Saffron/Gold** (`#fbbf24`): Culinary art and highlights
- **White/Light Gray**: Clean backgrounds with effective whitespace

### **Typography**
- **Font Family**: Inter or Montserrat (modern sans-serif)
- **Scale**: Follows Tailwind's default typography scale
- **Emphasis**: Clean, minimalist, and scientific aesthetic

### **Spacing**
- Effective use of whitespace for clarity
- Consistent padding and margin scales
- Responsive grid layouts

---

## 🧪 Testing

### **Manual Testing Checklist**
- [ ] All screens load without errors
- [ ] Navigation works between all screens
- [ ] Camera simulation displays correctly
- [ ] Voice command buttons trigger appropriate actions
- [ ] Sensory sliders update recipe output
- [ ] Profile preferences save and display correctly

### **Future: Automated Testing**
- Unit tests for utility functions (Tanimoto calculation, OAV computation)
- Integration tests for API calls
- E2E tests for user workflows

---

## 📊 Database Schema (Planned)

### **Users Table**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  cooking_level VARCHAR(50),
  dietary_restrictions JSONB,
  allergies TEXT[],
  created_at TIMESTAMP
);
```

### **Sensory Profiles Table**
```sql
CREATE TABLE sensory_profiles (
  user_id UUID REFERENCES users(id),
  sweet_pref INT CHECK (sweet_pref >= 1 AND sweet_pref <= 10),
  sour_pref INT CHECK (sour_pref >= 1 AND sour_pref <= 10),
  salty_pref INT CHECK (salty_pref >= 1 AND salty_pref <= 10),
  bitter_pref INT CHECK (bitter_pref >= 1 AND bitter_pref <= 10),
  umami_pref INT CHECK (umami_pref >= 1 AND umami_pref <= 10),
  crunchy_pref INT CHECK (crunchy_pref >= 1 AND crunchy_pref <= 10),
  creamy_pref INT CHECK (creamy_pref >= 1 AND creamy_pref <= 10),
  chewy_pref INT CHECK (chewy_pref >= 1 AND chewy_pref <= 10),
  updated_at TIMESTAMP
);
```

### **Cooking History Table**
```sql
CREATE TABLE cooking_history (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  recipe_name VARCHAR(255),
  rating INT CHECK (rating >= 1 AND rating <= 5),
  cooked_at TIMESTAMP,
  feedback TEXT
);
```

---

## 🔒 Security & Privacy

**Important**: AromaCraft is designed for culinary innovation and is **not intended** for:
- Collecting Personally Identifiable Information (PII)
- Storing sensitive medical data
- Securing highly confidential information

**Best Practices**:
- Use environment variables for all API keys
- Never commit `.env` files to version control
- Implement proper authentication for production deployment
- Sanitize all user inputs
- Follow OWASP security guidelines

---

## 🚧 Current Limitations & Future Roadmap

### **Current Limitations**
- Frontend-only demo (no backend currently deployed)
- Simulated API responses
- No user authentication system
- No persistent data storage
- Camera feed is simulated (not using device camera)
- Voice commands trigger actions but don't use actual speech recognition

### **Future Enhancements**
- [ ] Backend API implementation (Django/Express)
- [ ] Real FlavorDB and RecipeDB integration
- [ ] User authentication (OAuth, JWT)
- [ ] PostgreSQL database setup
- [ ] Real computer vision model deployment (YOLOv8)
- [ ] Actual voice recognition (Web Speech API or cloud service)
- [ ] Mobile app version (React Native)
- [ ] Recipe sharing and community features
- [ ] Advanced ML models for better texture prediction

---

## 📞 Contact & Support

**Project Team**: AromaCraft Development Team  
**Challenge**: IIIT Delhi Foodoscope Challenge 2025  
**Institution**: [Your Institution Name]

For questions or issues:
- Create an issue in the GitHub repository
- Contact: [your-email@example.com]

---

## 📄 License

This project is submitted as part of the IIIT Delhi Foodoscope Challenge 2025.

---

## 🙏 Acknowledgments

- **FlavorDB**: For molecular flavor compound data
- **RecipeDB**: For recipe and ingredient databases
- **IIIT Delhi**: For organizing the Foodoscope Challenge 2025
- **Shadcn/ui**: For the beautiful component library
- **Tailwind CSS**: For the utility-first CSS framework

---

## 📸 Screenshots

### Landing Page
![Landing Page](docs/screenshots/landing.png)

### Pantry Vision
![Pantry Vision](docs/screenshots/pantry.png)

### Recipe Generation
![Recipe Generation](docs/screenshots/recipe.png)

### Voice-Guided Cooking
![Voice Cooking](docs/screenshots/voice.png)

---

**Built with ❤️ for the future of computational gastronomy**
