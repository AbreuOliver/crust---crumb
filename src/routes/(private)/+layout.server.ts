// // src/routes/(private)/+layout.server.ts
// import { redirect } from '@sveltejs/kit';

// export const load = async ({ locals, url }) => {
//   const {
//     data: { session }
//   } = await locals.supabase.auth.getSession();

//   if (!session) {
//     // send them to login (adjust path) and preserve intended return url
//     throw redirect(303, `/auth/login?redirectTo=${encodeURIComponent(url.pathname)}`);
//   }
//   return {};
// };


import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	if (!event.locals.session) {
		const returnTo = event.url.pathname + (event.url.search || '');
		throw redirect(303, `/login?returnTo=${encodeURIComponent(returnTo)}`);
	}
	return { session: event.locals.session, user: event.locals.user };
};
