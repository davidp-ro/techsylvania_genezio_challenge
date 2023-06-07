<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { isHome, isLoading } from "../../lib/globalStores";
  import Loading from "$lib/components/loading.svelte";
  import { GenezioWrapper } from "$lib/services/genezio";

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
        return "Good morning";
      case "afternoon":
        return "Good afternoon";
      case "evening":
        return "Good evening";
      case "night":
        return "Good night";
    }
  };

  let activities: any = [];

  onMount(async() => {
    isHome.set(true);
    
    activities = await GenezioWrapper.activities.getActivitiesForTOD("morning");
    console.log(activities);

    isLoading.set(false);
  });

  onDestroy(() => {
    isHome.set(false);
  });
</script>

{#if $isLoading}
  <div class="flex justify-center mt-48">
    <Loading />
  </div>
{:else}
  <section>{activities}</section>
{/if}
