<script lang="ts">
	export let count: number
	export let title: string
</script>

<div class="grid grid-cols-[max-content,1fr] md:grid-cols-1 grid-rows-[max-content,1fr] md:grid-flow-row gap-4 md:text-center md:justify-items-center font-fira">
	<h1 class="col-start-1 col-end-2 row-start-1 row-end-3 md:row-end-2 border-2 border-green-600 rounded-full w-12 h-12 grid place-content-center font-bold mb-1 text-green-900 text-[1.3rem]">
		{count}
	</h1>

	<h2 class="text-black-full text-[1.1rem] md:text-[1.2rem] tracking-[.5px] font-medium">{title}</h2>
	<p  class="text-black-600 font-open text-[0.75rem] md:text-[.95rem] font-semibold">
		<slot />
	</p>
</div>
