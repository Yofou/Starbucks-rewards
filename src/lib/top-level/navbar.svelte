<script>
	import Location from "$lib/icons/location.svelte";
	import Logo from "$lib/icons/logo.svelte";
import NavClose from "$lib/icons/nav-close.svelte";
	import NavHamburger from "$lib/icons/nav-hamburger.svelte";
	import { onMount } from "svelte";
	import NavbarButton from "./button.svelte";
	import NavbarDrawer from "./navbar-drawer.svelte";

	let isDrawerOpen = false
	let isMobile = false
	const onResize = () => {
		isMobile = window.innerWidth < 768
	}

	onMount( onResize )
</script>

<svelte:window on:resize={onResize} />

<nav class="z-30 fixed top-0 left-0 bg-white-full w-full grid grid-rows-1 gap-4 grid-cols-[repeat(4,max-content),1fr,repeat(3,max-content)] items-center px-6 md:px-[120px] py-[17.5px] md:py-7 font-fira">
	<Logo --dim={ isMobile ? "40px" : "51px" } --mr="24px" />
	<a class="hidden md:flex nav-item" href="/">Menu</a>
	<a class="hidden md:flex nav-item active" href="/">Rewards</a>
	<a class="hidden md:flex nav-item" href="/">Gift cards</a>
	<a class="hidden md:flex nav-item col-start-6 !text-[.8rem] !normal-case items-center gap-1" href="/"><Location /> Find a store</a>
	{#if !isMobile}
		<NavbarButton>Sign in</NavbarButton>
		<NavbarButton --bg="black" --bg-hover="rgba(0,0,0,.7)" --text-color="white">Join now</NavbarButton>	
	{:else}
		<button on:click={() => isDrawerOpen = !isDrawerOpen} class="col-start-[-2] col-end-[-1]">
			{#if isDrawerOpen}
				<NavClose />
			{:else}
				<NavHamburger />
			{/if}
		</button>
	{/if}
</nav>

<NavbarDrawer bind:open={isDrawerOpen} />

<style>
	.nav-item {
		@apply text-[1.05rem] tracking-[1px] uppercase font-semibold items-center h-full;
	}

	.nav-item:nth-of-type(-n+3) {
		@apply h-[calc(100%+56px)];
	}

	.active {
		box-shadow: inset 0 -6px #00754a;
	}

	.nav-item:hover {
		@apply text-green-600;
	}
</style>
