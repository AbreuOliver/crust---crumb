<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>


<section class="h-dvh overflow-y-auto overscroll-y-none" style="-webkit-overflow-scrolling: touch; smooth-scrolling">
	<Header />
	{@render children()}
</section>
