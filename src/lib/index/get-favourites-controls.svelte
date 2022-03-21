<script lang="ts">
	import { crossfade } from "svelte/transition";
	import { quintOut } from "svelte/easing"
	import type { Favourite } from "$lib/index/favourites"
	
	let index = 0
	export let stars: Favourite[] = []
	export let selected = stars[index]
	$: selected = stars[index]
	export let onHover = false
	$: indexSelected = stars.indexOf(selected)

	const onKeyPress = (event: KeyboardEvent) => {
		if (!onHover) return
		if (index > 0 && event.key === "ArrowLeft") index--
		if (index < (stars.length - 1) && event.key === "ArrowRight") index++
		
		const numberKey = parseInt(event.key)
		if (!isNaN(numberKey) && (numberKey > 0 && numberKey <= stars.length)) {
			index = numberKey - 1
		}
	}

	const [send, receive] = crossfade({
			duration: 200,
			easing: quintOut
	})
</script>

<svelte:window on:keyup={onKeyPress} />

<div class="w-full h-full grid grid-cols-5 md:grid-cols-[repeat(5,108px)] grid-rows-[repeat(2,max-content)] justify-center gap-y-8 md:gap-y-10 bg-[rgb(212,233,226,.33)] pt-12 font-fira">
	<h1 class="col-start-1 col-end-[-1] text-center text-black-full text-[1.6rem] md:text-[1.8rem] font-semibold">Get your favourites for free</h1>

	{#each stars as star}
		<button 
			on:click={() => index = stars.indexOf(star)}
			class="text-[1.3rem] md:text-[1.5rem] p-2 pb-4 col-start-[var(--col-start,1)] col-end-[var(--col-end,2)] row-start-2 row-end-3"
			style="--col-start: {stars.indexOf(star) + 1}; --col-end: {stars.indexOf(star) + 2};"
		>
			{star.stars}<span class="text-[1rem] text-[#cba258]">★</span>
		</button>
	{/each}

	{#key index}
		<hr 
			class="text-green-600 border-2 border-green-600 col-start-[var(--col-start,1)] col-end-[var(--col-end,2)] !opacity-100 row-start-2 row-end-3 self-end" 
			style="--col-start: {indexSelected + 1}; --col-end: {indexSelected + 2};"
			in:send={{ key: index }}
			out:receive={{ key: index }}
		>
	{/key}
</div>
