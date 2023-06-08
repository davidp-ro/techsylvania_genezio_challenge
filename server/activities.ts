import { GamesIntegration } from "./integrations/games";
import { HackerNewsIntegration } from "./integrations/hackerNews";
import { PasswordGeneratorIntegration } from "./integrations/passwordGen";
import { SpotifyIntegration } from "./integrations/spotify";
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

export class ActivitiesService {
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

  public async useActivity(
    interactionName: InteractionName,
    options: UseActivityOptions | undefined,
  ): Promise<UseActivityResult> {
    switch (interactionName) {
      case "fetch.hackernews":
        let res = await HackerNewsIntegration.fetchTodaysTop10();
        return {
          pageData: {
            title: "Top 10 HackerNews Articles",
          },
          success: res.ok,
          data: res.items,
        };
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
      case "generate.password":
        try {
          if (!options) {
            throw new Error("No options provided");
          }
          const password = await PasswordGeneratorIntegration.generatePassword(options);
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
      default:
        return {
          pageData: { title: "Unknown interaction" },
          success: false,
          data: "Unknown interaction",
        };
    }
  }
}
