<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	export let data: { sent?: boolean; callbackError?: string };

	let submitting = false;
	let email = '';
	let returnTo = '';

	onMount(() => {
		const qs = new URLSearchParams(location.search);
		returnTo = qs.get('returnTo') ?? '/admin';
	});

	function handleEnhance({ pending, result }: Parameters<typeof enhance>[0]) {
		pending.finally(() => (submitting = false));
		submitting = true;
		return result;
	}
</script>

<!-- Full-bleed wrapper -->
<div class="min-h-screen bg-neutral-950 text-white">
	<!-- Centered container -->
	<div class="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4">
		<!-- Card -->
		<div class="w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
			<!-- Brand header / title -->
			<header class="mb-6">
				<h1 class="text-2xl font-bold tracking-tight">Sign in</h1>
				<p class="mt-1 text-sm text-white/70">Use your email to receive a magic link.</p>
			</header>

			{#if data.callbackError}
				<div class="mb-4 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">
					{data.callbackError}
				</div>
			{/if}

			{#if data.sent}
				<!-- Sent state -->
				<div class="space-y-4">
					<p class="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
						Check your email for the sign-in link.
					</p>

					<!-- Optional: allow another attempt -->
					<form method="post" use:enhance={handleEnhance} class="space-y-3">
						<input type="hidden" name="returnTo" value={returnTo} />
						<label class="block text-sm text-white/80" for="email-retry">Email</label>
						<input
							id="email-retry"
							name="email"
							type="email"
							required
							autocomplete="email"
							class="w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-white outline-none ring-0 transition focus:border-white/40"
							bind:value={email}
						/>
						<button
							type="submit"
							class="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-lime-300 to-cyan-600 px-4 py-2 font-semibold text-neutral-950 transition hover:opacity-95 active:opacity-90 disabled:opacity-60"
							disabled={submitting}
						>
							{#if submitting}Sending…{:else}Resend magic link{/if}
						</button>
					</form>
				</div>
			{:else}
				<!-- Default form -->
				<form method="post" use:enhance={handleEnhance} class="space-y-4">
					<input type="hidden" name="returnTo" value={returnTo} />

					<div class="space-y-2">
						<label class="block text-sm text-white/80" for="email">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							autocomplete="email"
							class="w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-white outline-none ring-0 transition focus:border-white/40"
							bind:value={email}
						/>
					</div>

					<button
						type="submit"
						class="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-lime-300 to-cyan-600 px-4 py-2 font-semibold text-neutral-950 transition hover:opacity-95 active:opacity-90 disabled:opacity-60"
						disabled={submitting}
					>
						{#if submitting}Sending…{:else}Send magic link{/if}
					</button>

					<p class="text-xs text-white/50">
						By continuing, you’ll receive a one-time sign-in link at the email you enter.
					</p>
				</form>
			{/if}
		</div>


		<p class="mt-6 text-center text-xs text-white/40">
			Problems signing in? Try another email or request a new link.
		</p>
	</div>
</div>
