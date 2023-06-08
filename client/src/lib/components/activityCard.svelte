<script lang="ts">
  export let activity: Activity;
</script>

<div class="card card-side bg-base-100 bg-opacity-70 backdrop-blur-lg shadow-xl my-4">
  <img
    class="rounded-s-lg object-cover"
    width="128px"
    src={activity.imageHref}
    alt={activity.name}
  />
  <div class="card-body">
    <h2 class="card-title">{activity.name}</h2>
    <p>{activity.description}</p>
    {#if activity.isInteractive}
      <div class="card-actions justify-end">
        <button class="btn btn-outline btn-primary normal-case">Use action</button>
      </div>
    {/if}
  </div>
</div>
