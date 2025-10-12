import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals }) => {
	// Handle magic-link callback here (Supabase app will redirect users back with ?code=...)
	const code = url.searchParams.get('code');
	if (code) {
		const { error } = await locals.supabase.auth.exchangeCodeForSession(code);
		if (!error) {
			const returnTo = url.searchParams.get('returnTo') ?? '/admin';
			throw redirect(303, returnTo);
		}
		return { callbackError: 'Invalid or expired link. Please request a new one.' };
	}
	return {};
};

export const actions: Actions = {
	default: async ({ request, url, locals }) => {
		const form = await request.formData();
		const email = String(form.get('email') ?? '').trim();
		if (!email) return fail(400, { message: 'Email required' });

		const returnTo = url.searchParams.get('returnTo') ?? '/admin';
		const emailRedirectTo = `${url.origin}/login?returnTo=${encodeURIComponent(returnTo)}`;

		const { error } = await locals.supabase.auth.signInWithOtp({
			email,
			options: { emailRedirectTo }
		});

		if (error) return fail(400, { message: error.message });
		return { sent: true };
	}
};
