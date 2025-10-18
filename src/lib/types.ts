export type FeaturedItem = {
	cat: string; // e.g., "seasonal" (used in id)
	name: string; // e.g., "Pumpkin Loaf"
	price: number; // numeric, not formatted
	image: string;
	alt: string;
	desc?: string;
	href?: string; // optional “view details”
	tag?: string;
	badgeColor?: string; // tailwind token like 'bg-emerald-600'
	id?: string; // optional; generated if absent
};

export let heading = 'Featured';
export let items: FeaturedItem[] = [];

export type Category = { id: string; label: string };
export type MenuItem = {
	id: string;
	cat: string;
	name: string;
	price: number;
	desc?: string;
	image?: string;
	alt?: string;
};
