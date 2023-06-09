<script lang="ts">
  import { goto } from "$app/navigation";
  import { availableRecipies, isLoading, recipe } from "$lib/globalStores";
  import {
    GenezioWrapper,
    type IAvailableCategories,
    type IUseActivityResult,
  } from "$lib/services/genezio";
  import RecipeCategoryCard from "./recipeCategoryCard.svelte";

  export let result: IUseActivityResult;

  type Category = { n: IAvailableCategories; i: string; c: string };
  const categories: Category[] = [
    { n: "Breakfast", i: "🥓", c: "bg-red-500" },
    { n: "Beef", i: "🍔", c: "bg-orange-400" },
    { n: "Chicken", i: "🍗", c: "bg-orange-900" },
    { n: "Pasta", i: "🍝", c: "bg-yellow-400" },
    { n: "Pork", i: "🍖", c: "bg-red-800" },
    { n: "Dessert", i: "🧁", c: "bg-pink-500" },
    { n: "Vegetarian", i: "🥕", c: "bg-orange-700" },
    { n: "Vegan", i: "🥦", c: "bg-green-500" },
  ];

  const selectedCategory = async (cat: IAvailableCategories) => {
    isLoading.set(true);

    const res: IUseActivityResult = await GenezioWrapper.activities.useActivity(
      "fetch.recipes",
      {
        query: cat,
      }
    );

    if (res.success) {
      result.pageData = res.pageData;
      availableRecipies.set(res.data);
    }

    isLoading.set(false);
  };
</script>

<h1 class="text-5xl mb-4">{result.pageData.title}</h1>

<button
  class="btn btn-ghost normal-case mb-8"
  on:click={() => {
    isLoading.set(true);
    goto("/home");
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 mr-2"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
    />
  </svg>
  Go back
</button>

{#if $recipe !== null}
  <h1>a</h1>
{:else if $availableRecipies !== null}
  {#each $availableRecipies as recipeOption}
    {recipeOption.strMeal} <br />
  {/each}
{:else}
  <div
    class="grid grid-cols-1 mb-24 md:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-10"
  >
    {#each categories as category}
      <RecipeCategoryCard
        icon={category.i}
        name={category.n}
        bgColor={category.c}
        onSelected={async () => {
          await selectedCategory(category.n);
        }}
      />
    {/each}
  </div>
{/if}
