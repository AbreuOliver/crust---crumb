import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

export type CartLine = {
  id: string;
  name: string;
  price: number;
  qty: number;
  desc?: string;
};

type CartState = { lines: CartLine[]; updatedAt: number };
const KEY = 'cc-cart-v1';

function readInitial(): CartState {
  if (!browser) return { lines: [], updatedAt: Date.now() };
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as CartState) : null;
    return parsed?.lines ? parsed : { lines: [], updatedAt: Date.now() };
  } catch {
    return { lines: [], updatedAt: Date.now() };
  }
}

function createCart() {
  const { subscribe, set, update } = writable<CartState>(readInitial());

  // persist on change
  if (browser) {
    subscribe((val) => localStorage.setItem(KEY, JSON.stringify(val)));
  }

  // imperative helpers
  function add(line: Omit<CartLine, 'qty'>, qty = 1) {
    update((s) => {
      const i = s.lines.findIndex((l) => l.id === line.id);
      if (i > -1) {
        const lines = [...s.lines];
        lines[i] = { ...lines[i], qty: lines[i].qty + qty };
        return { lines, updatedAt: Date.now() };
      }
      return { lines: [...s.lines, { ...line, qty }], updatedAt: Date.now() };
    });
  }

  function setQty(id: string, qty: number) {
    update((s) => {
      const lines = s.lines
        .map((l) => (l.id === id ? { ...l, qty } : l))
        .filter((l) => l.qty > 0);
      return { lines, updatedAt: Date.now() };
    });
  }

  function remove(id: string) {
    update((s) => ({ lines: s.lines.filter((l) => l.id !== id), updatedAt: Date.now() }));
  }

  function clear() {
    set({ lines: [], updatedAt: Date.now() });
  }

  // expose store API + helpers (custom store)
  return { subscribe, add, setQty, remove, clear };
}

// the main store (usable as $cart)
export const cart = createCart();

// derived helpers (use as $cartCount / $cartSubtotal)
export const cartCount = derived(cart, ($s) => $s.lines.reduce((n, l) => n + l.qty, 0));
export const cartSubtotal = derived(cart, ($s) => $s.lines.reduce((sum, l) => sum + l.price * l.qty, 0));
