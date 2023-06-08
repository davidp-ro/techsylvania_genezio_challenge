<script lang="ts">
  import { goto } from "$app/navigation";
  import { isLoading } from "$lib/globalStores";
  import type { IUseActivityResult } from "$lib/services/genezio";

  export let result: IUseActivityResult;
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

<article class="md:mx-24">
  {@html result.data.embedHTML}
</article>

