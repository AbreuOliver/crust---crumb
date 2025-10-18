<script lang="ts">
  import type { MenuItem } from '$lib/types';
  import ItemCard from './ItemCard.svelte';
  export let items: MenuItem[] = [];
  export let ariaLabel = 'Menu items';
</script>

<div
  class="mt-4 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
  aria-label={ariaLabel}
>
  {#each items as it (it.id)}
    <ItemCard item={it} />
  {/each}
</div>
