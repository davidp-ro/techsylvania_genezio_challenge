import { PasswordGenOptions } from "./passwordGenerator";
import { FetchRecipesOptions } from "./recipe";

/**
 * The time of day, used to determine which activities to show
 */
type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

/**
 * Interactive activities
 */
type HardActivityType =
  | "code.automation"
  | "code.learning"
  | "code.project"
  | "code.research"
  | "code.writing"
  | "code.work"
  | "embed.iframe"
  | "chore.cook";

/**
 * Non-Interactive activities
 */
type SoftActivityType = "body.exercise" | "mind.meditation" | "mind.journaling";

/**
 * Activities
 * 
 * @see HardActivityType
 * @see SoftActivityType
 */
export type ActivityType = SoftActivityType | HardActivityType;

/**
 * The name of the interaction, used to run the correct interaction on the server
 */
export type InteractionName =
  | "fetch.hackernews"
  | "generate.password"
  | "embed.spotify"
  | "embed.games"
  | "view.recipes" // Client side only
  | "fetch.recipes"
  | "fetch.recipe+detailed"
  | "openai.regex" // Client side only;

/**
 * An activity, with all available fields
 */
  export interface Activity {
  id: number;
  name: string;
  description: string;
  type: ActivityType;
  imageHref: string;
  isInteractive: boolean;
  interactionName?: InteractionName;
}

/**
 * Page-related data in the response
 */
interface PageData {
  title: string;
}

/**
 * Available options for the useActivity method
 * 
 * @see PasswordGenOptions
 * @see FetchRecipesOptions
 */
export type UseActivityOptions = PasswordGenOptions & FetchRecipesOptions;

/**
 * The result of the useActivity method
 */
export interface UseActivityResult {
  pageData: PageData;
  success: boolean;
  data?: any;
}
