<!-- src/lib/sections/Testimonials.svelte -->
<script lang="ts">
  export type Testimonial = {
    id: string;
    quote: string;
    author: string;
    role?: string;      // e.g., "Local customer"
    location?: string;  // e.g., "Raleigh, NC"
    rating?: number;    // 1–5
    avatar?: string;    // optional headshot
    date?: string;      // ISO or display string
  };

  export let heading = 'What people are saying';
  export let testimonials: Testimonial[] = [];

  // star helper
  const stars = (n = 0) => Array.from({ length: 5 }, (_, i) => i < (n ?? 0));
</script>

<section id="testimonials" class="relative z-10 bg-black py-32 sm:py-24">
  <div class="mx-auto max-w-5xl px-6 lg:px-12 xl:px-6 2xl:px-0">
    <h2 class="serif px-0 text-3xl font-light text-white sm:text-4xl">{heading}</h2>

    <!--
      Mobile: horizontal scroll / snap
      Desktop: auto-fit grid (2–3 cols depending on width)
    -->
    <div class="mt-8 sm:mt-12">
      <!-- Mobile rail -->
      <div
        class="sm:hidden -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2
               [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Customer testimonials"
      >
        {#each testimonials as t (t.id)}
          <article
            class="snap-center w-[85%] shrink-0 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 text-white/90"
            aria-label={`Testimonial from ${t.author}`}
          >
            {#if t.rating}
              <div class="mb-3 flex items-center gap-1 text-amber-400" aria-label={`Rated ${t.rating} out of 5`}>
                {#each stars(t.rating) as filled, i}
                  <svg viewBox="0 0 20 20" class="size-4" fill="currentColor" aria-hidden="true">
                    {#if filled}
                      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
                    {:else}
                      <path fill-opacity="0.25" d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
                    {/if}
                  </svg>
                {/each}
              </div>
            {/if}

            <blockquote class="text-base leading-relaxed text-white/90">
              “{t.quote}”
            </blockquote>

            <footer class="mt-4 flex items-center gap-3">
              {#if t.avatar}
                <img src={t.avatar} alt="" class="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" loading="lazy" decoding="async" />
              {/if}
              <div class="text-sm">
                <div class="font-semibold text-white">{t.author}</div>
                <div class="text-white/60">
                  {#if t.role}{t.role}{/if}{#if t.role && t.location} · {/if}{#if t.location}{t.location}{/if}
                </div>
              </div>
            </footer>
          </article>
        {/each}
      </div>

      <!-- Desktop grid -->
      <div
        class="hidden sm:grid gap-6 md:gap-8"
        style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));"
      >
        {#each testimonials as t (t.id)}
          <article class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-white/90">
            {#if t.rating}
              <div class="mb-3 flex items-center gap-1 text-amber-400" aria-label={`Rated ${t.rating} out of 5`}>
                {#each stars(t.rating) as filled, i}
                  <svg viewBox="0 0 20 20" class="size-4" fill="currentColor" aria-hidden="true">
                    {#if filled}
                      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
                    {:else}
                      <path fill-opacity="0.25" d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
                    {/if}
                  </svg>
                {/each}
              </div>
            {/if}

            <blockquote class="text-base leading-relaxed text-white/90">
              “{t.quote}”
            </blockquote>

            <footer class="mt-4 flex items-center gap-3">
              {#if t.avatar}
                <img src={t.avatar} alt="" class="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" loading="lazy" decoding="async" />
              {/if}
              <div class="text-sm">
                <div class="font-semibold text-white">{t.author}</div>
                <div class="text-white/60">
                  {#if t.role}{t.role}{/if}{#if t.role && t.location} · {/if}{#if t.location}{t.location}{/if}
                </div>
              </div>
            </footer>
          </article>
        {/each}
      </div>
    </div>
  </div>

  <!-- Optional JSON-LD for SEO (LocalBusiness with review snippets) -->
  {#if testimonials.length}
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Crust & Crumb',
        review: testimonials.map((t) => ({
          '@type': 'Review',
          reviewBody: t.quote,
          author: { '@type': 'Person', name: t.author },
          reviewRating: t.rating ? { '@type': 'Rating', ratingValue: t.rating, bestRating: 5, worstRating: 1 } : undefined
        }))
      })}
    </script>
  {/if}
</section>
