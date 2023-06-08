<script lang="ts">
  import { goto } from "$app/navigation";
  import { isLoading } from "$lib/globalStores";
  import type {
    IHackerNewsItem,
    IUseActivityResult,
  } from "$lib/services/genezio";

  export let result: IUseActivityResult;
  const articles = result.data as IHackerNewsItem[];
  const dtf = new Intl.DateTimeFormat("en", {
    dateStyle: "full",
  });

  const getRootUrlFromLink = (link: string) => {
    const re = /(?:[^:]+:\/\/)(?:www\.)*([.a-z0-9]+)+/g;
    return link.match(re);
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

{#each articles as article}
  <div class="alert my-4 shadow-sm justify-start items-start md:items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-gray-800 hidden md:block"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m22 3l-1.67 1.67L18.67 3L17 4.67L15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3zM11 19H4v-6h7v6zm9 0h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4H4V8h16v3z"
      />
    </svg>
    <div class="flex flex-col items-start justify-start">
      <h3 class="text-xl font-bold">{article.title}</h3>
      <!-- Stats row -->
      <div class="flex flex-col md:flex-row justify-start md:justify-around">
        <div class="flex items-center my-[.15rem] md:my-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5zm10.79-1.38a9.947 9.947 0 0 0-12.28 0A7.957 7.957 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z"
            /><path
              fill="currentColor"
              d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
            />
          </svg>
          {article.by}
        </div>

        <div class="flex items-center my-[.15rem] md:my-0 md:ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"
            />
          </svg>
          {article.score}
        </div>

        <div class="flex items-center my-[.15rem] md:my-0 md:ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"
            />
          </svg>
          {dtf.format(article.time * 1000)}
        </div>
      </div>
      <!-- END:Stats row -->
    </div>

    <div class="tooltip ml-auto" data-tip={getRootUrlFromLink(article.url)}>
      <a
        href={article.url}
        class="btn btn-sm normal-case"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="flex items-center">
          <span>Read More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-3 h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z"
            />
          </svg>
        </div>
      </a>
    </div>
  </div>
{/each}
