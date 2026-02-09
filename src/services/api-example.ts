/**
 * AromaCraft API Services - Example Implementation
 * 
 * This file demonstrates how to integrate real FlavorDB and RecipeDB APIs.
 * Currently, the application uses mock data. Follow the instructions in README.md
 * to set up your API keys and uncomment the real implementations below.
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

// These will be loaded from your .env file
const FLAVORDB_BASE_URL = import.meta.env.VITE_FLAVORDB_BASE_URL || "https://cosylab.iiitd.edu.in/flavordb/";
const FLAVORDB_API_KEY = import.meta.env.VITE_FLAVORDB_API_KEY || "YOUR_API_KEY_HERE";

const RECIPEDB_BASE_URL = import.meta.env.VITE_RECIPEDB_BASE_URL || "https://cosylab.iiitd.edu.in/recipedb/";
const RECIPEDB_API_KEY = import.meta.env.VITE_RECIPEDB_API_KEY || "YOUR_API_KEY_HERE";

const FOODOSCOPE_API_KEY = import.meta.env.VITE_FOODOSCOPE_API_KEY || "YOUR_API_KEY_HERE";

// ============================================================================
// FLAVORDB API SERVICES
// ============================================================================

/**
 * Get molecular profile for a specific ingredient
 * @param ingredientName - Name of the ingredient (e.g., "tomato", "basil")
 * @returns Molecular compound data from FlavorDB
 */
