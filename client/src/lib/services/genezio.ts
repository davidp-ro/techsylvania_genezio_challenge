/**
 * Wrap the generated Genez.io SDK & types/models for ease of use
 *
 * Preferred this as just exporting the sdk in src/lib would leave out the types
 * anyway
 */

import { ActivitiesService } from "../../../../server/sdk/activitiesService.sdk";
import { OpenAIService } from "../../../../server/sdk/openAIService.sdk";
import type {
  ActivityType,
  InteractionName,
  Activity,
  UseActivityResult,
} from "../../../../server/models/activity";
import type {
  HackerNewsItem,
  HackerNewsResult,
} from "../../../../server/models/hackerNewsItem";
import type { PasswordGenOptions } from "../../../../server/models/passwordGenerator";
import type {
  FetchRecipesOptions,
  TheMealDbResult,
  RecipeSearchResult,
  Recipe,
  AvailableCategories,
} from "../../../../server/models/recipe";

export type IActivityType = ActivityType;
export type IInteractionName = InteractionName;
export type IActivity = Activity;
export type IUseActivityResult = UseActivityResult;

export type IHackerNewsItem = HackerNewsItem;
export type IHackerNewsResult = HackerNewsResult;

export type IPasswordGenOptions = PasswordGenOptions;

export type IAvailableCategories = AvailableCategories;
export type IFetchRecipesOptions = FetchRecipesOptions;
export type ITheMealDbResult<T> = TheMealDbResult<T>;
export type IRecipeSearchResult = RecipeSearchResult;
export type IRecipe = Recipe;

export const GenezioWrapper = {
  activities: ActivitiesService,
  openai: OpenAIService,
};
