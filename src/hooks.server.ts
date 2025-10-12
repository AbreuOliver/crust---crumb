import type { Handle } from '@sveltejs/kit';
import { createSupabaseServerClient } from '$lib/server/supabase';

export const handle: Handle = async ({ event, resolve }) => {
	const supabase = createSupabaseServerClient(event);

	const {
		data: { session }
	} = await supabase.auth.getSession();

	event.locals.supabase = supabase;
	event.locals.session = session ?? null;
	event.locals.user = session?.user ?? null;

	return resolve(event);
};
