import { HackerNewsIntegration } from "./integrations/hackerNews";
import {
  TimeOfDay,
  Activity,
  InteractionName,
  UseActivityResult,
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
    interactionName: InteractionName
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
      default:
        return {
          pageData: { title: "Unknown interaction" },
          success: false,
          data: "Unknown interaction",
        };
    }
  }
}
