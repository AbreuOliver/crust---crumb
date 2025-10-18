<!-- src/lib/components/menu/ItemCard.svelte -->
<script lang="ts">
	import { cart } from '$lib/stores/cart';
	import type { MenuItem } from '$lib/types';
	export let item: MenuItem;
	const add = () =>
		cart.add({ id: item.id, name: item.name, price: item.price, desc: item.desc }, 1);
	const fallback = '/images/menu/fallback-4x3.jpg';
</script>

<article
	class="relative w-4/5 shrink-0 snap-center overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 sm:w-[360px] md:w-[420px]"
>
	<div class="relative aspect-[4/3]">
		<img
			src={item.image ?? fallback}
			alt={item.alt ?? item.name}
			width="1200"
			height="900"
			loading="lazy"
			decoding="async"
			class="h-full w-full object-cover"
		/>
		{#if item.tag}
			<span
				class="absolute top-3 left-3 rounded-full px-2.5 py-1 text-xs capitalize font-semibold text-white
                           ring-1 ring-white/20 {item.badgeColor ?? 'bg-emerald-600'}"
			>
				{item.tag}
			</span>
		{/if}
	</div>

	<div class="p-4 text-white/90">
		<div class="flex items-baseline justify-between gap-3">
			<h3 class="text-lg font-medium text-white">{item.name}</h3>
			<span class="text-sm text-white/70">${item.price.toFixed(2)}</span>
		</div>
		{#if item.desc}
			<p class="mt-2 line-clamp-2 text-sm text-white/70">
				{item.desc}
			</p>
		{/if}

		<div class="mt-3 flex items-center justify-start gap-4">
			<a
				href={item.href}
				class="mr-auto inline-flex items-center gap-1 text-sm font-semibold text-emerald-400"
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
			<button
				type="button"
				class="inline-grid size-10 place-items-center rounded-full border border-white/20 bg-black/40 backdrop-blur hover:bg-black/60 focus:ring-2 focus:ring-emerald-500/60 focus:outline-none"
				on:click={add}
				aria-label={`Add ${item.name} to cart`}
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
	<!-- <div class="p-4 text-white/90">
		<div class="flex items-baseline justify-between gap-3">
			<h3 class="text-lg font-medium text-white">{item.name}</h3>
			<p class="text-md text-white/70">
                <span class="text-xs">$</span>
                {item.price.toFixed(2)}
            </p>
		</div>

		<p class="mt-2 line-clamp-2 text-sm text-white/70">
			Vanilla cupcake swirled with Biscoff cookie butter and topped with silky frosting and cookie
			crumble.
		</p>
		
		<div class="mt-3 flex items-center justify-start gap-4">
	<a
				href="/bakes/biscoff-cookie-cupcake"
				class="mr-auto inline-flex items-center gap-1 text-sm font-semibold text-emerald-400"
				>View details <svg viewBox="0 0 24 24" class="size-4" fill="none"
					><path
						d="M9 5l7 7-7 7"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path></svg
				></a
			>
			<button
				type="button"
				class="inline-grid size-10 place-items-center items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur hover:bg-black/60 focus:ring-2 focus:ring-emerald-500/60 focus:outline-none"
				aria-label="Add Biscoff Cookie Cupcake to cart"
				title="Add to cart"
				><svg
					viewBox="0 0 24 24"
					class="h-6 w-6 text-white"
					fill="none"
					stroke="currentColor"
					stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg
				></button
			>
		</div>
	</div> -->
</article>
