<script lang="ts">
	import ModalCaret from "$lib/icons/modal-caret.svelte";
	import type { Direction } from "./modal.svelte";

	export let length = 0
	export let direction: Direction = "right"
	export let index: number 

	const inc = () => {
		if (index === length - 1) return
		direction = "right"
		index++
	}
	const dec = () => {
		if (index === 0) return
		direction = "left"
		index--
	}

	const onKeyUp = (event: KeyboardEvent) => {
		if (event.key === "ArrowLeft") dec()	
		if (event.key === "ArrowRight") inc() 
		const keyNumber = parseInt(event.key)
		if ( !isNaN(keyNumber) && (keyNumber >= 1 && keyNumber <= length) ) {
			direction = keyNumber > index ? "right" : "left"
			index = keyNumber - 1
		} 
	}
</script>

<svelte:window on:keyup={onKeyUp} />

<div class="grid grid-cols-[48px,max-content,48px] grid-rows-1 gap-6 justify-center row-start-3 row-end-4">
	{#if index > 0}
		<button on:click={dec} class="grid place-content-center">
			<ModalCaret --rotate="180deg" />
		</button>
	{/if}
	<div class="flex gap-4 items-center col-start-2 col-end-3">
		{#each Array.from({ length }) as _, itemIndex}
			<button class="w-3 h-3 rounded-full {index === itemIndex ? 'bg-green-900' : 'bg-[#d9d9d9]'}" on:click={() => index = itemIndex}></button>
		{/each}
	</div>
	{#if index < length - 1}
		<button on:click={inc} class="grid place-content-center">
			<ModalCaret />
		</button>
	{/if}
</div>
