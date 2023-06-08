<script lang="ts">
  import { page } from "$app/stores";
</script>

<h1 class="my-8 text-6xl font-semibold text-center md:text-left">
  Whoops! Something went wrong
</h1>

<div class="mx-4">
  ⚙️ Error: &nbsp; <code>{$page.error?.message}</code>
</div>

<div class="mt-12">
  <a href="/" class="btn btn-accent normal-case">
    Let's try this again
  </a>
</div>
