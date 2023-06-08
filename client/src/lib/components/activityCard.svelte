<script lang="ts">
  import { goto } from "$app/navigation";
  import type { IActivity } from "$lib/services/genezio";

  export let activity: IActivity;

  const useActivity = async () => {
    if (!activity.isInteractive || !activity.interactionName) return;

    goto(`/home/use/${activity.interactionName}`);
  };
</script>

<div
  class="card card-side bg-base-100 bg-opacity-70 backdrop-blur-lg shadow-xl my-4"
>
  <img
    class="rounded-s-lg object-cover"
    width="128px"
    src={activity.imageHref}
    alt={activity.name}
  />
  <div class="card-body">
    <h2 class="card-title">
      {#if activity.isInteractive}
        <div class="tooltip" data-tip="Interactive action">
          <svg
            class="text-primary h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"
            />
          </svg>
        </div>
      {/if}
      {activity.name}
    </h2>
    <p>{activity.description}</p>
    {#if activity.isInteractive}
      <div class="card-actions justify-end">
        <button
          class="btn btn-outline btn-primary normal-case"
          on:click={useActivity}
        >
          Use action
        </button>
      </div>
    {/if}
  </div>
</div>
