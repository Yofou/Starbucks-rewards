<script lang="ts">
	export let src: string
	export let title: string
</script>

<div class="w-full cell-item md:col-start-[var(--cell,2)] md:col-end-[calc(var(--cell,2)+1)] grid grid-cols-[112px,minmax(0,310px)] grid-rows-[max-content,1fr] gap-4">
	<img class="row-span-2" {src} alt="">
	<h2 class="font-medium text-[1.15rem]">{title}</h2>
	<p>
		<slot />
	</p>
</div>

<style>
	:global(.cell-item:nth-child(odd)) {
		--cell: 3;
	}
</style>
