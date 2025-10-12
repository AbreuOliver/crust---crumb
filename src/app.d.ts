// import type { SupabaseClient, Session } from '@supabase/supabase-js';

// declare global {
// 	namespace App {
// 		interface Locals {
// 			supabase: SupabaseClient;
// 			session: Session | null;
// 			user: User | null;  // user can be null if not authenticated
// 		}
// 		// Optional: add interface PageData, Error, etc. here if needed
// 	}
// }

// export {};

// Types for locals (available in load/actions/endpoints)
import type { Session, User, SupabaseClient } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient;
			session: Session | null;
			user: User | null;
		}
	}
}
export {};
