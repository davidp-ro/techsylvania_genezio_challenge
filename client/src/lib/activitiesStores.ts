import { writable, type Writable } from "svelte/store";

import type { IRecipe, IRecipeSearchResult } from "$lib/services/genezio";

export let availableRecipies: Writable<IRecipeSearchResult[] | null> =
  writable(null);
export let recipe: Writable<IRecipe | null> = writable(null);

export let generatedRegex: Writable<string | null> = writable(null);
