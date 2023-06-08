<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";

  import {
    GenezioWrapper,
    type IUseActivityResult,
  } from "$lib/services/genezio";
  import { isLoading } from "$lib/globalStores";
  import Loading from "$lib/components/loading.svelte";
  import DispatchUseActivity from "$lib/components/useActivity/dispatchUseActivity.svelte";

  export let data: PageData;
  let result: IUseActivityResult | null = null;

  onMount(async () => {
    isLoading.set(true);
    result = await GenezioWrapper.activities.useActivity(data.interactionName);
    isLoading.set(false);
  });
</script>

{#if $isLoading}
  <div class="flex justify-center mt-48">
    <Loading />
  </div>
{:else if result && !result.success}
  <section class="mt-12">
    <h1>Something went wrong...</h1>
    <p>Details: ${result.data ?? "unknown"}</p>
  </section>
{:else if result !== null}
  <section class="mt-12">
    <DispatchUseActivity interactionName={data.interactionName} {result} />
  </section>
{/if}
