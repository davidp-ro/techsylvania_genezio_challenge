/**
 * Wrap the generated Genez.io SDK & types/models for ease of use
 *
 * Preferred this as just exporting the sdk in src/lib would leave out the types
 * anyway
 */

import { ActivitiesService } from "../../../../server/sdk/activitiesService.sdk";
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

export type IActivityType = ActivityType;
export type IInteractionName = InteractionName;
export type IActivity = Activity;
export type IUseActivityResult = UseActivityResult;

export type IHackerNewsItem = HackerNewsItem;
export type IHackerNewsResult = HackerNewsResult;

export type IPasswordGenOptions = PasswordGenOptions;

export const GenezioWrapper = {
  activities: ActivitiesService,
};
