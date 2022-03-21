<script lang="ts">
	import Modal from "$lib/top-level/modal.svelte"
	import type { Option } from "$lib/top-level/modal";

	export let options: Option[] = []
	export let src: string
	export let title: string
	export let description: string

	let openModal = false
</script>

<div class="grid grid-cols-[max-content,1fr] md:grid-cols-1 grid-rows-[max-content,1fr,max-content] md:grid-flow-row gap-y-3 gap-x-4 md:gap-4 font-fira md:justify-items-center text-left md:text-center">
	<button class="row-start-1 row-end-[-1] md:row-end-2" on:click={() => openModal = true}>
		<img class="w-[112px] h-[112px]" {src} alt="">
	</button>
	<h1 class="font-medium text-[1.05rem] md:text-[1.2rem] tracking-[.5px]">{title}</h1>
	<p class="w-full text-[.9rem] md:text-[1rem] text-black-600">{description}</p>
	<a class="text-green-900 font-medium text-[.9rem] md:text-[1.025rem] underline" href="/">Learn more</a>
</div>

{#if openModal}
	<Modal {options} bind:isOpen={openModal} />
{/if}
