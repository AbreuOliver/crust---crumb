<!-- src/lib/sections/Footer.svelte -->
<script lang="ts">
  // Optional props if you want to pass content in from +layout or +page
  export let brand = 'Crust & Crumb';
  export let address = 'Home bakery · Pickup near North Raleigh, NC';
  export let email = 'hello@crustandcrumb.kitchen';
  export let phone = '(919) 555-0123';
  export let hours = [
    { d: 'Thu–Fri', t: '4:00–7:00 PM (pickup)' },
    { d: 'Sat',     t: '9:00 AM–12:00 PM (pickup)' },
    { d: 'Sun–Wed', t: 'Closed (baking/prep)' }
  ];
  const year = new Date().getFullYear();
</script>

<footer class="relative z-10 bg-gradient-to-b from-black via-black/95 to-black ring-1 ring-white/10 text-white">
  <div class="mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
    <!-- Top: brand + signup -->
    <div class="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-12">
      <div class="md:col-span-6">
        <h3 class="font-serif text-2xl sm:text-3xl">{brand}</h3>
        <p class="mt-3 max-w-[60ch] text-white/70">
          Small-batch breads, pastries, and seasonal treats — baked with patience and good butter.
        </p>
      </div>

      <!-- Signup -->
      <div class="md:col-span-6">
        <label for="footer-email" class="block text-sm text-white/70">Get drop alerts & seasonal menus</label>
        <form
          class="mt-2 flex gap-2"
          on:submit|preventDefault={() => {/* hook up to your form endpoint */}}
        >
          <input
            id="footer-email"
            type="email"
            required
            placeholder="you@example.com"
            class="flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white
                   placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
          />
          <button
            type="submit"
            class="shrink-0 rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white
                   hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70"
          >
            Subscribe
          </button>
        </form>
        <p class="mt-2 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
      </div>
    </div>

    <!-- Middle: 3 columns -->
    <div class="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Location / Hours -->
      <div>
        <h4 class="text-sm font-semibold tracking-wide text-white/80">Visit & Pickup</h4>
        <p class="mt-3 text-white/70">{address}</p>
        <dl class="mt-4 space-y-1 text-sm text-white/70">
          {#each hours as h}
            <div class="flex gap-2">
              <dt class="w-24 text-white/60">{h.d}</dt>
              <dd>{h.t}</dd>
            </div>
          {/each}
        </dl>
        <a
          href="https://maps.google.com/?q=North+Raleigh+NC"
          class="mt-3 inline-block text-sm font-semibold text-emerald-400 hover:text-emerald-300"
          rel="noopener"
          >Open in Maps →</a
        >
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-sm font-semibold tracking-wide text-white/80">Contact</h4>
        <ul class="mt-3 space-y-2 text-white/70">
          <li><a href={`mailto:${email}`} class="hover:text-white">{email}</a></li>
          <li><a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} class="hover:text-white">{phone}</a></li>
          <li><a href="/policies/allergens" class="hover:text-white">Allergens & Ingredients</a></li>
        </ul>
        <div class="mt-4 flex gap-3">
          <!-- Instagram -->
          <a aria-label="Instagram" href="https://instagram.com/crustandcrumb" class="inline-grid size-9 place-items-center rounded-full ring-1 ring-white/15 bg-white/5 hover:bg-white/10">
            <svg viewBox="0 0 24 24" class="size-5 text-white/90" fill="none" stroke="currentColor" stroke-width="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"></circle>
            </svg>
          </a>
          <!-- Facebook -->
          <a aria-label="Facebook" href="https://facebook.com/crustandcrumb" class="inline-grid size-9 place-items-center rounded-full ring-1 ring-white/15 bg-white/5 hover:bg-white/10">
            <svg viewBox="0 0 24 24" class="size-5 text-white/90" fill="currentColor">
              <path d="M13.5 9H15V6h-2a3 3 0 0 0-3 3v2H8v3h2v7h3v-7h2.1l.4-3H13V9a.5.5 0 0 1 .5-.5Z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick links -->
      <div>
        <h4 class="text-sm font-semibold tracking-wide text-white/80">Menu & Ordering</h4>
        <ul class="mt-3 space-y-2 text-white/70">
          <li><a href="#menu" class="hover:text-white">Menu</a></li>
          <li><a href="/about" class="hover:text-white">Our Story</a></li>
          <li><a href="/faq" class="hover:text-white">FAQ</a></li>
          <li><a href="/contact" class="hover:text-white">Contact</a></li>
        </ul>
      </div>

      <!-- Policies -->
      <div>
        <h4 class="text-sm font-semibold tracking-wide text-white/80">Policies</h4>
        <ul class="mt-3 space-y-2 text-white/70">
          <li><a href="/policies/order" class="hover:text-white">Order & Lead Times</a></li>
          <li><a href="/policies/pickup" class="hover:text-white">Pickup & Availability</a></li>
          <li><a href="/policies/privacy" class="hover:text-white">Privacy Policy</a></li>
          <li><a href="/policies/terms" class="hover:text-white">Terms of Use</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
      <div class="flex flex-col items-start justify-between gap-3 sm:flex-row">
        <p>© {year} {brand}. All rights reserved.</p>
        <p class="text-white/50">Home bakery operating under NC Cottage Food law.</p>
      </div>
    </div>
  </div>

  <!-- Optional JSON-LD (LocalBusiness) -->
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: brand,
      email,
      telephone: phone,
      address: { '@type': 'PostalAddress', addressLocality: 'Raleigh', addressRegion: 'NC' },
      areaServed: 'Raleigh, NC',
      openingHoursSpecification: hours.map((h) => ({ '@type': 'OpeningHoursSpecification', description: `${h.d} ${h.t}` }))
    })}
  </script>
</footer>
