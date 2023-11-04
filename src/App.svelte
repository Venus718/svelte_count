<script lang="ts">
  import Card from "./components/Card.svelte";
  import { values } from "./lib/store/store";
</script>

<main>
    <h1 class="text-6xl title">Multiple Counter</h1>
    {#each $values as value, index}
      <Card />
    {/each}
</main>

<style>
  .title {
    font-weight: inherit;
    margin: 0px;
  }
</style>
