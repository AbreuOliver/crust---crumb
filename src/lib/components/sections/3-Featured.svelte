<!-- src/lib/sections/Featured.svelte -->
<script lang="ts">
	import { cart } from '$lib/stores/cart';
	import type { FeaturedItem } from '$lib/types';

	// Match your Menu.svelte id pattern so items stay stable across pages
	function slugify(s: string) {
		return s
			.toLowerCase()
			.trim()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}
	const makeId = (cat: string, name: string) => `${slugify(cat)}__${slugify(name)}`;

	export let heading = 'Featured';
	export let items: FeaturedItem[] = [];

	// Enrich items with a stable id if one isn’t provided
	$: enriched = items.map((i) => ({ ...i, id: i.id ?? makeId(i.cat, i.name) }));

	function addItem(it: FeaturedItem) {
		cart.add({ id: it.id!, name: it.name, price: it.price, desc: it.desc }, 1);
	}
</script>

<!-- <section aria-labelledby="featured-heading" class="relative">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 id="featured-heading" class="serif text-3xl font-light text-white sm:text-4xl">{heading}</h2> -->
<section id="about" class="relative z-10 scroll-mt-30 bg-black py-20 md:py-15 lg:pt-0 snap-start min-h-[100svh]">
	<div class="mx-auto max-w-5xl px-6 lg:px-12 xl:px-6 xl:py-20 2xl:px-0">
		<h2 class="serif pr-6 text-4xl font-thin text-white xl:text-6xl">{heading}</h2>

		<!-- Content -->
		<div class="mt-10 grid gap-10 sm:mt-14 sm:items-start">
			<!-- Scroll-snap rail -->
			<div
				class="-mx-4 mt-6 flex snap-x w-full snap-mandatory gap-4 overflow-x-auto px-4 pb-2
             [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
				aria-label="Featured items"
			>
				{#each enriched as it (it.id)}
					<article
						class="relative w-4/5 shrink-0 snap-center overflow-hidden
                 rounded-2xl bg-white/5 ring-1 ring-white/10 sm:w-[360px] md:w-[420px]"
					>
						<div class="relative aspect-[4/3]">
							<img
								src={it.image}
								alt={it.alt}
								width="1200"
								height="900"
								loading="lazy"
								decoding="async"
								class="h-full w-full object-cover"
							/>
							{#if it.tag}
								<span
									class="absolute top-3 left-3 rounded-full px-2.5 py-1 text-xs font-semibold text-white
                           ring-1 ring-white/20 {it.badgeColor ?? 'bg-emerald-600'}"
								>
									{it.tag}
								</span>
							{/if}

							<!-- ▶ ONLY THIS CIRCLE IS THE BUTTON (same styling as Menu.svelte)
            <button
              type="button"
              class="absolute right-3 bottom-3 inline-flex h-10 w-10 items-center justify-center
                     rounded-full border border-white/20 bg-black/40 backdrop-blur
                     hover:bg-black/60 focus:outline-none
                     focus:ring-2 focus:ring-emerald-500/60"
              on:click={() => addItem(it)}
              aria-label={`Add ${it.name} to cart`}
              title="Add to cart"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button> -->
						</div>

						<div class="p-4 text-white/90">
							<div class="flex items-baseline justify-between gap-3">
								<h3 class="text-lg font-medium text-white">{it.name}</h3>
								<span class="text-sm text-white/70">${it.price.toFixed(2)}</span>
							</div>

							{#if it.desc}
								<p class="mt-2 line-clamp-2 text-sm text-white/70">{it.desc}</p>
							{/if}

							<!-- Actions row -->
							<div class="mt-3 flex items-center justify-start gap-4">
								{#if it.href}
									<a
										href={it.href}
										class="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 mr-auto"
									>
										View details
										<svg viewBox="0 0 24 24" class="size-4" fill="none">
											<path
												d="M9 5l7 7-7 7"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</a>
								{/if}

								<button
									type="button"
									class="inline-grid size-10 place-items-center rounded-full border border-white/20
             bg-black/40 backdrop-blur hover:bg-black/60 focus:ring-2
             focus:ring-emerald-500/60 focus:outline-none"
									on:click={() => addItem(it)}
									aria-label={`Add ${it.name} to cart`}
									title="Add to cart"
								>
									<svg
										viewBox="0 0 24 24"
										class="h-5 w-5 text-white"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="M12 5v14M5 12h14" />
									</svg>
								</button>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
