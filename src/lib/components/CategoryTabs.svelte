<!-- src/lib/components/menu/CategoryTabs.svelte -->
<script lang="ts">
  import type { Category } from '$lib/types/menu';
  import { createEventDispatcher } from 'svelte';
  export let categories: Category[] = [];
  export let active = '';
  const dispatch = createEventDispatcher<{ change: string }>();
  const set = (id: string) => dispatch('change', id);
</script>

<!-- Mobile -->
<div class="z-40 px-4 md:hidden">
  <div class="overflow-hidden rounded-xl border border-white/20 bg-black/60 backdrop-blur-sm">
    <ul class="divide-y divide-white/10" role="tablist" aria-label="Menu categories">
      {#each categories as c}
        <li>
          <button
            type="button"
            on:click={() => set(c.id)}
            role="tab"
            aria-controls={`panel-${c.id}`}
            aria-selected={active === c.id}
            class="group grid w-full grid-cols-[1fr_auto] items-center gap-3 px-4 py-4 text-left focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]/60
                   {active === c.id ? 'bg-[var(--primary-green)] text-white' : 'bg-black/30 text-white/85 hover:bg-white/5'}"
          >
            <span class="text-base">{c.label}</span>
            <svg class="h-4 w-4 transition-opacity {active === c.id ? 'opacity-100' : 'opacity-0'}" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M7 5l6 5-6 5" />
            </svg>
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>

<!-- Desktop -->
<div class="hidden md:block md:col-span-4">
  <div class="space-y-2" role="tablist" aria-label="Menu categories">
    {#each categories as c, i}
      <button
        type="button"
        on:click={() => set(c.id)}
        role="tab"
        aria-controls={`panel-${c.id}`}
        aria-selected={active === c.id}
        class="w-full rounded-lg border px-5 py-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]/60
               {active === c.id ? 'border-[var(--primary-green)] bg-[var(--primary-green)]/50 text-white' : 'border-white/20 bg-transparent text-white/80 hover:text-white'}"
      >
        <span class="mr-2 opacity-70">{(i + 1).toString().padStart(2, '0')}.</span>
        {c.label}
      </button>
    {/each}
  </div>
</div>
