<script lang="ts">
  const credits: { name: string; url: string }[] = [
    { name: "Genezio", url: "https://genez.io" },
    { name: "SvelteKit", url: "https://svelte.dev/" },
    { name: "Tailwind", url: "https://tailwindcss.com/" },
    { name: "daisyUI", url: "https://daisyui.com/" },
    { name: "Material Icons & Symbols", url: "https://fonts.google.com/icons" },
    { name: "tails (Home Template Design)", url: "https://devdojo.com/tails" },
  ];
</script>

<section class="mt-24">
  <h1 class="text-2xl md:text-5xl">What makes this project "fling"?</h1>
  <p class="text-gray-700">(pun definitely intended)</p>

  <ul class="text-xl mt-8 list-disc ml-10">
    {#each credits as credit}
      <a class="text-gray-700" href={credit.url}>
        <li>{credit.name}</li>
      </a>
    {/each}
  </ul>

  <h1 class="mt-12 text-2xl md:text-5xl">Open Source?</h1>
  <h2 class="mt-4">
    Yup! <a
      class="text-gray-700 font-bold"
      href="https://github.com/davidp-ro/techsylvania_genezio_challenge"
      target="_blank"
      rel="noopener noreferrer">➡️ Here ⬅️</a
    >
  </h2>

  <h1 class="mt-12 text-2xl md:text-5xl">Why the name?</h1>
  <h2 class="mt-4">
    Well... <i>fling - noun - a short period of enjoyment or wild behaviour</i>.
    So by using fling you should get that ;)
  </h2>
</section>
