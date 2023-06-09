import { PasswordGenOptions } from "./passwordGenerator";
import { FetchRecipesOptions } from "./recipe";

type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

type HardActivityType =
  | "code.automation"
  | "code.learning"
  | "code.project"
  | "code.research"
  | "code.writing"
  | "code.work"
  | "embed.iframe"
  | "chore.cook";
type SoftActivityType = "body.exercise" | "mind.meditation" | "mind.journaling";
export type ActivityType = SoftActivityType | HardActivityType;

export type InteractionName =
  | "fetch.hackernews"
  | "generate.password"
  | "embed.spotify"
  | "embed.games"
  | "view.recipes" // Client side only
  | "fetch.recipes"
  | "fetch.recipe+detailed";

export interface Activity {
  id: number;
  name: string;
  description: string;
  type: ActivityType;
  imageHref: string;
  isInteractive: boolean;
  interactionName?: InteractionName;
}

interface PageData {
  title: string;
}

export type UseActivityOptions = PasswordGenOptions & FetchRecipesOptions;

export interface UseActivityResult {
  pageData: PageData;
  success: boolean;
  data?: any;
}
