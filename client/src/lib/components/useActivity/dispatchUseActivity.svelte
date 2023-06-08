<script lang="ts">
  import type {
    IInteractionName,
    IUseActivityResult,
  } from "$lib/services/genezio";
  import GamesEmbed from "./gamesEmbed.svelte";
  import HackerNews from "./hackerNews.svelte";
  import SpotifyEmbed from "./spotifyEmbed.svelte";

  export let interactionName: IInteractionName;
  export let result: IUseActivityResult;
</script>

{#if interactionName === "fetch.hackernews"}
  <HackerNews {result} />
{:else if interactionName === "embed.spotify"}
  <SpotifyEmbed {result} />
{:else if interactionName === "embed.games"}
  <GamesEmbed {result} />
{/if}
