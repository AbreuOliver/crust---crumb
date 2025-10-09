<script lang="ts">

	export let cartCount = 2;
</script>

<header
	class="sticky top-0 z-100 flex h-20 w-screen items-center justify-center border-b border-zinc-200 p-4 backdrop-blur-2xl"
>
<nav class="h-full w-full max-w-screen-lg flex">
	<!-- LEFT -->
	<div class="flex items-center">
		<button
			type="button"
			aria-label="Open menu"
			class="group inline-grid size-10 place-items-center rounded-full
                 hover:bg-neutral-100 focus:outline-none
                 focus-visible:ring-2 focus-visible:ring-emerald-500 active:bg-neutral-200"
		>
			<!-- Make SVG inherit color -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-6 text-neutral-800"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M10 6h10M4 12h16M7 12h13M4 18h10"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/>
			</svg>
		</button>
	</div>

	<!-- CENTER -->
	<div class="inline-flex h-full w-full items-center justify-center">
	<a href="/" class="">
		<img
			src="https://ik.imagekit.io/bip1v395ybp/Crust%20&%20Crumb_H4zR-queh.svg?updatedAt=1760044564192"
			alt="Crust & Crumb logo"
			class="w-auto h-14"
		/>
	</a>
	</div>

	<!-- RIGHT -->
	<div class="flex items-center justify-end">
		<div class="relative pr-1">
			<button
				type="button"
				aria-label="Open cart"
				class="group inline-grid size-10 place-items-center rounded-full
                   hover:bg-neutral-100 focus:outline-none
                   focus-visible:ring-2 focus-visible:ring-emerald-500 active:bg-neutral-200"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="size-6 text-neutral-800"
					viewBox="0 0 24 24"
					fill="none"
				>
					<g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2.5"
					>
						<path
							d="M6.331 8H17.67a2 2 0 0 1 1.977 2.304l-1.255 8.152A3 3 0 0 1 15.426 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8"
						/>
						<path d="M9 11V6a3 3 0 0 1 6 0v5" />
					</g>
				</svg>
			</button>

			{#if cartCount > 0}
				<span
					class="absolute right-0.5 -bottom-1 flex h-5 min-w-[1.1rem] items-center justify-center
                     rounded-full bg-[#264B3F] px-1.5 text-[11px] leading-none font-semibold text-white
                     ring-2 ring-white"
				>
					{cartCount}
				</span>
			{/if}
		</div>
	</div>
	</nav>
</header>
