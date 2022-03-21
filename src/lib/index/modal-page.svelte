<script lang="ts">
	export let src: string
	export let title: string
	export let description: string
</script>

<div class="w-full flex flex-col items-center gap-4 font-fira text-center">
	<img {src} alt="">
	<h1 class="font-medium text-[1.2rem] text-center">{title}</h1>
	<p class="text-center">{description}</p>
</div>
