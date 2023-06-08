type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

type HardActivityType =
  | "code.automation"
  | "code.learning"
  | "code.project"
  | "code.research"
  | "code.writing"
  | "code.work"
  | "embed.iframe";
type SoftActivityType = "body.exercise" | "mind.meditation" | "mind.journaling";
export type ActivityType = SoftActivityType | HardActivityType;

export type InteractionName =
  | "fetch.hackernews"
  | "generate.password"
  | "embed.spotify"
  | "embed.games";

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

export interface UseActivityResult {
  pageData: PageData;
  success: boolean;
  data?: any;
}
