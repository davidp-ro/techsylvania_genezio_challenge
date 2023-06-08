<script lang="ts">
  import { goto } from "$app/navigation";
  import { isLoading } from "$lib/globalStores";
  import { GenezioWrapper, type IUseActivityResult } from "$lib/services/genezio";

  export let result: IUseActivityResult;

  let len = 25;
  let useNum = true;
  let useSC = true;

  const regenerate = async () => {
    result.data = 'das';
    isLoading.set(true);

    const res = await GenezioWrapper.activities.useActivity("generate.password", {
      length: len,
      numbers: useNum,
      specialChars: useSC,
    });
    
    if (res.success) {
      result.data = res.data;
    }

    isLoading.set(false);
  }
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

<div
  class="bg-gray-800 text-gray-100 w-min py-4 px-8 rounded-lg flex items-center whitespace-nowrap"
>
  <code class="max-w-[200px] md:max-w-5xl overflow-x-scroll">{result.data}</code>
  <button
    class="ml-4 btn btn-ghost"
    on:click={async () => {
      await navigator.clipboard.writeText(result.data);
    }}
  >
    Copy
  </button>
</div>

<h1 class="text-3xl mt-12 mb-4">Change the options</h1>

<form class="max-w-xl" action="none" on:submit|preventDefault={() => {}}>
  <div class="flex items-center">
    <p class="font-bold whitespace-nowrap">Length &nbsp;</p>
    <input
      type="number"
      min="8"
      max="256"
      class="input max-w-xs"
      bind:value={len}
    />
    <input
      type="range"
      min="8"
      max="256"
      class="range"
      step="1"
      bind:value={len}
    />
  </div>
  <div class="form-control items-start">
    <label class="label cursor-pointer">
      <p class="whitespace-nowrap mr-4">Use numbers</p>
      <input type="checkbox" class="toggle" bind:checked={useNum} />
    </label>
  </div>
  <div class="form-control items-start">
    <label class="label cursor-pointer">
      <p class="whitespace-nowrap mr-4">Use special characters</p>
      <input type="checkbox" class="toggle" bind:checked={useSC} />
    </label>
  </div>
</form>

<button class="btn btn-secondary mt-4 normal-case" on:click={regenerate}>
  Regenerate!
</button>
