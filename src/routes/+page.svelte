<script lang="ts">
  import Menu from '$lib/components/Menu.svelte';
import '../app.css'
</script>


<main class="background relative">
	<section id="home" class="relative flex min-h-screen items-center">
		<div
			aria-hidden="true"
			class="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"
		></div>
		<img
			src="https://ik.imagekit.io/bip1v395ybp/baker_sF07hNGNC.webp?updatedAt=1760027946681"
			fetchpriority="high"
			decoding="async"
			loading="eager"
			class="fixed inset-0 h-full w-full object-cover object-center"
			alt="woman in dark"
			width="4160"
			height="6240"
		/>
		<div class="relative z-10 mx-auto max-w-7xl px-6 pt-60 pb-40 lg:px-12 xl:px-6 2xl:px-0">
			<div class="media-h:md:pb-32 media-h:lg:pb-12 pb-12 xl:pb-12">
				<h1
					data-rellax-speed="-3"
					data-rellax-xs-speed="0"
					data-rellax-mobile-speed="0"
					class="rellax font-serif text-6xl font-thin text-white sm:text-8xl md:text-9xl xl:leading-tight"
					style="transform: translate3d(0px, 0px, 0px);"
				>
					Comfort in every crumb
				</h1>
			</div>
			<div>
				<div class="ml-auto md:w-2/3 md:pt-12 lg:w-1/2">
					<p class="mb-20 text-lg font-light text-white sm:text-2xl xl:leading-normal">
						Handcrafted in small batches, every bake carries the comfort of home and the quiet
						perfection that only patience can bring
					</p>
					<a
						data-rellax-speed="1"
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						href="#work"
						class="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-[#366b5b] before:transition before:duration-300 hover:before:scale-x-125 hover:before:scale-y-100 hover:before:bg-[#366b5b]"
						style="transform: translate3d(0px, 0px, 0px);"
					>
						<span class="relative">See our current menu</span>
					</a>
				</div>
			</div>
			<!-- <div data-rellax-speed="-5" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" class="rellax relative mt-16 ml-auto w-max md:mt-32 md:ml-0 xl:-mt-16" style="transform: translate3d(0px, 0px, 0px);">
                        <span class="text-xs font-light uppercase tracking-widest text-white">Follow us</span>
                        <ul class="relative z-20 mt-4 space-y-2 text-sm font-light text-white">
                            <li>
                                <a href="#" target="_blank">001 ------ Instagram</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">002 ------ Behance</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">003 ------ Twitter</a>
                            </li>
                        </ul>
                    </div> -->
		</div>
	</section>

	<section id="about" class="relative z-10 scroll-mt-30 bg-black pb-20 lg:pt-0">
		<div class="mx-auto max-w-5xl px-6 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0">
			<div
				data-rellax-speed="-3"
				data-rellax-xs-speed="0"
				data-rellax-mobile-speed="0"
				class="rellax flex flex-wrap items-center gap-6"
				style="transform: translate3d(0px, 0px, 0px);"
			>
				<h2 class="font-serif text-7xl font-thin text-white xl:text-8xl">About</h2>
				<span
					class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
					>12 Projects</span
				>
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
							class="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white"
							>01 / 2023</span
						>
					</div>
				</a>
			</div>
		</div>
	</section>
	<!-- === MENU === -->
<Menu />


	<section id="services" class="relative bg-black pt-32 pb-20 md:pb-0 lg:pb-0 xl:pt-96">
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
							<div class="group border-b border-white/30 pb-8">
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
							<div class="group border-b border-white/30 pb-8">
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
