<script lang="ts">
  import { goto } from "$app/navigation";
  import { availableRecipies, isLoading, recipe } from "$lib/globalStores";
  import {
    GenezioWrapper,
    type IAvailableCategories,
    type IUseActivityResult,
  } from "$lib/services/genezio";
  import RecipeCard from "./recipeCard.svelte";
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

  const getRecipe = async (id: string) => {
    isLoading.set(true);

    const res: IUseActivityResult = await GenezioWrapper.activities.useActivity(
      "fetch.recipe+detailed",
      {
        recipeId: id,
      }
    );

    if (res.success) {
      result.pageData = res.pageData;
      recipe.set(res.data);
    }

    isLoading.set(false);
  };
</script>

<h1 class="text-5xl mb-4">{result.pageData.title}</h1>

<button
  class="btn btn-ghost normal-case mb-8"
  on:click={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if ($recipe !== null) {
      recipe.set(null);
      result.pageData.title = "Here are some recipes for you!";
    } else if ($availableRecipies !== null) {
      availableRecipies.set(null);
      result.pageData.title = "Pick a category";
    } else {
      isLoading.set(true);
      goto("/home");
    }
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

  {#if $recipe !== null}
    Choose another recipe
  {:else if $availableRecipies !== null}
    Choose another category
  {:else}
    Go back
  {/if}
</button>

{#if $recipe !== null}
  <RecipeCard />
{:else if $availableRecipies !== null}
  <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
    {#each $availableRecipies as recipeOption}
      <div
        class="card shadow-md transition-colors hover:bg-primary hover:bg-opacity-10"
      >
        <div class="card-body">
          <h2 class="card-title">{recipeOption.strMeal}</h2>
          <div class="card-actions justify-end">
            <button
              class="btn btn-ghost normal-case"
              on:click={() => {
                getRecipe(recipeOption.idMeal);
              }}
            >
              Pick
            </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
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
