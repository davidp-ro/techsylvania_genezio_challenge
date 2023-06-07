<script lang="ts">
  import { isHome } from "../globalStores";
</script>

<nav
  class="relative top-0 z-20 flex items-center justify-between w-full p-6 bg-white"
>
  <a href="/"><img class="h-12" src="/fling_Logo.svg" alt="logo" /></a>

  <a
    href={!($isHome)
      ? "/home"
      : "https://github.com/davidp-ro/techsylvania_genezio_challenge"}
    class="flex items-center justify-center px-4 py-3 text-white transition duration-200 transform bg-indigo-600 rounded-lg lg:w-auto hover:bg-indigo-500 hover:shadow-lg hover:scale-105"
  >
    <span
      class="font-semibold text-sm whitespace-nowrap tracking-wide"
    >
      {!($isHome) ? "Get started!" : "View GitHub Repo"}
    </span>
  </a>
</nav>
