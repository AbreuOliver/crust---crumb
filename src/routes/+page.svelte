<script lang="ts">
	import About from '$lib/components/sections/2-About.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Menu from '$lib/components/sections/4-Menu.svelte';
	import '../app.css';
	import Featured from '$lib/components/sections/3-Featured.svelte';
	import type { FeaturedItem } from '$lib/types';
	import Testimonials from '$lib/components/sections/5-Testimonials.svelte';
	import Footer from '$lib/components/2-Footer.svelte';

	const featured: FeaturedItem[] = [
		{
			id: 'biscoff-cookie-cupcake', // stable, slug-style id
			cat: 'seasonal',
			name: 'Biscoff Cookie Cupcake', // ✅ keep
			price: 9, // single cupcake price
			image:
				'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/a8iObHpvOlsBuCS6edJN/media/672c51749f961a82a0cc97fb.jpeg', // ✅ keep
			alt: 'Biscoff cookie butter cupcake topped with frosting and cookie crumble',
			href: '/bakes/biscoff-cookie-cupcake',
			tag: 'Fan Favorite',
			badgeColor: 'bg-emerald-600', // ✅ keep
			desc: 'Vanilla cupcake swirled with Biscoff cookie butter and topped with silky frosting and cookie crumble.'
		},
		{
			id: 'scary-cookie-set-12', // reflects the pack size
			cat: 'seasonal',
			name: 'Scary Cookie Set', // ✅ keep
			price: 36, // 12-pack set price (adjust if needed)
			image:
				'https://assets.cdn.filesafe.space/a8iObHpvOlsBuCS6edJN/media/68e6972b0650b5eb6af71014.jpeg', // ✅ keep
			alt: 'Decorated Halloween sugar cookies: ghosts, spiders, pumpkins, and BOO plaques',
			href: '/bakes/scary-cookie-set',
			tag: 'Limited',
			badgeColor: 'bg-emerald-600', // ✅ keep
			desc: 'Twelve hand-decorated vanilla sugar cookies: 3 ghosts, 3 spiders, 3 pumpkins, and 3 “BOO” plaques. Buttery, tender, and perfect for parties or gifting.'
		},
				{
			id: 'biscoff-cookie-cupcake-2', // stable, slug-style id
			cat: 'seasonal',
			name: 'Biscoff Cookie Cupcake', // ✅ keep
			price: 9, // single cupcake price
			image:
				'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/a8iObHpvOlsBuCS6edJN/media/672c51749f961a82a0cc97fb.jpeg', // ✅ keep
			alt: 'Biscoff cookie butter cupcake topped with frosting and cookie crumble',
			href: '/bakes/biscoff-cookie-cupcake',
			tag: 'Fan Favorite',
			badgeColor: 'bg-emerald-600', // ✅ keep
			desc: 'Vanilla cupcake swirled with Biscoff cookie butter and topped with silky frosting and cookie crumble.'
		},
		{
			id: 'scary-cookie-set-12-2', // reflects the pack size
			cat: 'seasonal',
			name: 'Scary Cookie Set', // ✅ keep
			price: 36, // 12-pack set price (adjust if needed)
			image:
				'https://assets.cdn.filesafe.space/a8iObHpvOlsBuCS6edJN/media/68e6972b0650b5eb6af71014.jpeg', // ✅ keep
			alt: 'Decorated Halloween sugar cookies: ghosts, spiders, pumpkins, and BOO plaques',
			href: '/bakes/scary-cookie-set',
			tag: 'Limited',
			badgeColor: 'bg-emerald-600', // ✅ keep
			desc: 'Twelve hand-decorated vanilla sugar cookies: 3 ghosts, 3 spiders, 3 pumpkins, and 3 “BOO” plaques. Buttery, tender, and perfect for parties or gifting.'
		}
		// …
	];


  const quotes = [
    {
      id: 'a',
    //   quote: 'The sourdough is unreal—crisp crust with a soft, chewy center.',
    quote: `These cookies are absolutely irresistible! Not only are they beautifully decorated, but they're delicious as well! It is impossible to eat just one!`,  
	author: 'Laura G.',
      role: 'Cookie Customer',
      location: 'Raleigh, NC',
      rating: 5
    },
    {
      id: 'b',
      quote: `I’ve never had much of a sweet tooth, but my taste buds seem to have made an exception for Nichole‘s sweets! I’ve yet to try something she’s made that I didn’t immediately crave again. Treat yourself to a taste — you absolutely won’t regret it!`,
      author: 'Oliver A.',
      role: 'Catering order',
      rating: 5
    }
  ];


</script>

<Hero />
<About />
<!-- <Featured heading="Seasonal" items={featured} /> -->
<Menu />
<Testimonials heading="Loved by our neighbors" {quotes} testimonials={quotes} />
<Footer />