<script lang="ts">
	import Location from "$lib/icons/location.svelte";
	import NavbarButton from "./button.svelte";
	import { fly, type TransitionConfig } from "svelte/transition";
	import { clickOutside } from "svelte-use-click-outside";
	import Caret from "$lib/icons/caret.svelte";
	import NavDrawerMenu from "./nav-drawer-menu.svelte";

	let isDrawerMenuOpen = false
	export let open = false

	$: bgOpacitiy = open ? 0.4 : 0 
	$: if (open === false) isDrawerMenuOpen = false

	const onKeyUp = (event: KeyboardEvent) => {
		if ( event.key !== "Escape" ) return
		open = false
	}

	type BgFadeOptions = { duration?: number }
	const bgFade = (node: HTMLElement, options: BgFadeOptions): TransitionConfig => {
		return {
			duration: options.duration ?? 200,
			css: t => `
				background-color: rgba(0, 0, 0, ${t * 0.4})
			`
		}
	}

	const onClickOutside = () => {
		if ( isDrawerMenuOpen ) return
		open = false
	}
</script>

<svelte:window on:keyup={onKeyUp} />

{#if open}
	<aside class="md:hidden fixed z-20 top-0 left-0 bg-[#000]/[var(--opacity,0.4)] flex flex-row-reverse w-full h-full" transition:bgFade style:--opacity={bgOpacitiy}>
		<div 
			class="mt-[75px] flex flex-col gap-8 p-8 shadow-inner w-[calc(100%-144px)] h-full bg-white-full" 
			transition:fly={{ x: 791, opacity: 1 }} 
			use:clickOutside={onClickOutside}
		>
			<button on:click={() => isDrawerMenuOpen = true} class="w-full flex justify-between">
				Menu
				<Caret --rotate="-90deg" --text-color="rgba(0, 0, 0, .54)" />
			</button>
			<a href="/">Rewards</a>
			<a href="/">Gift Cards</a>

			<hr class="text-[#000]/10 border border-[#000]/10">

			<div class="flex gap-4">
				<NavbarButton>Sign in</NavbarButton>
				<NavbarButton --bg="black" --bg-hover="rgba(0,0,0,.7)" --text-color="white">Join now</NavbarButton>
			</div>
			<a class="flex font-fira !text-[.8rem] font-medium !normal-case items-center gap-1" href="/"><Location /> Find a store</a>
		</div>
	</aside>
{/if}

<NavDrawerMenu onClickOutside={() => open = false}  bind:open={isDrawerMenuOpen} />

<style>
	:not(a:last-of-type), button {
		@apply text-left text-[1.3rem] font-fira font-light;
	}
</style>
