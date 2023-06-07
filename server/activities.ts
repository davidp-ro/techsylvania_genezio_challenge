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

  public useActivity(activityId: number): UseActivityResult {
    return { success: true, data: {} };
  }
}
