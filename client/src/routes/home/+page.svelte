<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { isHome } from "../../lib/globalStores";

  onMount(() => {
    isHome.set(true);
  });

  onDestroy(() => {
    isHome.set(false);
  });
</script>

<h1>hello</h1>
