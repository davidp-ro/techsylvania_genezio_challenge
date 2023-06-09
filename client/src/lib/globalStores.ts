import { writable } from "svelte/store";

export let isHome = writable(false);
export let isLoading = writable(true);
