<script lang="ts">
  import { Hello } from "../../../server/sdk/hello.sdk";
  const callGenezio = async () => {
    const res = await Hello.sayHello();
    alert(res);
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click|preventDefault={callGenezio}>Test!</button>
