<script lang="ts">
  export let icon: string;
  export let name: string;
  export let bgColor: string;
  export let onSelected: () => void;
</script>

<div class="card  shadow-md">
  <figure>
    <div class="{bgColor} bg-opacity-10 text-3xl p-8 m-2 rounded-full">{icon}</div>
  </figure>
  <div class="card-body items-center">
    <h2 class="card-title">{name}</h2>
    <div class="card-actions">
      <button class="btn btn-ghost normal-case" on:click={onSelected}>
        Select
      </button>
    </div>
  </div>
</div>
