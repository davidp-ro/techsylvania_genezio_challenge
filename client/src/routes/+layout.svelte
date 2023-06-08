<script lang="ts">
  import "../app.postcss";
  import { isHome } from "$lib/globalStores";
  import Navbar from "$lib/components/navbar.svelte";
  import BackgroundBlob from "$lib/components/backgroundBlob.svelte";
</script>

{#if $isHome}
  <BackgroundBlob />
{/if}

<main class="antialiased absolute top-0 left-0 z-10 w-full h-full">
    <div class="px-8 pb-12 mx-auto max-w-7xl md:pb-20 lg:pb-24">
      <Navbar />
      <slot />
    </div>
</main>

<style global lang="postcss">
  body {
    @apply antialiased bg-white text-gray-900 selection:bg-primary selection:text-gray-100;
  }
</style>
