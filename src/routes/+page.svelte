<!-- <script lang="ts">
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

<section
  id="hero"
  class="min-h-svh pt-20 relative isolate overflow-hidden bg-gradient-to-b from-[#F1EFE8] to-[#090A0A]"
>

  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-12">
      
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

      <div class="lg:col-span-8 w-full">
        <div class="relative hidden md:flex items-center justify-center gap-8 w-full">
          <img src={imgA} alt="In the kitchen" class="w-1/4 max-w-sm rounded-2xl object-cover shadow-xl ring-1 ring-black/10 " />
          <img src={imgB} alt="Cupcakes" class="w-[32%] max-w-sm rounded-2xl object-cover shadow-2xl ring-1 ring-black/10  -translate-y-6" />
          <img src={imgC} alt="Sourdough loaf" class="w-[32%] max-w-sm rounded-2xl object-cover shadow-xl ring-1 ring-black/10  translate-y-4" />
          <div class="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-30 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.35)]"></div>
        </div>


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
</section> -->

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
						On an endless journey to create experiences that inspire others. Always motived by
						design that's honest, aesthetic and natural. Probably the only designer you’ll ever
						need.
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

	<section id="work" class="relative z-10 bg-black pb-20 lg:pt-0">
		<div class="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0">
			<div
				data-rellax-speed="-3"
				data-rellax-xs-speed="0"
				data-rellax-mobile-speed="0"
				class="rellax flex flex-wrap items-center gap-6"
				style="transform: translate3d(0px, 0px, 0px);"
			>
				<h2 class="text-7xl font-bold text-white xl:text-8xl">Our work</h2>
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
				<a
					href="/pages/project.html"
					data-rellax-speed="-2"
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
							src="/images/projects/project3.webp"
							alt="project description"
							width="826"
							height="826"
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
				<a
					href="/pages/project.html"
					data-rellax-speed="0"
					data-rellax-xs-speed="0"
					data-rellax-mobile-speed="0"
					data-rellax-tablet-speed="0"
					class="rellax group col-span-2 block lg:col-span-1"
					style="transform: translate3d(0px, 0px, 0px);"
				>
					<div
						class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0"
					>
						<img
							class="transition duration-500"
							src="/images/projects/project4.webp"
							alt="project description"
							width="1380"
							height="1380"
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
				<a
					href="/pages/project.html"
					data-rellax-speed="-3"
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
							src="/images/projects/project5.webp"
							alt="project description"
							width="740"
							height="1112"
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
				<a
					href="/pages/project.html"
					data-rellax-speed="0"
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
							src="/images/projects/project6.webp"
							alt="project description"
							width="740"
							height="1110"
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
							<img src="/images/un-duo.webp" alt="unnamed duo photo" width="1500" height="1000" />
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
	<section
		id="contact"
		class="relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pt-0 lg:pb-32 pb-12"
	>
		<div class="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
			<div class="flex flex-wrap items-center gap-6">
				<h2 class="text-7xl font-bold text-white xl:text-8xl">Let's work together</h2>
				<span
					class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
					>__</span
				>
			</div>
			<div class="mt-24">
				<div class="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24">
					<div class="mt-8 border border-white/30 p-8 sm:p-12">
						<div>
							<h3 class="text-xs font-light tracking-widest text-white uppercase">Address</h3>
							<p class="mt-4 text-white">Riverside 25, San Francisco, California</p>
						</div>
						<div class="mt-16">
							<h3 class="text-xs font-light tracking-widest text-white uppercase">Contact Info</h3>
							<ul class="relative z-20 mt-4 space-y-2 font-light text-white">
								<li>
									<a href="tel:+243000000000">Phone ------ +243 000 000 000</a>
								</li>
								<li>
									<a href="mailto:hello@tailus.io">E-mail ------- hello@tailus.io</a>
								</li>
							</ul>
						</div>
						<div class="mt-16">
							<h3 class="text-xs font-light tracking-widest text-white uppercase">Follow us</h3>
							<ul class="relative z-20 mt-4 space-y-2 font-light text-white">
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
						</div>
					</div>
          <div class="lg:col-span-2">
						<form action="" class="mx-auto space-y-8 md:w-3/4">
							<div class="grid gap-8 sm:grid-cols-2 sm:gap-4">
								<div>
									<label for="firstname" class="tracking-wide text-white">Fistname</label>
									<input
										type="text"
										id="fistname"
										name="fistname"
										autocomplete="name"
										placeholder="Your fistname"
										class="focus:ring-primary mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1"
									/>
								</div>
								<div>
									<label for="lastname" class="tracking-wide text-white">Last name</label>
									<input
										type="text"
										id="lastname"
										name="lastname"
										autocomplete="family-name"
										placeholder="Your last name"
										class="focus:ring-primary mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1"
									/>
								</div>
							</div>
							<div>
								<label for="email" class="tracking-wide text-white">Mail address</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Your mail address"
									class="focus:ring-primary mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1"
								/>
							</div>
							<div>
								<label for="message" class="tracking-wide text-white">Your message</label>
								<textarea
									name="message"
									id="message"
									cols="30"
									rows="6"
									placeholder="Your message"
									class="focus:ring-primary mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1"
								></textarea>
							</div>
							<button
								type="submit"
								class="group hover:bg-primary ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300"
							>
								<span class="relative tracking-wide text-black uppercase group-hover:text-white">
									Send message
								</span>
							</button>
						</form>
					</div>
					
				</div>
			</div>
		</div>
	</section>
</main>
