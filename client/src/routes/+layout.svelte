<script lang="ts">
  import "../app.postcss";
  import Navbar from "../lib/components/navbar.svelte";
</script>

<main class="antialiased relative w-full bg-white">
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
