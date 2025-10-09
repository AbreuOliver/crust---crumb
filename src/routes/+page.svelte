<script lang="ts">
	export let imgA =
		'https://ik.imagekit.io/bip1v395ybp/baker_sF07hNGNC.webp?updatedAt=1760027946681';
	export let imgB =
		'https://ik.imagekit.io/bip1v395ybp/cupcakes_FWVXhrfnT.webp?updatedAt=1760028054596';
	export let imgC =
		'https://ik.imagekit.io/bip1v395ybp/sourdough-loaf_ww3zY_BYQ.jpg?updatedAt=1760027946578';

	
    const imgs = [imgA, imgB, imgC];
    
        function smoothScroll(e: Event, id: string) {
		e.preventDefault();
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<section id="hero" class="min-h-svh relative isolate overflow-hidden border-2 border-violet-600">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-12">
      <!-- Headline + CTAs -->
      <div class="lg:col-span-4">
        <h1 class="font-serif text-7xl leading-tight text-neutral-900 sm:text-7xl">
          <em class="italic">Comfort</em><br/>in every<br/>crumb
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              on:click={(e) => smoothScroll(e, 'menu')}
              class="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >Shop Bakes</a>
            <a
              href="/about"
              class="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-neutral-900 ring-1 ring-neutral-300 transition hover:ring-neutral-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >About Us</a>
          </div>
        </h1>
      </div>

      <!-- Image rail -->
      <div class="lg:col-span-8 w-full">
        <!-- Desktop: centered rail -->
        <div class="relative hidden md:flex items-center justify-center gap-8 w-full">
          <img src={imgA} alt="In the kitchen" class="w-1/4 max-w-sm rounded-2xl object-cover shadow-xl ring-1 ring-black/10 " />
          <img src={imgB} alt="Cupcakes" class="w-[32%] max-w-sm rounded-2xl object-cover shadow-2xl ring-1 ring-black/10  -translate-y-6" />
          <img src={imgC} alt="Sourdough loaf" class="w-[32%] max-w-sm rounded-2xl object-cover shadow-xl ring-1 ring-black/10  translate-y-4" />
          <div class="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-30 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.35)]"></div>
        </div>

        <!-- Mobile: swipeable rail (Svelte EACH ✅) -->
        <div class="md:hidden -mx-4 px-4">
          <div class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {#each imgs as src, i}
              <img
                src={src}
                alt=""
                class="snap-center w-4/5 shrink-0 rounded-2xl object-cover shadow-xl ring-1 ring-black/10"
              />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
