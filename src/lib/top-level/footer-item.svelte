<script lang="ts">
	import Caret from "$lib/icons/caret.svelte";
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	export let title: string;

	let open = false
	let isMobile = false
	const onResize = () => {
		isMobile = window.innerWidth < 768
	}

	onMount(onResize)
</script>

<svelte:window on:resize={onResize} />

<div class="flex flex-col font-fira">
	<h1 class="hidden md:block text-[1.2rem] mb-3">{title}</h1>
	<button class="flex justify-between items-center md:hidden text-[1.2rem] mb-3 text-left" on:click={() => open = !open}>
		{title}
		<Caret --rotate={open ? "180deg" : "0deg"} />
	</button>

	{#if isMobile}
		{#if open}
			<div class="flex flex-col gap-4" transition:slide>
				<slot />
			</div>	
		{/if}
	{:else}
		<slot />
	{/if}
</div>

<style>
	div > :global(a) {
		@apply text-[#000]/50;
	}

	@media (min-width: 768px) {
		div > :global(a) {
			margin-bottom: 1rem;
		}
	}

	div > :global(a:hover) {
		@apply text-black-600;
	}
</style>
