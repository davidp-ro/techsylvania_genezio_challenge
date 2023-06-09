import {
  FetchRecipesOptions,
  Recipe,
  RecipeSearchResult,
  TheMealDbResult,
} from "../models/recipe";

const fetch = require("node-fetch");

export class TheMealDbIntegration {
  public static async searchRecipes(
    options: FetchRecipesOptions
  ): Promise<TheMealDbResult<RecipeSearchResult[]>> {
    if (!options.query) {
      console.error("No query provided");
      return {
        ok: false,
        data: [],
      };
    }

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${options.query}`
      );
      if (!res.ok) {
        console.error("Error fetching recipes");
        return {
          ok: false,
          data: [],
        };
      }

      const json = await res.json();
      return {
        ok: true,
        data: json.meals,
      };
    } catch (e) {
      console.error(`Error fetching recipes - ${e}`);
      return {
        ok: false,
        data: [],
      };
    }
  }

  public static async getRecipeDetails(
    options: FetchRecipesOptions
  ): Promise<TheMealDbResult<Recipe | null>> {
    if (!options.recipeId) {
      console.error("No query provided");
      return {
        ok: false,
        data: null,
      };
    }

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${options.recipeId}`
      );
      if (!res.ok) {
        console.error("Error fetching recipes");
        return {
          ok: false,
          data: null,
        };
      }

      const json = await res.json();
      return {
        ok: true,
        data: json.meals[0] as Recipe,
      };
    } catch (e) {
      console.error(`Error fetching recipes - ${e}`);
      return {
        ok: false,
        data: null,
      };
    }
  }
}
