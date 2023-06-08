// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { ActivitiesService } from "../../server/sdk/activitiesService.sdk";

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';
}

export {};
