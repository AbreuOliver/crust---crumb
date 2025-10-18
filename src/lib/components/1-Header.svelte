<script lang="ts">
  import { cart, cartCount, cartSubtotal } from '$lib/stores/cart';
  import { fly } from 'svelte/transition';
  import { tick } from 'svelte';

  let cartOpen = false;
  let bagBtn: HTMLButtonElement | null = null;
  let drawerEl: HTMLDivElement | null = null;

  function openCart() {
    cartOpen = true;
  }
  async function closeCart() {
    cartOpen = false;
    await tick();
    bagBtn?.focus(); // return focus to the trigger
  }

  // ESC TO CLOSE (GLOBAL)
  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeCart();
  }

  // OPTIONAL: LOCK BACKGROUND SCROLL WHILE OPEN
  // $: {
  //   const lock = 'overflow-hidden';
  //   if (cartOpen) document.documentElement.classList.add(lock);
  //   else document.documentElement.f.remove(lock);
  // }

  // FOCUS DRAWER WHEN OPENED
  $: if (cartOpen) tick().then(() => drawerEl?.focus());

  // CONVENIENCE REFS (OPTIONAL)
  $: count = $cartCount;
  $: subtotal = $cartSubtotal;
</script>

<svelte:window on:keydown={onKeydown} />

<!-- ╔══════════════════════════════════════════════════════════════════╗
     ║                              HEADER                              ║
     ╚══════════════════════════════════════════════════════════════════╝ -->
<header class="sticky top-0 z-[100] flex h-16 w-screen items-center justify-center bg-[var(--primary-green)] px-4 backdrop-blur-md">
  <nav class="flex h-full w-full max-w-screen-lg">
    <!-- LEFT -->
    <div class="flex items-center">
      <button
        type="button"
        aria-label="Open menu"
        class="group inline-grid size-10 place-items-center rounded-full hover:scale-110 hover:bg-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-green)] active:bg-neutral-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-neutral-100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M10 6h10M4 12h16M7 12h13M4 18h10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </button>
    </div>

    <!-- CENTER -->
    <div class="inline-flex h-full w-full items-center justify-center">
      <a href="/#home">
        <img
          src="https://ik.imagekit.io/bip1v395ybp/Crust-and-Crumb/Crust%20&%20Crumb_white_mdFTIN36B.svg?updatedAt=1760143488816"
          alt="Crust & Crumb logo"
          class="h-14 w-auto py-1"
        />
      </a>
    </div>

    <!-- RIGHT -->
    <div class="flex items-center justify-end">
      <div class="relative pr-1">
        <button
          bind:this={bagBtn}
          type="button"
          aria-label="Open cart"
          aria-expanded={cartOpen}
          aria-controls="cart-drawer"
          on:click={() => (cartOpen ? closeCart() : openCart())}
          class="group inline-grid size-10 place-items-center rounded-full hover:bg-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-green)] active:bg-neutral-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-neutral-100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5">
              <path d="M6.331 8H17.67a2 2 0 0 1 1.977 2.304l-1.255 8.152A3 3 0 0 1 15.426 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8" />
              <path d="M9 11V6a3 3 0 0 1 6 0v5" />
            </g>
          </svg>
        </button>

        {#if $cartCount > 0}
          <span
            class="absolute right-0.5 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--light-green)] p-1 text-md leading-none font-semibold text-white ring-2 ring-white"
            aria-label="Items in cart"
          >
            {$cartCount}
          </span>
        {/if}
      </div>
    </div>
  </nav>
</header>

<!-- ╔══════════════════════════════════════════════════════════════════╗
     ║                       CART DRAWER (FIXED)                        ║
     ╚══════════════════════════════════════════════════════════════════╝ -->
{#if cartOpen}
  <!-- Drawer container (fixed under header). h-20 header => top-20 -->
  <div class="fixed inset-x-0 top-20 z-[95] flex justify-center pointer-events-none">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
      id="cart-drawer"
      bind:this={drawerEl}
      role="dialog"
      aria-modal="true"
      aria-label="Cart"
      tabindex="-1"
      transition:fly={{ y: -12, duration: 160 }}
      class="pointer-events-auto w-full max-w-screen-lg px-0"
      on:click|stopPropagation
    >
      <div class="rounded-none border border-zinc-200 bg-white backdrop-blur-xl shadow-xl ring-1 ring-black/5">
        <!-- DRAWER HEADER -->
        <div class="flex items-center justify-between px-4 pt-6 pb-3 sm:px-6">
          <div class="flex items-center gap-3">
            <h2 class="text-lg font-semibold text-neutral-900">Your Cart</h2>
            <span class="text-xs font-medium text-neutral-600">
              {$cartCount} item{$cartCount === 1 ? '' : 's'}
            </span>
          </div>
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="rounded-md px-2 py-1 text-sm text-neutral-600 hover:bg-neutral-200/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-green)]"
              on:click={closeCart}
            >
              Close
            </button>
          </div>
        </div>

        <!-- DRAWER BODY -->
        {#if $cart.lines.length === 0}
          <div class="px-6 py-8 text-neutral-100">Your cart is empty.</div>
        {:else}
          <ul class="max-h-[45vh] overflow-auto px-2 py-2 sm:px-0">
            {#each $cart.lines as l}
              <li class="mb-2 flex items-center justify-between gap-4 rounded-xl border border-neutral-200/70 bg-white px-4 py-3">
                <div class="min-w-0">
                  <p class="truncate text-sm font-medium text-neutral-900">{l.name}</p>
                  <p class="text-xs text-neutral-600 tabular-nums">${l.price.toFixed(2)}</p>
                </div>
                <div class="flex items-center gap-2">
                  <input
                    class="w-16 rounded-md border border-neutral-300 bg-white px-2 py-1 text-right text-sm text-neutral-800"
                    type="number" min="0" step="1" value={l.qty}
                    on:change={(e) => cart.setQty(l.id, Math.max(0, Number(e.currentTarget.value)))}
                    aria-label={`Quantity for ${l.name}`}
                  />
                  <button
                    class="rounded-md px-2 py-1 text-sm text-neutral-600 hover:bg-neutral-200/70"
                    on:click={() => cart.remove(l.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            {/each}
          </ul>

          <!-- DRAWER FOOTER -->
          <div class="flex items-center justify-between border-t border-neutral-200 px-4 py-4 sm:px-6">
            <div class="text-sm text-neutral-700">Subtotal</div>
            <div class="tabular-nums text-base font-semibold text-neutral-900">
              ${$cartSubtotal.toFixed(2)}
            </div>
          </div>
          <div class="flex items-center justify-end gap-2 px-4 pb-4 sm:px-6">
            <!-- <button
              class="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100"
              on:click={() => cart.clear()}
            >
              Clear
            </button> -->
            <a
              href="/checkout"
              class="rounded-md bg-[var(--light-green)] px-4 py-2 text-sm font-semibold text-black hover:brightness-110"
              on:click={closeCart}
            >
              Checkout
            </a>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- BACKDROP (AREA BELOW HEADER). CLICK TO CLOSE -->
  <button
    class="fixed inset-x-0 top-[5rem] bottom-0 z-[90] bg-black/20"
    aria-label="Close cart"
    on:click={closeCart}
  ></button>
{/if}
