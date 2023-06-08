<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { isHome, isLoading } from "../../lib/globalStores";
  import Loading from "$lib/components/loading.svelte";
  import { GenezioWrapper } from "$lib/services/genezio";
  import MobileAlert from "$lib/components/mobileAlert.svelte";
  import ActivityList from "$lib/components/activityList.svelte";

  const getTimeOfDay = (): TimeOfDay => {
    let currentHour = new Date().getHours();
    if (currentHour >= 4 && currentHour < 9) return "morning";
    if (currentHour >= 9 && currentHour < 18) return "afternoon";
    if (currentHour >= 18 && currentHour < 22) return "evening";
    return "night";
  };

  const getGreeting = (): string => {
    switch (getTimeOfDay()) {
      case "morning":
        return "🌅 Good morning";
      case "afternoon":
        return "☀️ Good afternoon";
      case "evening":
        return "🌇 Good evening";
      case "night":
        return "🌙 Good night";
    }
  };

  let activities: any = [];
  let tod: TimeOfDay;

  const switchTod = async (newTod: string) => {
    isLoading.set(true);

    tod = newTod as TimeOfDay;
    activities = await GenezioWrapper.activities.getActivitiesForTOD(tod);

    isLoading.set(false);
  };

  onMount(async () => {
    isHome.set(true);

    tod = getTimeOfDay();
    activities = await GenezioWrapper.activities.getActivitiesForTOD(tod);
    console.log(activities);

    isLoading.set(false);
  });

  onDestroy(() => {
    isHome.set(false);
  });
</script>

<h1 class="my-8 text-6xl font-semibold text-center md:text-left">
  {getGreeting()}
</h1>

<MobileAlert />

<div class="switch-tod-bar">
  <p class="mb-4 md:mb-0 md:mr-5 whitespace-nowrap">Switch time of day</p>

  <div class="btn-group">
    {#each ["Morning", "Afternoon", "Evening", "Night"] as _tod}
      <button
        class="tod-btn {_tod.toLowerCase() === tod ? 'tod-btn-active' : ''}"
        on:click={() => {
          switchTod(_tod.toLowerCase());
        }}
      >
        {_tod}
      </button>
    {/each}
  </div>
</div>

{#if $isLoading}
  <div class="flex justify-center mt-48">
    <Loading />
  </div>
{:else}
  <section class="mt-12">
    <ActivityList {activities} />
  </section>
{/if}

<style lang="postcss">
  .switch-tod-bar {
    @apply flex flex-col md:flex-row items-center bg-gray-100 bg-opacity-20
    px-2 md:pl-4 md:pr-2 py-2 w-min rounded-xl;
  }

  .tod-btn {
    @apply btn btn-ghost bg-gray-100 bg-opacity-50 normal-case;
  }

  .tod-btn-active {
    @apply bg-gray-500 bg-opacity-30;
  }
</style>
