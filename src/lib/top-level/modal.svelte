<script lang="ts" context="module">
	import type { Option } from "./modal";
	export type Direction = "left" | "right"
</script>

<script lang="ts">
	import { scale, fly } from "svelte/transition"
	import ModalClose from "$lib/icons/modal-close.svelte"
	import { clickOutside } from "svelte-use-click-outside"
	import ModalControls from "./modal-controls.svelte"
	import { onMount } from "svelte";
	import ModalPage from "$lib/index/modal-page.svelte";

	export let options: Option[] = []
	export let isOpen = true
	let index = 0
	$: selected = options[index] 

	let direction: Direction = "right"
	const closeModal = () => isOpen = false
	const onKeyUp = (event: KeyboardEvent) => {
		if (event.key !== "Escape") return
		closeModal()
	}

	let isTransitionOn = false
	$: FlyDefaults = { opacity: 1, duration: isTransitionOn ? 250 : 0 }
	onMount(() => {
		isTransitionOn = true
	})
</script>

<svelte:window on:keyup={onKeyUp} />

<div class="z-30 fixed grid top-0 left-0 w-full h-full bg-[#000]/40">
	<div 
	 	transition:scale={{ duration: 200, start: 1.1 }}
		class="bg-white-full place-self-center grid grid-cols-1 py-2 px-4 grid-rows-[50px,1fr,61px] rounded w-full max-w-[420px] overflow-hidden"
		use:clickOutside={closeModal}	
	>
		{#key selected}
			<div 
				in:fly={{ x: (direction === "right" ? 1 : -1) * 420, delay: isTransitionOn ? 10 : 0, ...FlyDefaults }} 
				out:fly|local={{ x: (direction === "left" ? 1 : -1) * 420, ...FlyDefaults }} 
				class="col-start-1 col-end-2 row-start-1 row-end-3 w-full h-full"
			>
				<ModalPage {...selected} />
			</div>
		{/key}
		
		<button 
			class="col-start-1 col-end-2 row-start-1 text-black-600 row-end-2 w-6 h-6 self-end z-10 justify-self-end"
			on:click={closeModal}
		>
			<ModalClose />
		</button>
			
		<ModalControls bind:direction bind:index length={options.length} />
	</div>
</div>
