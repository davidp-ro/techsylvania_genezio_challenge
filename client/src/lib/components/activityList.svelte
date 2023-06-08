<script lang="ts">
  export let activities: Activity[];
  import ActivityCard from "$lib/components/activityCard.svelte";
</script>

<div class="grid md:grid-cols-2 gap-4 md:mx-12">
  {#each activities as activity}
    <ActivityCard {activity} />
  {/each}
</div>
