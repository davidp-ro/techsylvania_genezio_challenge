import { writable, type Writable } from "svelte/store";

import type { IRecipe, IRecipeSearchResult } from "$lib/services/genezio";

export let isHome = writable(false);
export let isLoading = writable(true);

export let availableRecipies: Writable<IRecipeSearchResult[] | null> =
  writable(null);
export let recipe: Writable<IRecipe | null> = writable(null);
