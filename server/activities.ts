import { GamesIntegration } from "./integrations/games";
import { HackerNewsIntegration } from "./integrations/hackerNews";
import { PasswordGeneratorIntegration } from "./integrations/passwordGen";
import { SpotifyIntegration } from "./integrations/spotify";
import { TheMealDbIntegration } from "./integrations/theMealDb";
import {
  TimeOfDay,
  Activity,
  InteractionName,
  UseActivityResult,
  UseActivityOptions,
} from "./models/activity";
import {
  MORNING_ACTIVITIES,
  AFTERNOON_ACTIVITIES,
  EVENING_ACTIVITIES,
  NIGHT_ACTIVITIES,
} from "./repo/activityRepo";

/**
 * Service for interacting with the activities, getting the current activities
 */
export class ActivitiesService {
  /**
   * Get the activities for the given time of day
   *
   * @param tod current time of day
   * @returns matching activities
   */
  public getActivitiesForTOD(tod: TimeOfDay): Activity[] {
    switch (tod) {
      case "morning":
        return MORNING_ACTIVITIES;
      case "afternoon":
        return AFTERNOON_ACTIVITIES;
      case "evening":
        return EVENING_ACTIVITIES;
      case "night":
        return NIGHT_ACTIVITIES;
    }
  }

  /**
   * Use an interactive activity! Some activities require options, some do not,
   * all have a common return type (@see UseActivityResult).
   *
   * @param interactionName what interaction to use
   * @param options some integrations require options, pass them here
   * @returns interaction result
   */
  public async useActivity(
    interactionName: InteractionName,
    options: UseActivityOptions | undefined
  ): Promise<UseActivityResult> {
    switch (interactionName) {
      // Fetch top 10 HackerNews articles
      case "fetch.hackernews":
        let res = await HackerNewsIntegration.fetchTodaysTop10();
        return {
          pageData: {
            title: "Top 10 HackerNews Articles",
          },
          success: res.ok,
          data: res.items,
        };
      // Embed Spotify playlist
      case "embed.spotify":
        return {
          pageData: {
            title: "Start off your day with some good vibes!",
          },
          success: true,
          data: {
            url: SpotifyIntegration.getSpotifyPlaylistUri("standalone"),
            embedHTML: SpotifyIntegration.getSpotifyEmbedCode(),
          },
        };
      // Embed minigames
      case "embed.games":
        return {
          pageData: {
            title: "Start off your day with some guesses!",
          },
          success: true,
          data: {
            embedHTML: GamesIntegration.getWebsiteEmbedCode(),
          },
        };
      // Generate a password
      // TODO: clean up, this has kinda janky error handling
      case "generate.password":
        try {
          if (!options) {
            throw new Error("No options provided");
          }
          const password = await PasswordGeneratorIntegration.generatePassword(
            options
          );
          return {
            pageData: {
              title: "Your generated password",
            },
            success: true,
            data: password,
          };
        } catch (e) {
          console.error(e);

          return {
            pageData: {
              title: "Error generating password",
            },
            success: false,
            data: JSON.stringify(e),
          };
        }
      // Fetch some recipes
      case "fetch.recipes":
        try {
          if (!options) {
            throw new Error("No options provided");
          }
          let res = await TheMealDbIntegration.searchRecipes(options);
          return {
            pageData: {
              title: "Here are some recipes for you!",
            },
            success: res.ok,
            data: res.data,
          };
        } catch (e) {
          console.error(e);
          return {
            pageData: {
              title: "Error fetching recipe",
            },
            success: false,
            data: JSON.stringify(e),
          };
        }
      // Fetch a specific recipe
      case "fetch.recipe+detailed":
        try {
          if (!options) {
            throw new Error("No options provided");
          }
          let res = await TheMealDbIntegration.getRecipeDetails(options);
          return {
            pageData: {
              title: res.data?.strMeal ?? "Recipe",
            },
            success: res.ok,
            data: res.data,
          };
        } catch (e) {
          console.error(e);
          return {
            pageData: {
              title: "Error fetching recipe",
            },
            success: false,
            data: JSON.stringify(e),
          };
        }
      // "match-all" if no interaction is found
      default:
        return {
          pageData: { title: "Unknown interaction" },
          success: false,
          data: "Unknown interaction",
        };
    }
  }
}