export async function getMolecularProfile(ingredientName: string) {
  try {
    const response = await fetch(
      `${FLAVORDB_BASE_URL}/entities?name=${encodeURIComponent(ingredientName)}`,
      {
        headers: {
          'Authorization': `Bearer ${FLAVORDB_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`FlavorDB API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching molecular profile:', error);
    // Return mock data as fallback
    return getMockMolecularProfile(ingredientName);
  }
}

/**
 * Get detailed information about a specific flavor molecule
 * @param moleculeId - The molecule identifier from FlavorDB
 */
export async function getFlavorCompound(moleculeId: string) {
  try {
    const response = await fetch(
      `${FLAVORDB_BASE_URL}/molecules/${moleculeId}`,
      {
        headers: {
          'Authorization': `Bearer ${FLAVORDB_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`FlavorDB API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching flavor compound:', error);
    return null;
  }
}

/**
 * Calculate Tanimoto similarity coefficient between two ingredients
 * @param ingredient1 - First ingredient name
 * @param ingredient2 - Second ingredient name
 * @returns Tanimoto coefficient (0-1)
 */
export async function calculateTanimotoSimilarity(
  ingredient1: string,
  ingredient2: string
): Promise<number> {
  try {
    const [profile1, profile2] = await Promise.all([
      getMolecularProfile(ingredient1),
      getMolecularProfile(ingredient2),
    ]);

    // Extract molecular fingerprints
    const molecules1 = new Set(profile1.molecules?.map((m: any) => m.id) || []);
    const molecules2 = new Set(profile2.molecules?.map((m: any) => m.id) || []);

    // Calculate Tanimoto: T(A,B) = |A ∩ B| / |A ∪ B|
    const intersection = new Set([...molecules1].filter(x => molecules2.has(x)));
    const union = new Set([...molecules1, ...molecules2]);

    const tanimoto = intersection.size / union.size;
    return tanimoto;
  } catch (error) {
    console.error('Error calculating Tanimoto similarity:', error);
    // Return mock similarity
    return 0.65 + Math.random() * 0.25; // Random between 0.65-0.90
  }
}

// ============================================================================
// RECIPEDB API SERVICES
// ============================================================================

/**
 * Search for recipes using available ingredients
 * @param ingredients - Array of ingredient names
 * @returns Matching recipes from RecipeDB
 */
export async function searchRecipes(ingredients: string[]) {
  try {
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

    if (!response.ok) {
      throw new Error(`RecipeDB API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error searching recipes:', error);
    return getMockRecipes(ingredients);
  }
}

/**
 * Get detailed recipe information including cooking steps
 * @param recipeId - Recipe identifier from RecipeDB
 */
export async function getRecipeDetails(recipeId: string) {
  try {
    const response = await fetch(
      `${RECIPEDB_BASE_URL}/recipes/${recipeId}`,
      {
        headers: {
          'Authorization': `Bearer ${RECIPEDB_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`RecipeDB API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return null;
  }
}

// ============================================================================
// MOCK DATA (FALLBACK FOR DEMO)
// ============================================================================

function getMockMolecularProfile(ingredientName: string) {
  return {
    name: ingredientName,
    molecules: [
      { id: "mol_001", name: "Linalool", family: "Terpenes", odor: "Floral, Sweet" },
      { id: "mol_002", name: "Eugenol", family: "Phenylpropanoids", odor: "Spicy, Clove-like" },
      { id: "mol_003", name: "Limonene", family: "Terpenes", odor: "Citrus, Fresh" },
    ],
  };
}

function getMockRecipes(ingredients: string[]) {
  return [
    {
      id: "recipe_001",
      name: "Molecular Basil Tomato Soup",
      ingredients: ingredients,
      cookingTime: 45,
      difficulty: "Medium",
      description: "A scientifically optimized soup with enhanced aroma compounds",
    },
  ];
}

// ============================================================================
// AUTHENTICATION SERVICES (TO BE IMPLEMENTED)
// ============================================================================

/**
 * User login
 * @param email - User email
 * @param password - User password
 * @returns Authentication token and user data
 */
export async function login(email: string, password: string) {
  // TODO: Implement real authentication
  // This should call your backend API
  console.log('Login attempt:', email);
  
  // Mock response
  return {
    success: true,
    token: 'mock_jwt_token',
    user: {
      id: 'user_123',
      email: email,
      name: 'Demo User',
    },
  };
}

/**
 * User registration
 * @param name - User's full name
 * @param email - User email
 * @param password - User password
 * @returns Authentication token and user data
 */
export async function signup(name: string, email: string, password: string) {
  // TODO: Implement real registration
  console.log('Signup attempt:', name, email);
  
  // Mock response
  return {
    success: true,
    token: 'mock_jwt_token',
    user: {
      id: 'user_' + Date.now(),
      email: email,
      name: name,
    },
  };
}

// ============================================================================
// USER PROFILE SERVICES (TO BE IMPLEMENTED)
// ============================================================================

/**
 * Save user's personalized sensory profile
 * @param userId - User identifier
 * @param profile - Sensory preference data
 */
export async function saveSensoryProfile(userId: string, profile: any) {
  // TODO: Implement database storage
  console.log('Saving sensory profile for user:', userId, profile);
  
  return { success: true };
}

/**
 * Get user's cooking history
 * @param userId - User identifier
 */
export async function getCookingHistory(userId: string) {
  // TODO: Implement database retrieval
  console.log('Fetching cooking history for user:', userId);
  
  // Mock response
  return [
    {
      id: 1,
      name: "Viscosity-Optimized Basil Tomato Soup",
      date: "Nov 18, 2025",
      rating: 5,
    },
  ];
}

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

/*
// Example 1: Get molecular data for an ingredient
const tomatoProfile = await getMolecularProfile("tomato");
console.log(tomatoProfile);

// Example 2: Calculate similarity between ingredients
const similarity = await calculateTanimotoSimilarity("basil", "oregano");
console.log(`Similarity: ${similarity}`);

// Example 3: Search for recipes
const recipes = await searchRecipes(["tomato", "basil", "garlic"]);
console.log(recipes);

// Example 4: User authentication
const loginResult = await login("user@example.com", "password123");
if (loginResult.success) {
  localStorage.setItem('authToken', loginResult.token);
}
*/
