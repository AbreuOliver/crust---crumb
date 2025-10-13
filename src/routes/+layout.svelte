<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>


<!-- <section class="app-scroll h-dvh overflow-y-auto overscroll-x-none overflow-x-hidden" style="-webkit-overflow-scrolling: touch; smooth-scrolling">
	<Header />
	{@render children()}
</section> -->

<section
  class="app-scroll overflow-y-auto overflow-x-hidden overscroll-contain"
  style="-webkit-overflow-scrolling: touch; scroll-behavior: smooth"
>
  <Header />
  {@render children()}
</section>
