<script lang="ts">
  import type {
    IInteractionName,
    IUseActivityResult,
  } from "$lib/services/genezio";
  import HackerNews from "./hackerNews.svelte";

  export let interactionName: IInteractionName;
  export let result: IUseActivityResult;
</script>

{#if interactionName === "fetch.hackernews"}
  <HackerNews {result} />
{/if}
