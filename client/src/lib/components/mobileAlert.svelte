<script lang="ts">
  let mobileAlert: HTMLElement;
</script>

<div bind:this={mobileAlert} class="alert shadow-lg md:hidden">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="stroke-accent shrink-0 w-6 h-6"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    <h3>fling looks and works best on the desktop!</h3>
  </div>
  <button
    on:click={() => {
      mobileAlert.classList.add("hidden");
    }}
    class="btn btn-sm">Okay!</button
  >
</div>
