<script lang="ts">
	import About from '$lib/components/sections/2-About.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import '../app.css';
	import Featured from '$lib/components/sections/3-Featured.svelte';
	import type { FeaturedItem } from '$lib/types';

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
		}
		// …
	];
</script>

<main class="background relative">
	<Hero />
	<About />
	<Featured heading="Seasonal" items={featured} />
	<Menu />

	<!-- <section
		id="services"
		class="relative bg-gradient-to-b from-black via-black to-black pt-32 pb-20 backdrop-blur-3xl md:pb-0 lg:pb-0 xl:pt-96"
	>
		<div class="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
			<div class="flex flex-wrap items-center gap-6">
				<h2 class="font-serif text-5xl font-thin text-white xl:text-6xl">Our services</h2>
				<span
					class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
					>03 services</span
				>
			</div>
			<div class="mt-24">
				<div class="">
					<div class="grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
						<div>
							<div class="group pb-8">
								<div class="flex flex-col gap-4 divide-y divide-white/30">
									<span class="inline-block text-white/60">001</span>
									<h3 class="bg-black pt-6 text-3xl text-white">Branding for Agencies</h3>
								</div>
								<div class="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
									<p
										class="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl"
									>
										Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil
										iusto ea. Officia sint perspiciatis ad ducimus qui.
									</p>
								</div>
							</div>
						</div>
						<div>
							<div class="group pb-8">
								<div class="flex flex-col gap-4 divide-y divide-white/30">
									<span class="inline-block text-white/60">002</span>
									<h3 class="bg-black pt-6 text-3xl text-white">Branding for Agencies</h3>
								</div>
								<div class="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
									<p
										class="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl"
									>
										Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil
										iusto ea. Officia sint perspiciatis ad ducimus qui.
									</p>
								</div>
							</div>
						</div>
						<div>
							<div class="group border-b border-white/30 pb-8">
								<div class="flex flex-col gap-4 divide-y divide-white/30">
									<span class="inline-block text-white/60">003</span>
									<h3 class="bg-black pt-6 text-3xl text-white">Branding for Agencies</h3>
								</div>
								<div class="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
									<p
										class="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl"
									>
										Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil
										iusto ea. Officia sint perspiciatis ad ducimus qui.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> -->
	<!-- <section id="about" class="relative z-10 bg-black pt-32 pb-20 md:pt-0 md:pb-0 lg:pb-0">
		<div class="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
			<div
				data-rellax-speed="-0.4"
				data-rellax-xs-speed="0"
				data-rellax-mobile-speed="0"
				class="rellax flex flex-wrap items-center gap-6"
				style="transform: translate3d(0px, 0px, 0px);"
			>
				<h2 class="font-serif text-5xl font-thin text-white xl:text-6xl">About us</h2>
				<span
					class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
					>01 Duo</span
				>
			</div>
			<div class="mt-24 md:mt-72">
				<div class="grid gap-6">
					<div class="grid md:grid-cols-3">
						<div class="overflow-hidden md:col-span-2">
							<img src="/images/un-duo.webp" alt="unnamed duo" width="1500" height="1000" />
						</div>
					</div>
					<div
						data-rellax-speed="1"
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0.5"
						class="rellax ml-auto md:w-3/5 lg:w-2/5"
						style="transform: translate3d(0px, 0px, 0px);"
					>
						<p class="mt-12 text-2xl font-light text-white">
							Minima iure saepe necessitatibus ipsa voluptatibus, minus voluptatem in facere maxime
							quae repellendus nisi inventore libero impedit eligendi, accusantium consequuntur
							consectetur quidem?
						</p>
					</div>
				</div>
			</div>
		</div>
	</section> -->
	<hr class="h-20 bg-black" />
</main>
