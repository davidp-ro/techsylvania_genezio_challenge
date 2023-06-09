<script lang="ts">
  import { goto } from "$app/navigation";
  import { generatedRegex } from "$lib/activitiesStores";
  import { isLoading } from "$lib/globalStores";
  import {
    GenezioWrapper,
    type IUseActivityResult,
  } from "$lib/services/genezio";

  export let result: IUseActivityResult;

  let task: string;

  const generate = async () => {
    if (!task || task.replaceAll(/ /g, "") === "") return;

    isLoading.set(true);

    const res = await GenezioWrapper.openai.generateRegexForPrompt(task);
    if (res !== null) {
      generatedRegex.set(res);
    }    

    isLoading.set(false);
  };
</script>

<h1 class="text-5xl mb-4">{result.pageData.title}</h1>

<button
  class="btn btn-ghost normal-case mb-8"
  on:click={() => {
    isLoading.set(true);
    goto("/home");
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 mr-2"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
    />
  </svg>
  Go back
</button>

<form
  class="text-center md:text-left"
  action="none"
  on:submit|preventDefault={generate}
>
  <h1 class="text-xl md:text-2xl">
    Create a regex that <input
      bind:value={task}
      required
      type="text"
      placeholder="matches emails, matches the TLD of a url, etc"
      class="input input-ghost text-xl md:text-2xl w-full max-w-lg md:max-w-2xl md:ml-2"
    />
  </h1>

  <button class="btn btn-wide normal-case mt-4"> Generate </button>
</form>

{#if $generatedRegex !== null}
  <h2 class="mt-16 text-xl md:text-3xl font-semibold">
    <span class="select-none gen">✨ Here you go:</span>
    <br class="block md:hidden">
    <br class="block md:hidden">
    <code class="select-all md:ml-2 font-normal p-2 bg-gray-200 rounded-lg">{$generatedRegex}</code>
  </h2>
{/if}

<style lang="postcss">
  .gen {
    @apply text-transparent bg-clip-text bg-gradient-to-r
      from-primary via-secondary to-accent;
  }
</style>
