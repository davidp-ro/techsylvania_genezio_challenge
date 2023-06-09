<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";

  import {
    GenezioWrapper,
    type IPasswordGenOptions,
    type IUseActivityResult,
  } from "$lib/services/genezio";
  import { isLoading } from "$lib/globalStores";
  import Loading from "$lib/components/loading.svelte";
  import DispatchUseActivity from "$lib/components/useActivity/dispatchUseActivity.svelte";
  import { goto } from "$app/navigation";

  export let data: PageData;
  let result: IUseActivityResult | null = null;

  onMount(async () => {
    isLoading.set(true);

    // Handle custom cases where an interaction requires options
    switch (data.interactionName) {
      case "generate.password":
        const generatorOptions: IPasswordGenOptions = {
          length: 16,
          numbers: true,
          specialChars: true,
        };
        result = await GenezioWrapper.activities.useActivity(
          "generate.password", // Special case
          generatorOptions
        );
        break;
      case "view.recipes":
        // "view.recipes" is meant as a client-side only "step"
        // before actually fetching anything
        result = {
          pageData: {
            title: "Pick a category",
          },
          success: true,
          data: null
        }
        break;
      default:
        result = await GenezioWrapper.activities.useActivity(
          data.interactionName,
          null
        );
        break;
    }

    isLoading.set(false);
  });
</script>

{#if $isLoading}
  <div class="flex justify-center mt-48">
    <Loading />
  </div>
{:else if result && !result.success}
  <section class="mt-12">
    <h1 class="text-4xl my-4">Something went wrong...</h1>
    <p>Details: &nbsp; <code>{result.data ?? "unknown"}</code></p>
    <button
      class="btn btn-ghost normal-case mt-8"
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
  </section>
{:else if result !== null}
  <section class="mt-12">
    <DispatchUseActivity interactionName={data.interactionName} {result} />
  </section>
{/if}
