<script lang="ts">
	import Caret from "$lib/icons/caret.svelte";
	import { clickOutside } from "svelte-use-click-outside";
	import { fly } from "svelte/transition";
	export let open = false

	export let onClickOutside: () => void = undefined
</script>

{#if open}
	<div class="md:hidden w-[calc(100%-144px)] z-30 h-full bg-white-full fixed top-[75px] right-0 flex flex-col shadow-inner" use:clickOutside={onClickOutside} transition:fly={{ x: 791, opacity: 1 }}>
		<div class="px-8 py-4 bg-white-light grid grid-cols-[max-content,1fr] items-center font-fira">
			<button on:click={() => open = false}>
				<Caret --rotate="90deg" --text-color="rgba(0,0,0,.58)" />
			</button>
			<h2 class="justify-self-center text-[1.3rem]">Menu</h2>
		</div>

		<a href="/">All products</a>
		<a href="/">Featured</a>
		<a href="/">Previous</a>
		<a href="/">Favourites</a>
	</div>
{/if}

<style>
	a {
		@apply font-fira font-light text-[1.3rem] px-10 py-4;
	}
</style>
