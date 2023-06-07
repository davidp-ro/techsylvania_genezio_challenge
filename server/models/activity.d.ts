type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

type HardActivityType =
  | "code.automation"
  | "code.learning"
  | "code.project"
  | "code.research"
  | "code.writing"
  | "code.work";
type SoftActivityType = "body.exercise" | "mind.meditation" | "mind.journaling";
type ActivityType = SoftActivityType | HardActivityType;

interface Activity {
  id: number;
  name: string;
  description: string;
  type: ActivityType;
}

interface UseActivityResult {
  success: boolean;
  data?: any;
}
