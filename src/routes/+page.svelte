<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import '../app.css';
</script>

<main class="background relative">
	<!-- === HERO SECTION === -->
  <Hero />
	<section id="about" class="relative z-10 scroll-mt-30 bg-black pb-20 lg:pt-0">
		<div class="mx-auto max-w-5xl px-6 lg:px-12 xl:px-6 xl:pb-40 2xl:px-0 border-b border-zinc-200">
			<div
				data-rellax-speed="-3"
				data-rellax-xs-speed="0"
				data-rellax-mobile-speed="0"
				class="rellax flex flex-wrap items-center gap-6"
				style="transform: translate3d(0px, 0px, 0px);"
			>
				<h2 class="font-serif text-5xl font-thin text-white xl:text-6xl">About</h2>
				<!-- <span
					class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
					>12 Projects</span
				> -->
			</div>
			<div
				class="relative mt-20 gap-20 space-y-20 gap-x-6 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-72 lg:mt-60"
			>
				<a
					href="/"
					data-rellax-speed="-2"
					data-rellax-xs-speed="0"
					data-rellax-mobile-speed="0"
					data-rellax-tablet-speed="0"
					class="rellax group col-span-2 lg:col-span-1"
					style="transform: translate3d(0px, 0px, 0px);"
				>
					<div
						class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0"
					>
						<img
							class="transition duration-500"
							src="/images/gild/gild-cover.webp"
							alt="gild cover"
							width="2000"
							height="1333"
						/>
					</div>
					<div class="flex items-center justify-between p-4">
						<h3 class="text-2xl font-normal text-white">Gild Sport</h3>
						<span
							class="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white"
							>01 / 2023</span
						>
					</div>
				</a>
				<a
					href="/pages/project.html"
					data-rellax-speed="1"
					data-rellax-xs-speed="0"
					data-rellax-mobile-speed="0"
					data-rellax-tablet-speed="0"
					class="rellax group block"
					style="transform: translate3d(0px, 0px, 0px);"
				>
					<div
						class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0"
					>
						<img
							class="transition duration-500"
							src="/images/projects/project2.webp"
							alt="project description"
							width="1380"
							height="920"
						/>
					</div>
					<div class="flex items-center justify-between p-4">
						<h3 class="text-2xl font-normal text-white">Project Name</h3>
						<span
							class="h-max rounded-full px-2 py-1 text-xs tracking-wider text-white"
							>01 / 2023</span
						>
					</div>
				</a>
			</div>
		</div>
	</section>
	<!-- === MENU SECTION === -->
	<Menu />

	<section id="services" class="relative bg-gradient-to-b from-black via-black to-black backdrop-blur-3xl pt-32 pb-20 md:pb-0 lg:pb-0 xl:pt-96">
		<div class="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
			<div class="flex flex-wrap items-center gap-6">
				<h2 class="text-7xl font-bold text-white xl:text-8xl">Our services</h2>
				<span
					class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
					>03 services</span
				>
			</div>
			<div class="mt-24">
				<div class="">
					<div class="grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
						<div>
							<div class="group  pb-8">
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
							<div class="group  pb-8">
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
	</section>
	<section id="about" class="relative z-10 bg-black pt-32 pb-20 md:pt-0 md:pb-0 lg:pb-0">
		<div class="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
			<div
				data-rellax-speed="-0.4"
				data-rellax-xs-speed="0"
				data-rellax-mobile-speed="0"
				class="rellax flex flex-wrap items-center gap-6"
				style="transform: translate3d(0px, 0px, 0px);"
			>
				<h2 class="text-7xl font-bold text-white xl:text-8xl">About us</h2>
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
	</section>
</main>
