<script lang="ts">
	export let src: string
	export let alt = ""
	export let title: string
	export let description: string
</script>

<div class="grid grid-cols-1 md:grid-cols-[repeat(2,minmax(0,375px))] grid-rows-[repeat(2,max-content)] bg-green-300 shadow-inner gap-x-24 gap-y-4 py-8 justify-center font-fira">
	<img type="decoding" class="md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2 w-full h-full" {src} {alt}>
	<h1 class="mx-4 md:mx-0 text-center md:text-left md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 self-end text-[1.2rem] md:text-[1.6rem] font-medium">{title}</h1>
	<p class="mx-4 md:mx-0 text-center md:text-left md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 text-black-600 text-[.9rem] md:text-[1.025rem] leading-[1.5]">{description}</p>
</div>
