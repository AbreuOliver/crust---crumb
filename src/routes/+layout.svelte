<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<Header />
<main class="flex min-h-screen flex-col overflow-x-hidden snap-y snap-mandatory">
	{@render children()}
</main>
