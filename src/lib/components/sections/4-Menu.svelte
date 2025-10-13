<script lang="ts">
	import { cart } from '$lib/stores/cart';

	// ◼ CHANGE: STABLE SLUG + ID MAKER
	function slugify(s: string) {
		return s
			.toLowerCase()
			.trim()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}
	const makeId = (cat: string, name: string) => `${slugify(cat)}__${slugify(name)}`;

	// ◼ CHANGE: ALWAYS PASS A UNIQUE, STABLE ID TO CART.ADD
	function addItem(it: { id: string; name: string; price: number; desc?: string }) {
		cart.add({ id: it.id, name: it.name, price: it.price, desc: it.desc }, 1);
	}

	// ─────────────────────────────────────────────────────────────────────
	// EXAMPLE DATA (REPLACE WITH YOUR REAL DATA SOURCE)
	// ─────────────────────────────────────────────────────────────────────
	const categories = [
		{ id: 'pastries', label: 'Freshly Baked Pastries' },
		{ id: 'sourdough', label: 'Sourdough Bread' },
		{ id: 'treats', label: 'Gourmet Treats' }
	];

	const itemsRaw = [
		{
			cat: 'sourdough',
			name: 'Pumpkin Loaf',
			price: 3.5,
			desc: 'Rich and full-bodied with notes of dark chocolate and toasted nuts.'
		},
		{
			cat: 'sourdough',
			name: 'Jalapeño Cheddar Loaf',
			price: 4.25,
			desc: 'Silky mocha with a hint of vanilla, crowned with velvety cream.'
		},
		{
			cat: 'pastries',
			name: 'Morning Almond Croissant',
			price: 3.75,
			desc: 'Flaky croissant layered with almond frangipane.'
		},
		{
			cat: 'treats',
			name: 'Sea-Salt Caramel Tart',
			price: 4.0,
			desc: 'Buttery crust, caramel center, kiss of sea salt.'
		}
	];

	// ◼ CHANGE: ENRICH WITH UNIQUE IDS ONCE
	const items = itemsRaw.map((i) => ({ ...i, id: makeId(i.cat, i.name) }));

	let active = categories[0].id;
	$: filtered = items.filter((i) => i.cat === active);
	const label = (id: string) => categories.find((c) => c.id === id)?.label ?? '';
</script>

<!-- ╔══════════════════════════════════════════════════════════════════╗
     ║                            MENU SECTION                          ║
     ╚══════════════════════════════════════════════════════════════════╝ -->
<section
	id="menu"
	class="relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 pb-12 backdrop-blur-3xl lg:pt-0 lg:pb-32 snap-start min-h-[100svh]"
>
	<div class="mx-auto max-w-5xl px-0 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0">
		<h2 class="px-6 font-serif text-4xl font-thin text-white xl:text-6xl">Menu</h2>

		<!-- ╔══════════════════════════════════════════════════════════════╗
         ║                  LAYOUT GRID (SIDEBAR + CONTENT)            ║
         ╚══════════════════════════════════════════════════════════════╝ -->
		<div class="pt-8 md:grid md:grid-cols-12 md:gap-8">
			<!-- ╔════════════════════════════════════════════════════════════╗
           ║      MOBILE CATEGORY LIST (CARD, NO X-OVERFLOW)            ║
           ╚════════════════════════════════════════════════════════════╝ -->
			<div class="z-40 px-4 md:hidden">
				<div class="overflow-hidden rounded-xl border border-white/20 bg-black/60 backdrop-blur-sm">
					<ul class="divide-y divide-white/10" role="tablist" aria-label="Menu categories">
						{#each categories as c}
							<li>
								<button
									type="button"
									on:click={() => (active = c.id)}
									role="tab"
									aria-controls={`panel-${c.id}`}
									aria-selected={active === c.id}
									class="group grid w-full grid-cols-[1fr_auto] items-center gap-3 px-4 py-4 text-left
                         focus:ring-2 focus:ring-[var(--primary-green)]/60 focus:outline-none
                         {active === c.id
										? 'bg-[var(--primary-green)] text-white'
										: 'bg-black/30 text-white/85 hover:bg-white/5'}"
								>
									<!-- ◤ LABEL -->
									<span class="text-base">{c.label}</span>

									<!-- ◤ CHEVRON (VISIBLE WHEN ACTIVE) -->
									<svg
										class="h-4 w-4 transition-opacity {active === c.id
											? 'opacity-100'
											: 'opacity-0'}"
										viewBox="0 0 20 20"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										aria-hidden="true"
									>
										<path d="M7 5l6 5-6 5" />
									</svg>
								</button>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- ╔════════════════════════════════════════════════════════════╗
           ║                  DESKTOP SIDEBAR CATEGORY LIST            ║
           ╚════════════════════════════════════════════════════════════╝ -->
			<aside class="hidden md:col-span-4 md:block">
				<div class="space-y-2" role="tablist" aria-label="Menu categories">
					{#each categories as c, i}
						<button
							type="button"
							on:click={() => (active = c.id)}
							role="tab"
							aria-controls={`panel-${c.id}`}
							aria-selected={active === c.id}
							class="w-full rounded-lg border px-5 py-4 text-left transition
                     focus:ring-2 focus:ring-[var(--primary-green)]/60 focus:outline-none
                     {active === c.id
								? 'border-[var(--primary-green)] bg-[var(--primary-green)]/50 text-white'
								: 'border-white/20 bg-transparent text-white/80 hover:text-white'}"
						>
							<span class="mr-2 opacity-70">{(i + 1).toString().padStart(2, '0')}.</span>
							{c.label}
						</button>
					{/each}
				</div>
			</aside>

			<!-- ╔════════════════════════════════════════════════════════════╗
           ║                        ITEMS PANEL                        ║
           ╚════════════════════════════════════════════════════════════╝ -->
			<div
				class="md:col-span-8"
				id={`panel-${active}`}
				role="tabpanel"
				tabindex="0"
				aria-labelledby={active}
			>
				<!-- ◤ ACTIVE CATEGORY TITLE (STICKY ON SCROLL) -->
				<h3
					class="mt-8 py-4 pl-6 text-xs font-light tracking-widest text-white/80 uppercase md:mt-0"
				>
					{label(active)}
				</h3>

				<!-- ◤ ITEM CARDS -->
				<div class="mt-4 space-y-6 px-4">
					<!-- ◼ CHANGE: KEYED EACH (l.id) TO PREVENT UI MIX-UPS -->
					{#each filtered as it (it.id)}
						<div
							class="group relative flex items-start justify-between rounded-xl border border-white/10 bg-white/5 p-6"
							on:click={() => addItem(it)}
							role="button"
							tabindex="0"
							on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && addItem(it)}
							aria-label={`Add ${it.name} to cart`}
						>
							<div class="pr-14">
								<!-- room for the plus button if you keep it -->
								<h4 class="text-2xl text-white">{it.name}</h4>
								<p class="mt-2 leading-relaxed text-white/70">{it.desc}</p>
							</div>

							<div class="ml-6 text-xl text-white/90 tabular-nums">${it.price.toFixed(2)}</div>

							<!-- ◤ PLUS BUTTON (EXPLICIT AFFORDANCE) -->
							<button
								type="button"
								class="absolute right-4 bottom-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur hover:bg-black/60 focus:ring-2 focus:ring-emerald-500/60 focus:outline-none"
								on:click|stopPropagation={() => addItem(it)}
								aria-label={`Add ${it.name}`}
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
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
