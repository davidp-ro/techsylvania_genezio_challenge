import type { IInteractionName } from '$lib/services/genezio.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return { interactionName: params.slug as IInteractionName };
}
