<script lang="ts">
  import { recipe } from "$lib/globalStores";
  import { onMount } from "svelte";

  type IngredientWithMeasure = { i: string; m: string };
  let ingredientsWithMeasures: IngredientWithMeasure[] = [];

  const getElementWithIdx = (type: "Ingredient" | "Measure", idx: number) => {
    if ($recipe === null) return;
    return $recipe[`str${type}${idx}` as keyof typeof $recipe];
  };

  const elementExists = (idx: number) => {
    const ingr = getElementWithIdx("Ingredient", idx);
    const meas = getElementWithIdx("Measure", idx);

    return ingr && ingr !== "" && meas && meas !== "";
  };

  const mapIngredients = () => {
    let idx = 1;
    while (elementExists(idx)) {
      ingredientsWithMeasures = [
        ...ingredientsWithMeasures,
        {
          i: getElementWithIdx("Ingredient", idx) ?? "-",
          m: getElementWithIdx("Measure", idx) ?? "-",
        },
      ];
      ++idx;
    }
  };

  onMount(() => {
    mapIngredients();
  });
</script>

<div
  class="mb-24 flex items-center flex-col md:flex-row md:mx-12 md:items-start"
>
  <div class="mb-6 md:mb-0">
    <table class="table">
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Measure</th>
        </tr>
      </thead>
      <tbody>
        {#each ingredientsWithMeasures as iwm}
          <tr>
            <th>{iwm.i}</th>
            <td>{iwm.m}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <div>
    <p class="md:ml-12 whitespace-pre-wrap leading-7">
      {$recipe?.strInstructions.replaceAll(/\n/g, "\n\n")}
    </p>
  </div>
</div>
