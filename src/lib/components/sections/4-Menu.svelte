<!-- src/lib/components/Menu.svelte -->
<script lang="ts">
  import { categories, items } from '$lib/menu';
  import type { MenuItem } from '$lib/types';
  import CategoryTabs from '$lib/components/CategoryTabs.svelte';
  import ItemRail from '$lib/components/ItemRail.svelte';

  let active = categories[0].id;
  $: filtered = items.filter((i: MenuItem) => i.cat === active);
  const label = (id: string) => categories.find((c) => c.id === id)?.label ?? '';
</script>

<section id="menu" class="border-t border-neutral-700 relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 pb-12 backdrop-blur-3xl lg:pt-0 lg:pb-32 scroll-mt-24">
  <div class="mx-auto max-w-5xl px-0 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0">
    <h2 class="serif px-6 text-4xl font-thin text-white xl:text-6xl">Menu</h2>

    <div class="pt-8 md:grid md:grid-cols-12 md:gap-8">
      <!-- Categories -->
      <CategoryTabs {categories} bind:active on:change={(e) => (active = e.detail)} />

      <!-- Items -->
      <div class="md:col-span-8 px-6" id={`panel-${active}`} role="tabpanel" tabindex="0" aria-labelledby={active}>
        <h3 class="mt-8 py-4 pl-6 text-xs font-light tracking-widest text-white/80 uppercase md:mt-0">
          {label(active)}
        </h3>
        <ItemRail items={filtered} ariaLabel={`${label(active)} items`} />
      </div>
    </div>
  </div>
</section>
